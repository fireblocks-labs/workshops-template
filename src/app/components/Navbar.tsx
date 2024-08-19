import Link from "next/link";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa"; // Importing the Discord icon from react-icons
import { mainPageConfig } from "@/config";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md shadow-blue-50 py-3">
      <nav className="container w-auto mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
        <Link href="https://fireblocks.com">
          <Image
            src="/summer-school-workshop/images/logo.svg"
            alt="Company Logo"
            width={140}
            height={40}
          />
        </Link>
        <div className="space-x-6 flex items-center">
          <Link href="/" className="text-secondary hover:text-primary">
            Home
          </Link>
          <Link href="/steps" className="text-secondary hover:text-primary">
            Guide
          </Link>
          <div className="relative group flex items-center">
            <Link href="https://discord.gg/QdxjMrVV" legacyBehavior>
              <a
                className="ml-4 text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Discord"
              >
                <FaDiscord size={30} />
              </a>
            </Link>
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
              Get Support on our Discord channel
            </div>
          </div>
          <Link href={mainPageConfig.navbarButtonLink} legacyBehavior>
            <a
              className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-6 py-3 rounded-2xl text-sm hover:from-blue-700 hover:to-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {mainPageConfig.navbarButtonText}
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
