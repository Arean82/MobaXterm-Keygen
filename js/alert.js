const asciiArt = `
 @@@@@@@@   @@@@@@   @@@@@@@   @@@@@@@@   @@@@@@   @@@        @@@@@@ 
 @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@       @@@@@@@@
      @@!  @@!  @@@  @@!  @@@  @@!       @@!  @@@  @@!       @@!  @@@
     !@!   !@!  @!@  !@!  @!@  !@!       !@!  @!@  !@!       !@!  @!@
    @!!    @!@!@!@!  @!@!!@!   @!!!:!    @!@!@!@!  @!!       @!@!@!@!
   !!!     !!!@!!!!  !!@!@!    !!!!!:    !!!@!!!!  !!!       !!!@!!!!
  !!:      !!:  !!!  !!: :!!   !!:       !!:  !!!  !!:       !!:  !!!
 :!:       :!:  !:!  :!:  !:!  :!:       :!:  !:!   :!:      :!:  !:!
  :: ::::  ::   :::  ::   :::   ::       ::   :::   :: ::::  ::   :::
 : :: : :   :   : :   :   : :   :         :   : :  : :: : :   :   : :
`;

const asciiAuraStyle = `
  font-family: "Courier New", monospace;
  font-weight: 900;
  background: linear-gradient(90deg, #60a5fa, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  color: transparent;
  display: block;
  white-space: pre;
`;

const warningBodyStyle = `
  font-size: 16px;
  color: #d1d5db;
  font-weight: 500;
  line-height: 1.6;
  font-family: system-ui, -apple-system, sans-serif;
  padding: 10px 0 20px 0;
`;

const signatureStyle = `
  font-size: 14px;
  font-weight: bold;
  background: linear-gradient(90deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'Outfit', sans-serif;
`;

function renderSecureAura() {
  // Print the branding banner. The console is intentionally NOT cleared so the
  // user keeps their own history, and no false "protected" claim is made.
  console.log('%c' + asciiArt, asciiAuraStyle);

  console.log(
    "%cThis is a browser console intended for developers.\nDo not paste or run code here unless you fully understand it — doing so can compromise your session.",
    warningBodyStyle
  );

  console.log("%c✨ MobaXterm Keygen System - v3.1", signatureStyle);
}

// Render the banner once
renderSecureAura();
