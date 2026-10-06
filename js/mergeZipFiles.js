// Utility to merge a MobaXterm license file with a custom settings file.
// Loaded as a classic script (no ES module) so the page also works over file://.

/**
 * Reject entry names that could escape the archive or poison object prototypes.
 * Plain string checks only.
 * @param {string} name
 * @returns {boolean} true when the name is unsafe and must be skipped
 */
function isUnsafeZipEntryName(name) {
    if (!name) {
        return true;
    }
    if (name.indexOf('\\') !== -1) {
        return true;
    }
    if (name.charAt(0) === '/') {
        return true;
    }
    if (name.indexOf(':') !== -1) {
        return true;
    }
    var segments = name.split('/');
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (segment === '..'
            || segment === '__proto__'
            || segment === 'constructor'
            || segment === 'prototype') {
            return true;
        }
    }
    return false;
}

/**
 * Merges a custom settings file with the license file.
 * @param {Blob} licenseFile - The Custom.mxtpro license file (ZIP containing Pro.key)
 * @param {Blob} customSettingsFile - The MobaXterm customization.custom file (ZIP with settings)
 * @returns {Promise<Blob>} resolves to the merged ZIP file
 */
async function mergeZipFiles(licenseFile, customSettingsFile) {
    var licenseZip = await JSZip.loadAsync(licenseFile);
    var settingsZip = await JSZip.loadAsync(customSettingsFile);

    var proKeyEntry = licenseZip.file('Pro.key');
    if (!proKeyEntry) {
        throw new Error('The license file does not contain a Pro.key entry.');
    }
    var proKeyContent = await proKeyEntry.async('string');

    var mergedZip = new JSZip();
    mergedZip.file('Pro.key', proKeyContent);

    var entries = [];
    settingsZip.forEach(function (relativePath, entry) {
        if (entry.dir) {
            return;
        }
        if (isUnsafeZipEntryName(relativePath)) {
            return;
        }
        // Never let the settings archive overwrite the license.
        if (relativePath.toLowerCase() === 'pro.key') {
            return;
        }
        entries.push({ path: relativePath, entry: entry });
    });

    for (var i = 0; i < entries.length; i++) {
        var content = await entries[i].entry.async('blob');
        mergedZip.file(entries[i].path, content);
    }

    return mergedZip.generateAsync({ type: 'blob' });
}
