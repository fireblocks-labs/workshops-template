import Layout from "./components/Layout";
import Link from "next/link";

export default function Home() {
  const cardClassName = "bg-white shadow-lg rounded-lg p-6 shadow-blue-200";

  return (
    <Layout>
      <div className="bg-gradient-to-r from-white via-blue-50 to-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Fireblocks Summer School
            <br />
            <br />
            <p className="text-4xl">Web3 Workshop</p>
          </h2>
          <p className="text-lg text-secondary mb-8">
            Make sure that you have an active Fireblocks Sandbox Workspace.{" "}
            <br></br>If you don{"'"}t - please click below to get a free one:
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://www.fireblocks.com/developer-sandbox-sign-up/"
              legacyBehavior
            >
              <a
                className="text-primary px-6 py-3 border border-primary rounded-2xl text-sm hover:bg-blue-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sandbox Signup
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 md:px-12 lg:px-24">
        <h3 className="text-2xl font-bold text-primary mb-8">
          What You Will Do:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={cardClassName}>
            <h4 className="text-xl font-semibold mb-2">General Setup</h4>
            <p className="text-secondary">
              Initialize the project and install dependencies.
            </p>
          </div>
          <div className={cardClassName}>
            <h4 className="text-xl font-semibold mb-2">
              Install Open Source Tooling
            </h4>
            <p className="text-secondary">
              Install and configure some EVM open source tooling like Hardhat and ethers.js
            </p>
          </div>
          <div className={cardClassName}>
            <h4 className="text-xl font-semibold mb-2">
              Use Fireblocks Developer Tools
            </h4>
            <p className="text-secondary">Use the Fireblocks Developer tooling to integrate into Hardhat, Ethers.js and web3.js</p>
          </div>
          <div className={cardClassName}>
            <h4 className="text-xl font-semibold mb-2">Create, Deploy and Mint an NFT</h4>
            <p className="text-secondary">
              Create a Smart Contract, deploy it using Fireblocks wallet and tools and mint your own NFT on Sepolia
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mb-10">
        <Link
          href="/steps"
          className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-6 py-3 rounded-2xl text-sm hover:from-blue-700 hover:to-blue-700"
        >
          Get Started
        </Link>
      </div>
    </Layout>
  );
}
