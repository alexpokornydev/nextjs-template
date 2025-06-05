import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import ReactLenis from "lenis/react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from "@/components/Menu";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <ReactLenis root>
      <Menu />
      <ToastContainer
        position="bottom-right"
        transition={Slide}
        autoClose={5000}
        draggable
        pauseOnFocusLoss
        closeOnClick
        newestOnTop
        closeButton={false}
      />

      <main className="relative min-h-screen pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-white/10 text-zinc-300 px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Info */}
          <div>
            <h3 className="text-white text-lg font-semibold">JavaOff</h3>
            <p className="text-sm mt-2 text-zinc-400 leading-relaxed">
              Minecraft Developer with over 5 years of experience.
            </p>
          </div>

          {/* Navigace */}
          <div>
            <h3 className="text-white text-lg font-semibold">Menu</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="https://github.com/JavaOff" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Github</Link></li>
              <li><Link href="https://discord.com/channels/@me/1338165634483359859" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Discord</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          {/* Autor */}
          <div>
            <h3 className="text-white text-lg font-semibold">Author</h3>
            <p className="text-sm mt-2 text-zinc-400 leading-relaxed">
              Vytvořil{" "}
              <span className="text-primary font-medium">Alex Pokorný</span>
              <br />
              &copy; {new Date().getFullYear()} – All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </ReactLenis>
  );
}
