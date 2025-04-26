/* eslint-disable @next/next/no-html-link-for-pages */
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { convertDate } from "@/utils/date";
import Head from "next/head";
import {useEffect,useState} from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay} from "swiper/modules";
import "swiper/css/navigation";

export default function MainPage(){
    const [isLoading,setLoading] = useState(true);
    const [hasError,setError] = useState("");


    /*function formatDate(date: Date): string {
        return date.toISOString().split('T')[0];
    }
    
    console.log(formatDate(new Date()));*/

    return(
        <Layout>
            <Head>
                <title>JavaOff • Minecraft Developer</title>
                <meta name="description" content="Nabízím vývoj Minecraft pluginů a systémů přesně podle potřeb klienta. Ať už potřebuješ unikátní herní mechaniky, custom příkazy, systém ekonomiky nebo cokoli jiného – vytvořím ti řešení na klíč. Každý projekt je přizpůsoben tvým požadavkům."/>
                <meta name="keywords" content="Alex Pokorný, Web, Web developer, Development, Dev, Minecraft, Cz/Sk, CZ, SK, Webovky, stránky, webové stránky, anticheat, javaoff, nullpointer, java, minecraft, mineraft developer"/>
                <meta http-equiv="X-UA-Compatible" content="IE=7"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
                <meta name="robots" content="index, follow"/>

                <meta name="version" content="v1.0"/>
                <meta name="author" content="Alex Pokorný"/>

                <meta property="og:title" content="JavaOff • Minecraft Developer"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://javaoff.vercel.app"/>
                <meta property="og:description" content="Nabízím vývoj Minecraft pluginů a systémů přesně podle potřeb klienta. Ať už potřebuješ unikátní herní mechaniky, custom příkazy, systém ekonomiky nebo cokoli jiného – vytvořím ti řešení na klíč. Každý projekt je přizpůsoben tvým požadavkům."/>
                <meta name="theme-color" content="#FF0053"/>
            </Head>

            <Header/>

            <section id="about" className="relative py-20 px-2 md:px-12">
                <div className="flex flex-col justify-center gap-y-2" data-aos="fade-in" data-aos-duration="2000">
                    <span className="block mx-auto px-6 py-2 mb-3 rounded-full bg-primary/10 text-primary text-md transition-colors duration-500 hover:bg-primary/20">Kdo jsem a co dělám</span>
                    
                    <h2 className="text-4xl text-center md:text-5xl font-bold mt-4 mb-4">
                        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Zakázky</span>
                        <span className="text-white">na míru</span>
                    </h2>

                    <p className="text-gray-400 text-center max-w-3xl mx-auto text-lg">
                    Nabízím vývoj Minecraft pluginů a systémů přesně podle potřeb klienta. Ať už potřebuješ unikátní herní mechaniky, custom příkazy, systém ekonomiky nebo cokoli jiného – vytvořím ti řešení na klíč. Každý projekt je přizpůsoben tvým požadavkům.


                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-[1.5%]">

                    <div className="group relative overflow-hidden rounded-xl border border-primary/30 hover:border-primary/50 shadow-xl shadow-primary/10 backdrop-blur-sm p-8 transition-all duration-500" data-aos="fade-in" data-aos-duration="3000">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0 opacity-0 group-hover:opacity-85 transition-opacity duration-700t" />
                            <div className="relative z-10 flex flex-col min-h-[200px]">
                                <h3 className="text-2xl bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block font-bold mb-2">CoreSystem</h3>
                                <p className="text-gray-300">
                                Komplexní základní systém pro Minecraft servery. Obsahuje správu hráčů, perky, VIP systémy, ekonomiku, custom příkazy a mnoho dalšího. Maximálně optimalizováno pro velké komunity.
                                </p>
                            </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl border border-primary/30 hover:border-primary/50 shadow-xl shadow-primary/10 backdrop-blur-sm p-8 transition-all duration-500" data-aos="fade-in" data-aos-duration="3000">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0 opacity-0 group-hover:opacity-85 transition-opacity duration-700t" />
                            <div className="relative z-10 flex flex-col min-h-[200px]">
                                <h3 className="text-2xl bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block font-bold mb-2">ZorinAC</h3>
                                <p className="text-gray-300">
                                Vlastní anticheat systém navržený pro detekci a blokaci nejčastějších hacků a cheatů na Minecraft serverech. Nabízí ochranu proti speedhackům, flyhackům, killaurám a dalším exploitům. Neustále aktualizován podle nejnovějších trendů v cheatování.
                                </p>
                            </div>
                    </div>
                </div>    

            </section>

            <div className="container mx-auto px-4 mb-4">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/5"/>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="bg-primary w-2 h-2 rounded-full shadow-[0_0_10px_#58cc00]"/>
                    </div>
                </div>
            </div>

            <section data-aos="fade-in" data-aos-duration="4000" id="journey" className="relative py-20 px-2 md:px-12">
                <div className="flex flex-col justify-center gap-y-2" data-aos="fade-in" data-aos-duration="2000">
                    <span className="block mx-auto px-6 py-2 mb-3 rounded-full bg-primary/10 text-primary text-md transition-colors duration-500 hover:bg-primary/20">Na jakých projektech jsem pracoval?</span>
                    
                    <h2 className="text-4xl text-center md:text-5xl font-bold mt-4 mb-4">
                        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Moje</span>
                        <span className="text-white">cesta</span>
                    </h2>

                    <p className="text-gray-400 text-center max-w-3xl mx-auto text-lg">
                    Začínal jsem před pěti lety jako nadšenec do Minecraft serverů. Postupně jsem se propracoval od základních pluginů až po tvorbu komplexních systémů na míru.
Během let jsem nasbíral zkušenosti nejen s programováním pluginů, ale také s optimalizací výkonu serverů, vývojem anticheatů a správou velkých komunit.
Dnes nabízím kompletní řešení pro servery všech velikostí — od jednoduchých miniher až po robustní Core systémy a vlastní bezpečnostní pluginy.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto px-4 mt-[1.5%]" data-aos="fade-in" data-aos-duration="3000">

                    <div className="relative pl-8 pb-12">
                        <div className="absolute left-3 top-3 bottom-0 w-px bg-primary/40"></div>
                        <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-2 border-primary bg-[#0a0a0a] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-white">CoreSystem</h3>
                            <span className="text-sm text-primary sm:ml-2">Vývojář a hlavní architekt</span>
                        </div>
                        <p className="text-sm text-white/40 mb-2">2024 – 2025</p>
                        <p className="text-sm text-white/80">
                        Vytvoření vlastního modulárního systému pro Minecraft servery. Obsahuje správu hráčů, ekonomiku, ranky a další jádrové funkce pro plně přizpůsobitelné servery.
                        </p>
                        </div>
                    </div>

                    <div className="relative pl-8 pb-12">
                        <div className="absolute left-3 top-3 bottom-0 w-px bg-primary/40"></div>
                        <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-2 border-primary bg-[#0a0a0a] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-white">ZorinAC</h3>
                            <span className="text-sm text-primary sm:ml-2">Lead Developer</span>
                        </div>
                        <p className="text-sm text-white/40 mb-2">2023 – 2025</p>
                        <p className="text-sm text-white/80">
                        Vývoj a optimalizace vlastního anticheat systému, který detekuje a brání nejrozšířenějším typům cheatování. Neustále vylepšován na základě zpětné vazby od serverových komunit.
                        </p>
                        </div>
                    </div>

                    <div className="relative pl-8 pb-12">
                        <div className="absolute left-3 top-3 bottom-0 w-px bg-primary/40"></div>
                        <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-2 border-primary bg-[#0a0a0a] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-white">GuildsPro</h3>
                            <span className="text-sm text-primary sm:ml-2">Spolupráce na pluginu pro správu guild</span>
                        </div>
                        <p className="text-sm text-white/40 mb-2">2022 – 2022</p>
                        <p className="text-sm text-white/80">
                        Práce na pluginu umožňujícím tvorbu a správu hráčských guild s podporou ekonomiky, územního systému a vlastních odměn.
                        </p>
                        </div>
                    </div>

                    <div className="relative pl-8 pb-12">
                        <div className="absolute left-3 top-3 bottom-0 w-px bg-primary/40"></div>
                        <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-2 border-primary bg-[#0a0a0a] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-white">ZenCore</h3>
                            <span className="text-sm text-primary sm:ml-2">Developer & Designer</span>
                        </div>
                        <p className="text-sm text-white/40 mb-2">2025 – 2025</p>
                        <p className="text-sm text-white/80">
                        Vytvoření vlastního modulárního systému pro Minecraft servery. Obsahuje správu hráčů, ekonomiku, ranky a další jádrové funkce pro plně přizpůsobitelné servery.
                        </p>
                    </div>
                </div>
            </div>

  

            </section>

            <div className="container mx-auto px-4 mb-4">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/5"/>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="bg-primary w-2 h-2 rounded-full shadow-[0_0_10px_#58cc00]"/>
                    </div>
                </div>
            </div>

            <section className="py-20 px-2 md:px-12" id="start" data-aos="fade-in" data-aos-duration="4000">
                <div className="overflow-hidden rounded-xl bg-background2/50 backdrop-blur-md border border-white/5 p-12 text-center">
                    <div className="relative z-10 space-y-8">
                        <div className="absolute w-[400px] h-[400px] bg-primary/50 blur-[200px] z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
                        <div className="relative">
                            <h3 className="text-2xl font-bold text-white mb-4">Pojďme vytvořit něco nového!</h3>
                            <p className="text-gray-400 mb-8">V případě zájmu, se mi ozvěte na jednu z mých sociálních sítí, <br/> nebo na mail a společně vytvoříme něco unikátního.</p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <div className="col cursor-pointer transition ease-in-out duration-300 hover:scale-[1.06] active:scale-[0.97]" data-aos="fade-in" data-aos-duration="3000">
                                    <div className="flex justify-center rounded-xl bg-primary/50 h-12 w-12">
                                        <div className="m-auto">
                                            <svg onClick={() => window.open("https://discord.com/channels/@me/1338165634483359859")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={35} height={35} className="text-white" fill={"none"}>
                                                <path d="M15.5008 17.75L16.7942 19.5205C16.9156 19.7127 17.1489 19.7985 17.3619 19.7224C18.1657 19.4353 20.158 18.6572 21.7984 17.4725C21.9263 17.3801 22.0002 17.2261 21.9992 17.0673C21.9992 8.25 19.5008 5.75 19.5008 5.75C19.5008 5.75 17.5008 4.60213 15.3547 4.25602C15.1436 4.22196 14.9368 4.33509 14.8429 4.52891L14.3979 5.44677C14.3979 5.44677 13.2853 5.21397 12 5.21397C10.7147 5.21397 9.6021 5.44677 9.6021 5.44677L9.15711 4.52891C9.06314 4.33509 8.85644 4.22196 8.64529 4.25602C6.50079 4.60187 4.50079 5.75 4.50079 5.75C4.50079 5.75 2.0008 8.25 2.0008 17.0673C1.9998 17.2261 2.07365 17.3801 2.20159 17.4725C3.84196 18.6572 5.8343 19.4353 6.63806 19.7224C6.85105 19.7985 7.08437 19.7127 7.20582 19.5205L8.50079 17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.5008 16.75C17.5008 16.75 15.2057 18.25 12.0008 18.25C8.79587 18.25 6.50079 16.75 6.50079 16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.2508 12.25C17.2508 13.3546 16.4673 14.25 15.5008 14.25C14.5343 14.25 13.7508 13.3546 13.7508 12.25C13.7508 11.1454 14.5343 10.25 15.5008 10.25C16.4673 10.25 17.2508 11.1454 17.2508 12.25Z" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M10.2508 12.25C10.2508 13.3546 9.46729 14.25 8.50079 14.25C7.5343 14.25 6.75079 13.3546 6.75079 12.25C6.75079 11.1454 7.5343 10.25 8.50079 10.25C9.46729 10.25 10.2508 11.1454 10.2508 12.25Z" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="col cursor-pointer transition ease-in-out duration-300 hover:scale-[1.06] active:scale-[0.97]" data-aos="fade-in" data-aos-duration="3000">
                                    <div className="flex justify-center rounded-xl bg-primary/50 h-12 w-12">
                                        <div className="m-auto">
                                        <svg onClick={() => window.open("https://github.com/JavaOff?tab=overview&from=2022-12-01&to=2022-12-31")} className="text-white" fill={"white"} width="28px" height="28px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                        </svg>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col cursor-pointer transition ease-in-out duration-300 hover:scale-[1.06] active:scale-[0.97]" data-aos="fade-in" data-aos-duration="3000">
                                    <div className="flex justify-center rounded-xl bg-primary/50 h-12 w-12">
                                        <div className="m-auto">
                                            <svg onClick={() => window.open("mailto:drixcodebussines@gmail.com")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={35} height={35} className="text-white" fill={"none"}>
                                                <path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                                <path d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}