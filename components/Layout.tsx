import Aos from "aos";
import {useEffect} from "react";
import "aos/dist/aos.css";
import ReactLenis from "lenis/react";
import {Slide,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({children}:{children:React.ReactNode}){
    useEffect(() => {
        Aos.init();
    },[]);

    return(
        <ReactLenis root>
            <ToastContainer position="bottom-right" transition={Slide} autoClose={5000} draggable pauseOnFocusLoss closeOnClick newestOnTop closeButton={false}/>
            <main className="relative min-h-screen">{children}</main>

            <div className="">
                <div className="relative -mb-[3.4px]">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/5"/>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="bg-primary w-2 h-2 rounded-full shadow-[0_0_10px_#58cc00]"/>
                    </div>
                </div>

                <footer className="bg-background2 bg-dotted-spacing-4 bg-dotted-background3 py-4 px-9 overflow-hidden">
                    {/*<div className="mb-2">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/5"/>
                            </div>
                            <div className="relative flex justify-center">
                                <div className="bg-primary w-2 h-2 rounded-full shadow-[0_0_10px_#58cc00]"/>
                            </div>
                        </div>
                    </div>*/}
                    <div className="flex flex-col justify-between items-center space-y-4 md:flex-row md:space-y-0">
                        <p className="text-center text-white md:text-end">&copy; 2024 — <span className="text-primary">Alex Pokorný</span>, všechna práva vyhrazena.</p>
                        <p className="text-center text-white md:text-end">Vytvořeno s láskou 💜 a spoustou ☕</p>
                    </div>
                </footer>
            </div>
        </ReactLenis>
    );
}