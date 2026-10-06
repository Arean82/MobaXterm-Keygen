<div align="center">
  <img src="logo/logo.png" alt="MobaXterm Keygen Logo" width="120" />
</div>

# MobaXterm Keygen & Customizer 🚀

**Fast, secure license generator and customizer.**

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](#) [![Version](https://img.shields.io/badge/Version-v3.1-green.svg?style=for-the-badge)](#) [![Compatibility](https://img.shields.io/badge/Compatible-v20.X%20|%20v25.X%20|%20v26.4%20|%20v26.5-orange?style=for-the-badge)](#)

⭐ Please star this repository if you find it helpful! ⭐

---

## 🔥 Overview

A modern, user-friendly, and beautifully designed web tool for generating activation keys and customizing **MobaXterm**—the ultimate terminal emulator for Windows with an integrated X11 server, SSH client, and comprehensive network toolset.

All license generation and file merging run **100% locally** in your browser — your inputs and files are never uploaded. The page only loads a few static assets (web fonts, the CSS framework, and the site icon) from external hosts.

## ✨ Key Features

- **💎 Premium Glassmorphism UI** - Enjoy a sleek, modern, and completely responsive experience.
- **🌓 Adaptive Theme** - Seamless dark and light mode toggle.
- **🔒 Multi-Edition Support** - Generate licenses for various MobaXterm editions effortlessly.
- **👥 Flexible User Allocation** - Define your own custom concurrent user limit.
- **💾 One-Click Downloads** - Get your `.mxtpro` files instantly in a neat package.
- **🔧 Customizer Integration** - Merge the settings you export from MobaXterm's own Customizer into a single license file.
- **🖼️ Brand Personalization** - Merge your exported customizer settings so your company logo is applied.
- **🔌 Plugins & Bookmarks** - Carry over `.mxt3` plugins and predefined SSH/FTP profiles from your exported settings.

## 🚀 Compatibility

- Official support tested extensively with MobaXterm versions **20.X, 25.X, 26.4, and 26.5**.
- Compatible with both **Portable** and **Installer (Desktop)** editions.

## 📖 How to Use

### 1️⃣ The Key Generator

1. **Access the Generator**: Open the [MobaXterm Key Generator](https://mobaxterm-keygen.vercel.app/) web application — or run it fully offline by opening `index.html` directly in your browser.
2. **Setup your License**:
   - Choose your preferred MobaXterm Edition from the dropdown.
   - Enter your username (alphabetical characters only).
   - Input your current target version (e.g., `26.5`).
   - Define your desired number of users.
3. **Generate**: Click the big **"Generate License"** button to start downloading your `Custom.mxtpro` key.
4. **Deploy**: Drop this file inside your MobaXterm installation folder:
   ```text
   C:\Program Files (x86)\Mobatek\MobaXterm
   ```
   For the **Portable** edition, place it in the same folder as `MobaXterm.exe`.

### 2️⃣ Advanced: Settings Merger

If you have personalized MobaXterm preferences (Customizer tweaks, logos, bash profiles):

1. Switch to the **Merger** tab inside our web app.
2. **Export your settings**: Run `.\MobaXterm.exe -customizer` and select the option to export to `MobaXterm customization.custom`.
3. **Upload both files**:
   - The license key file (`Custom.mxtpro`).
   - The exported configuration file (`MobaXterm customization.custom`).
4. Click **Merge Files** to inject everything into a single, unified `Custom.mxtpro` file to deploy normally.

## 🛠 Troubleshooting

<details>
<summary><strong>Activation isn't being recognized?</strong></summary>
Ensure you are running a supported version (v20.X, v25.X, v26.4, or v26.5). Also, make sure the file is strictly named `Custom.mxtpro` without any duplicates like `Custom (1).mxtpro`.
</details>

<details>
<summary><strong>File generation fails?</strong></summary>
Double check that your username contains letters only (A–Z, a–z). Spaces, digits, and symbols are rejected by the generator's validation.
</details>

## 🔐 Technical & Security Details

This tool operates completely **client-side** using `Vue.js` and plain DOM APIs. **Your inputs and generated licenses never travel to any backend server** — the only network requests are for static assets (web fonts, the CSS framework, and the site icon).

> **Disclaimer:** This project is provided exclusively for educational concepts and reverse-engineering study cases. For commercial environments, please consider supporting the official developers by purchasing an enterprise license.

## 📈 Version History

- **v3.1** - Added support for versions 26.4 and 26.5
- **v3.0** - Refined UI using a completely reconstructed Glassmorphism aesthetic and modern UX updates. Updated support for up to `26.3`.
- **v2.7** - Added support for version 26.0
- **v2.6** - Added support for version 25.4
- **v2.5** - Added support for version 25.3
- **v2.4** - Brought full MobaXterm customizer functionality
- **v2.0** - Major UI redesign

---

**Crafted with ❤️ by Arean Narrayan**

[⭐ Star us on GitHub](https://github.com/Arean82/MobaXterm-Keygen)
