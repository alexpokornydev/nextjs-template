import Menu from "./Menu";

export default function Header(){
    return(
        <>
            <Menu/>


            <section className="relative min-h-screen bg-background2 flex items-center justify-center overflow-hidden border-b-2 border-b-primary">
                <div className="pointer-events-none absolute inset-0 z-0 block">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                    <div className="absolute w-[500px] h-[500px] bg-primary/30 rounded-full blur-[200px] left-[20%] top-[30%] animate-blob" />
                    <div className="absolute w-[400px] h-[400px] bg-purple-900/30 rounded-full blur-[200px] left-[50%] top-[60%] animate-blob animation-delay-2000" />
                    <div className="absolute w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[200px] left-1/2 top-[80%] -translate-x-1/2 animate-blob animation-delay-4000" />
                </div>

                <div className="flex flex-col items-center justify-center mt-[10.5%]">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                        Minecraft Developer
                    </span>

                    <div className="relative z-10 text-center px-8 md:px-12 lg:px-24">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                            <span className="block">JavaOff</span>
                        </h1>

                        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
                        Věnuji se vývoji Minecraft pluginů už více než 5 let. Mám bohaté zkušenosti s tvorbou vlastních pluginů, optimalizací serverů, správou serverových systémů a vývojem custom funkcí podle požadavků klientů. Specializuji se na Bukkit/Spigot/Paper API a mám zkušenosti i s administrací Minecraft serverů a tvorbou herních mechanik na míru.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-16">
                            <button onClick={() => window.open("https://discord.gg/GBmrgHKun7", "_target")} className="bg-primary/30 text-primary py-3 px-20 rounded-xl select-none transition ease-in-out duration-300 active:scale-[0.96]">Moje práce</button>
                            <button onClick={() => window.open("#about", "_self")} className="bg-gray-400/30 text-gray-400 py-3 px-20 rounded-xl select-none transition ease-in-out duration-300 active:scale-[0.96]">Kontakt</button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-[15%]">
                        <button onClick={() => window.location.href = "#about"} className="flex flex-col items-center gap-1">
                                <span className="text-[15px] text-[#aaa] animate-bounce">
                                    Scroll down
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary animate-bounce" fill="none" viewBox="0 0 24 24" stroke="#aaa">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                        </button>
                    </div>
                </div>  
            </section>
        </>
    );
}
