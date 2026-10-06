// MobaXterm license generator.
// Loaded as a classic script so it also works when index.html is opened from
// the local filesystem (file://), where ES modules would be blocked.
var VariantBase64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.split('');
var VariantBase64Dict = {};
VariantBase64Table.forEach(function (val, i) { VariantBase64Dict[i] = val; });

/** license type */
var LicenseType = {
    Professional: 1,
    Educational: 3,
    Personal: 4
};

/**
 * Read up to four little-endian bytes as an unsigned integer.
 * Missing bytes are treated as zero.
 * @param {number[]} bytes
 * @param {number} offset
 * @returns {number}
 */
function bytesToInt(bytes, offset) {
    return ((bytes[offset] & 0xFF)
        | ((bytes[offset + 1] & 0xFF) << 8)
        | ((bytes[offset + 2] & 0xFF) << 16)
        | ((bytes[offset + 3] & 0xFF) << 24));
}

/**
 * Convert a UTF-8 byte array to a string.
 * @param {number[]} bytes
 * @returns {string}
 */
function bytesToStr(bytes) {
    var str = '';
    for (var i = 0; i < bytes.length; i++) {
        var one = bytes[i].toString(2);
        var leadingOnes = 0;
        while (leadingOnes < one.length && one.charAt(leadingOnes) === '1') {
            leadingOnes++;
        }
        var isMultiByte = leadingOnes > 0
            && leadingOnes < one.length
            && one.charAt(leadingOnes) === '0'
            && one.length === 8;
        if (isMultiByte) {
            var store = one.slice(7 - leadingOnes);
            for (var st = 1; st < leadingOnes; st++) {
                store += bytes[st + i].toString(2).slice(2);
            }
            str += String.fromCharCode(parseInt(store, 2));
            i += leadingOnes - 1;
        } else {
            str += String.fromCharCode(bytes[i]);
        }
    }
    return str;
}

/**
 * Convert a string to a UTF-8 byte array.
 * @param {string} str
 * @returns {number[]}
 */
function strToBytes(str) {
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        if (char >= 0x010000 && char <= 0x10FFFF) {
            bytes.push(((char >> 18) & 0x07) | 0xF0);
            bytes.push(((char >> 12) & 0x3F) | 0x80);
            bytes.push(((char >> 6) & 0x3F) | 0x80);
            bytes.push((char & 0x3F) | 0x80);
        } else if (char >= 0x000800 && char <= 0x00FFFF) {
            bytes.push(((char >> 12) & 0x0F) | 0xE0);
            bytes.push(((char >> 6) & 0x3F) | 0x80);
            bytes.push((char & 0x3F) | 0x80);
        } else if (char >= 0x000080 && char <= 0x0007FF) {
            bytes.push(((char >> 6) & 0x1F) | 0xC0);
            bytes.push((char & 0x3F) | 0x80);
        } else {
            bytes.push(char & 0xFF);
        }
    }
    return bytes;
}

/**
 * Encode bytes with MobaXterm's variant base64 alphabet.
 * @param {number[]} bs
 * @returns {number[]}
 */
function VariantBase64Encode(bs) {
    var result = [];
    var blocksCount = Math.floor(bs.length / 3);
    var leftBytes = bs.length % 3;
    var codingInt, block;
    for (var i = 0; i < blocksCount; i++) {
        codingInt = bytesToInt(bs, 3 * i);
        block = VariantBase64Dict[codingInt & 0x3f];
        block += VariantBase64Dict[(codingInt >> 6) & 0x3f];
        block += VariantBase64Dict[(codingInt >> 12) & 0x3f];
        block += VariantBase64Dict[(codingInt >> 18) & 0x3f];
        result = result.concat(strToBytes(block));
    }

    switch (leftBytes) {
        case 0:
            return result;
        case 1:
            codingInt = bytesToInt(bs, 3 * blocksCount);
            block = VariantBase64Dict[codingInt & 0x3f];
            block += VariantBase64Dict[(codingInt >> 6) & 0x3f];
            return result.concat(strToBytes(block));
        default:
            codingInt = bytesToInt(bs, 3 * blocksCount);
            block = VariantBase64Dict[codingInt & 0x3f];
            block += VariantBase64Dict[(codingInt >> 6) & 0x3f];
            block += VariantBase64Dict[(codingInt >> 12) & 0x3f];
            return result.concat(strToBytes(block));
    }
}

/**
 * XOR-encrypt bytes with MobaXterm's key schedule.
 * The schedule feeds the just-produced ciphertext byte back into the key,
 * so the last element of the output is used for the next round.
 * @param {number} key
 * @param {number[]} bs
 * @returns {number[]}
 */
function EncryptBytes(key, bs) {
    var result = [];
    bs.forEach(function (val) {
        var encrypted = val ^ ((key >> 8) & 0xff);
        result.push(encrypted);
        key = encrypted & key | 0x482D;
    });
    return result;
}

/**
 * @param {number} type License type
 * @param {string} userName user ID
 * @param {number} count Number of users supported by license
 * @param {number} majorVersion Major version number e.g. 21.0 is 21
 * @param {number} minorVersion Minor version number e.g. 21.0 is 0
 * @returns {string}
 */
function generateLicense(type, userName, count, majorVersion, minorVersion) {
    var licenseSourceStr = type + '#' + userName + '|' + majorVersion + '' + minorVersion
        + '#' + count + '#' + majorVersion + '3' + minorVersion + '6' + minorVersion + '#0#0#0#';
    return bytesToStr(VariantBase64Encode(EncryptBytes(0x787, strToBytes(licenseSourceStr))));
}
