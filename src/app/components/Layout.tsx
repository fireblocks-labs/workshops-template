// src/components/Layout.tsx
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-darkGray text-white py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <p>&copy; 2024 Fireblocks Summer School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
