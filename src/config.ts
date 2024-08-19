export const mainPageConfig = {
  navbarButtonText: "Login",
  navbarButtonLink: "https://sandbox.fireblocks.io",
  mainTitle: "Fireblocks Summer School",
  subTitle: "Web3 Workshop",
  heroText:
    "Make sure that you have an active Fireblocks Sandbox Workspace.\nIf you don't - please click below to get a free one:",
  heroButtonText: "Sandbox Signup",
  heroButtonLink: "https://www.fireblocks.com/developer-sandbox-sign-up/",
  workshopSummarySteps: [
    {
      title: "General Setup",
      text: "Initialize the project and install dependencies.",
    },
    {
      title: "Install Open Source Tooling",
      text: "Install and configure some EVM open source tooling like Hardhat and ethers.js",
    },
    {
      title: "Use Fireblocks Developer Tools",
      text: "Use the Fireblocks Developer tooling to integrate into Hardhat, Ethers.js and web3.js",
    },
    {
      title: "Create, Deploy and Mint an NFT",
      text: "Create a Smart Contract, deploy it using Fireblocks wallet and tools and mint your own NFT on Sepolia",
    },
  ],
};

export const stepsPageConfig = {
  stepsData: [
    { id: 1, title: "Step 1: Setup", file: "step1.md" },
    { id: 2, title: "Step 2: Configure Hardhat", file: "step2.md" },
    { id: 3, title: "Step 3: Compile our Smart Contract", file: "step3.md" },
    { id: 4, title: "Step 4: Deploy our Smart Contract", file: "step4.md" },
    { id: 5, title: "Step 5: Mint NFT", file: "step5.md" },
  ],
  prerequisites: [
    {
      text: "Basic JavaScript knowledge"
    },
    {
      text: "Node.js version >20 installed"
    },
    {
      text: "NPM latest version installed"
    },
    {
      text: "Fireblocks Sandbox Workspace"
    },
    {
      text: "Fireblocks API Key"
    },
    {
      text: "A code editor like VS Code"
    }
  ],
};

