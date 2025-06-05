import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

class MenuItem {
  name: string;
  href: string;

  constructor(name: string, href: string) {
    this.name = name;
    this.href = href;
  }
}

function RenderMenuItem({ item }: { item: MenuItem }) {
  const router = useRouter();

  const isActive = (path: string) => path === router.pathname;

  return (
    <li className="menu-item relative">
      <Link
        href={item.href}
        className={`menu-link transition-colors duration-300 hover:text-primary ${
          isActive(item.href)
            ? "text-primary after:scale-x-100"
            : "text-gray-200"
        } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:rounded-xl after:transition-transform after:duration-300`}
      >
        {item.name}
      </Link>
    </li>
  );
}

export default function Menu() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!isOpen);

  const menu = [
    new MenuItem("Home", "/"),
    new MenuItem("Github", "https://github.com/JavaOff?tab=overview&from=2022-12-01&to=2022-12-31"),
    new MenuItem("Discord", "https://discord.com/channels/@me/1338165634483359859"),
  ];

  return (
    <>
      <nav className="menu-navbar fixed top-0 z-50 w-full bg-background2/50 backdrop-blur-md border-b border-white/10">
        <div className="menu-container px-6 py-4 flex items-center justify-between">
          <div className="menu-logo text-2xl font-bold transition duration-300 hover:scale-[1.06]">
            <Link
              href="/"
              className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text [text-shadow:0_0_10px_#FF0053]"
            >
              <Image src="/logo.png" width={46} height={46} alt="Logo" />
            </Link>
          </div>

          <div className="menu-desktop hidden lg:flex items-center justify-between flex-grow">
            <ul className="menu-list flex gap-6 justify-center flex-grow">
              {menu.map((item) => (
                <RenderMenuItem key={item.href} item={item} />
              ))}
            </ul>

            <button
              onClick={() => window.open("/shop", "_self")}
              className="bg-primary hover:bg-pink-700 text-white py-2 px-5 rounded-full shadow-md transition"
            >
              Shop
            </button>
          </div>

          <div className="menu-mobile-toggle block lg:hidden">
            <button onClick={toggleMenu} className="flex flex-col items-center">
              <span
                className={`hamburger-line bg-white h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              />
              <span
                className={`hamburger-line bg-white h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`hamburger-line bg-white h-0.5 w-6 rounded-sm transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="menu-mobile fixed top-[64px] z-50 w-full bg-background2/50 backdrop-blur-md border-t border-white/10 p-6 lg:hidden"
          >
            <ul className="menu-mobile-list flex flex-col items-center gap-6">
              {menu.map((item) => (
                <RenderMenuItem key={item.href} item={item} />
              ))}
              <li className="menu-item w-full">
                <button
                  onClick={() => window.open("/contact", "_self")}
                  className="menu-contact-button bg-primary/30 text-primary w-full py-2 px-6 rounded-xl select-none transition duration-300 active:scale-[0.96]"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
