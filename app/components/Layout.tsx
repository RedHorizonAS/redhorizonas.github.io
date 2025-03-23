// app/components/layout.tsx

import { ReactNode } from "react";
import { Link } from "@remix-run/react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col gap-8">
      {/* Header */}
      <header className="bg-gray-800 text-white shadow">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          {/* Brand / Logo */}
          <h1 className="text-lg font-bold">
            <Link to="/">
            <img
              src="/red_horizon.png"
              alt="Red Horizon"
              className="w-full max-w-40"
            />
            </Link>
          </h1>
          
          {/* Navigation Links */}
          <ul className="flex space-x-4 text-spektr-cyan-50 tracking-tighter text-center font-regular">
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Dynamic Content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Red Horizon AS. All rights reserved.</p>
        <text>Org. nr. 931 728 326</text>
      </footer>
    </div>
  );
}


// Darkmode
{/* 
const [isDarkMode, setIsDarkMode] = useState(false);

const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
};

<div id="hello" className={isDarkMode ? "dark" : "light"}>
  <Button variant="default" onClick={toggleDarkMode}>
    {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
  </Button>
</div> */}