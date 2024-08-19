import Link from "next/link";
import Image from "next/image";
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
        <div className="space-x-6">
          <Link href="/" className="text-secondary hover:text-primary">
            Home
          </Link>
          <Link href="/steps" className="text-secondary hover:text-primary">
            Guide
          </Link>
          <Link href={mainPageConfig.navbarButtonLink} legacyBehavior>
            <a
              className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-6 py-3 rounded-2xl text-sm hover:from-blue-700 hover:to-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              { mainPageConfig.navbarButtonText }
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
