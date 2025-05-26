"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Users", href: "/users" },
  { label: "Bookmarks", href: "/bookmarks" },
  { label: "Analytics", href: "/analytics" },
];

function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="ml-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
    >
      Logout
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md border-b border-red-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-xl font-bold text-red-600 dark:text-red-400">
            HR Dashboard
          </h1>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-red-600 underline dark:text-red-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-red-500"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <ThemeToggle />
            <LogoutButton />
          </div>

          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium ${
                  pathname === item.href
                    ? "text-red-600 underline dark:text-red-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-red-500"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Theme Toggle for mobile */}
            <div className="mt-2 flex items-center gap-4">
              <ThemeToggle />
              <LogoutButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
