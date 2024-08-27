"use client"

import Link from "next/link";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { generalConfig, navBarConfig } from "@/config";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md shadow-primary-50 py-3">
      <nav className="container mx-auto px-4 md:px-12 lg:px-24 flex justify-between items-center">
        <Link href={navBarConfig.logoLink}>
          <Image
            src= {`${generalConfig.basePath}/images/logo.svg`}
            alt="Company Logo"
            width={140}
            height={40}
          />
        </Link>
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-500 hover:text-primary-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "fixed inset-0 z-50 bg-white flex flex-col items-center justify-center space-y-6 p-8" : "hidden"
          } md:flex md:items-center md:space-x-6 md:ml-auto`}
        >
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-primary-500 hover:text-primary-700 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <Link href="/" className="block text-secondary hover:text-primary text-xl">
            Home
          </Link>
          <Link href="/steps" className="block text-secondary hover:text-primary text-xl">
            Guide
          </Link>
          {navBarConfig.discordLink && (
            <Link href={navBarConfig.discordLink} legacyBehavior>
              <a
                className="text-primary-500 hover:text-primary-700 text-2xl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Discord"
              >
                <FaDiscord size={30} />
              </a>
            </Link>
          )}
          <Link href={navBarConfig.navbarButtonLink} legacyBehavior>
            <a
              className="block bg-gradient-to-r from-primary-300 to-primary-600 text-white px-4 py-2 rounded-2xl text-md hover:from-primary hover:to-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {navBarConfig.navbarButtonText}
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
