import Menu from "./Menu";

export default function Header(){
    return(
        <>
            <Menu/>

            <section className="relative border-b-2 border-b-solid border-b-primary bg-background2 min-h-screen flex items-center justify-center overflow-hidden pt-[55rem]">
                <div className="absolute inset-0 h-full w-full z-[9] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"/>
                
                <div className="absolute inset-0 flex flex-col justify-center"> {/*style={{background:"radial-gradient(circle at 50% 50%,#58cc0015 0%,#0a0a0d 50%,#0a0909 100%)"}}*/}
                    {/*<div className="absolute inset-0" style={{background:"radial-gradient(circle at 50% 50%,#58cc0015 0%,#0a0a0d 50%,#0a0909 100%)"}}/>*/}
                    <div className="absolute w-[400px] h-[400px] bg-primary/50 blur-[200px] z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
                    <div className="container mx-auto text-center relative z-[9] px-8 mb-9 md:px-12 lg:px-24" data-aos="fade-in" data-aos-duration="2000">
                        
                        {/*<span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm select-none mb-12 mt-36 transition-colors duration-500 hover:bg-primary/20">Vývoj webových stránek</span>*/}
                        <h1 className="text-4xl font-bold mb-8 leading-tight mt-56 max-[767px]:mt-32 md:text-7xl lg:text-8xl">
                            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Weby</span>
                            <span className="text-white">které prodávájí!</span>
                        </h1>

                        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
                            Už více než 2 roky dělám kvalitní a responzivní webové stránky pomocí moderních technologií na míru, a to pro všechny.
                        </p>

                        {/*<div className="flex flex-wrap justify-center gap-6 mb-16">
                            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm select-none transition-colors duration-500 hover:bg-primary/20">React</span>
                            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm select-none transition-colors duration-500 hover:bg-primary/20">Tailwind CSS</span>
                            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm select-none transition-colors duration-500 hover:bg-primary/20">TypeScript</span>
                        </div>*/}

                        <div className="flex flex-wrap justify-center gap-6 mb-16">
                            <button onClick={() => window.open("/contact","_self")} className="bg-primary/30 text-primary py-3 px-20 rounded-xl select-none transition ease-in-out duration-300 active:scale-[0.96]">Objednat službu</button>
                            <button onClick={() => window.open("/projects","_self")} className="bg-gray-400/30 text-gray-400 py-3 px-20 rounded-xl select-none transition ease-in-out duration-300 active:scale-[0.96]">Hotové práce</button>
                        </div>

                        {/*<div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-x-4 gap-y-4">
                            <div className="border-b border-dashed border-r-gray-400 px-9 pb-4 md:border-b-0 md:border-r">
                                <h2 className="text-center text-white text-4xl font-bold mb-2">1+</h2>
                                <p className="text-center text-gray-400">Hotových projektů</p>
                            </div>
                            <div className="border-b border-dashed border-r-gray-400 px-9 pb-4 md:border-b-0 md:border-r">
                                <h2 className="text-center text-white text-4xl font-bold mb-2">100%</h2>
                                <p className="text-center text-gray-400">Spokojenosti</p>
                            </div>

                            <div className="">
                                <h2 className="text-center text-white text-4xl font-bold mb-2">1+</h2>
                                <p className="text-center text-gray-400">Hotových projektů</p>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </section>
        </>
    );
}
