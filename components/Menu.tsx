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

  function isActive(path: string): boolean {
    return path === router.pathname;
  }

  return (
    <li className="relative my-auto">
      <Link
        href={item.href}
        className={`my-auto hover:text-primary ${
          isActive(item.href)
            ? "text-primary after:scale-x-100"
            : "text-gray-200"
        } transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:rounded-xl after:transition-transform after:duration-300`}
      >
        {item.name}
      </Link>
    </li>
  );
}

export default function Menu() {
  const [isOpen, setOpen] = useState(false);

  function openMenu() {
    setOpen(!isOpen);
  }

  const menu = [
    new MenuItem("Home", "/"),
    new MenuItem("Github", "https://github.com/JavaOff?tab=overview&from=2022-12-01&to=2022-12-31"),
    new MenuItem("Discord", "https://discord.com/channels/@me/1338165634483359859"),
  ];

  return (
    <>
      <div className="flex justify-center items-center">
        <nav className="fixed top-8 z-50 rounded-xl bg-background2/50 backdrop-blur-md border border-white/5 w-[90%] max-w-6xl mx-auto">
          <div className="px-8 py-4 flex items-center justify-between gap-4">
            <div className="text-2xl font-bold transition ease-in-out duration-300 hover:scale-[1.06] whitespace-nowrap">
              <Link href="/"className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text [text-shadow:0_0_10px_#FF0053]">
                <Image src="/logo.png" width={46} height={46} alt="Logo" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center justify-between flex-grow">
              <ul className="flex gap-6 justify-center flex-grow">
                {menu.map((item) => (
                  <RenderMenuItem key={item.href} item={item} />
                ))}
              </ul>

              <button
                onClick={() => window.open("/contact", "_self")}
                className="bg-primary/30 text-primary py-2 px-6 rounded-xl select-none transition ease-in-out duration-300 active:scale-[0.96] ml-6"
              >
                Kontakt
              </button>
            </div>

            <div className="block lg:hidden">
              <button
                onClick={openMenu}
                className="flex flex-col justify-center items-center"
              >
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                />
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-32 z-50 w-[90%] max-w-6xl mx-auto bg-background2/50 backdrop-blur-md border border-white/5 rounded-xl p-6 lg:hidden"
          >
            <ul className="flex flex-col items-center gap-6">
              {menu.map((item) => (
                <RenderMenuItem key={item.href} item={item} />
              ))}

              <li className="relative my-auto w-full">
                <button
                  onClick={() => window.open("/contact", "_self")}
                  className="bg-primary/30 text-primary w-full py-2 px-6 rounded-xl select-none transition ease-in-out duration-300 active:scale-[0.96]"
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
