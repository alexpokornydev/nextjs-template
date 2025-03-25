import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import {fetchRatings} from "@/data/fetchRatings";
import {IRating} from "@/types/IRating";
import Head from "next/head";
import {useEffect,useState} from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay} from "swiper/modules";
import "swiper/css/navigation";

export default function AboutPage(){
    const [ratings,setRatings] = useState<IRating[]>([]);
    const [isLoading,setLoading] = useState(true);
    const [hasError,setError] = useState("");

    useEffect(() => {
        async function getRatings(){
            setLoading(true);
            const rates = await fetchRatings();
            
            if(rates){
                setRatings(rates);
                setLoading(false);
            }else{
                setError("Nastala chyba při získávání recenzí!");
                setLoading(false);
            }
        }

        getRatings();
    },[]);

    return(
        <Layout>
            <Head>
                <title>Alex Pokorný • O mně</title>
                <meta name="description" content="Již druhým rokem dělám uživatelsky atraktivní webové stránky pomocí moderních technologií na míru, a to pro všechny."/>
                <meta name="keywords" content="Alex Pokorný, Web, Web developer, Development, Dev, Minecraft, Cz/Sk, CZ, SK, Webovky, stránky, webové stránky"/>
                <meta http-equiv="X-UA-Compatible" content="IE=7"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
                <meta name="robots" content="index, follow"/>

                <meta name="version" content="v1.3"/>
                <meta name="author" content="Alex Pokorný"/>

                <meta property="og:title" content="Alex Pokorný • „Tvořím to, co si představujete!“"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.alexpokorny.eu"/>
                <meta property="og:description" content="Již druhým rokem dělám uživatelsky atraktivní webové stránky pomocí moderních technologií na míru, a to pro všechny."/>
                <meta name="theme-color" content="#8801f3"/>
            </Head>
            
            <Menu/>

            <section className="relative border-b-2 border-b-solid border-b-primary bg-background2 h-[35rem] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 h-full w-full z-[9] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"/>
                
                <div className="absolute inset-0 flex flex-col justify-center"> {/*style={{background:"radial-gradient(circle at 50% 50%,#58cc0015 0%,#0a0a0d 50%,#0a0909 100%)"}}*/}
                    {/*<div className="absolute inset-0" style={{background:"radial-gradient(circle at 50% 50%,#58cc0015 0%,#0a0a0d 50%,#0a0909 100%)"}}/>*/}
                    <div className="absolute w-[400px] h-[400px] bg-primary/50 blur-[200px] z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
                    <div className="container mx-auto text-center relative z-[9] px-8 mb-9 md:px-12 lg:px-24" data-aos="fade-in" data-aos-duration="2000">
                        
                        {/*<span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm select-none mb-12 mt-36 transition-colors duration-500 hover:bg-primary/20">Vývoj webových stránek</span>*/}
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-36">
                            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Důležité informace</span>
                            <span className="text-white">o mně</span>
                        </h1>

                        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
                            Informace o mně.
                        </p>
                    </div>
                </div>
            </section>

            <section id="about" className="relative py-20 px-2 md:px-12">
                <div className="absolute w-[200px] h-[200px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary blur-[200px] z-0"/>
                
                <div className="relative">
                    <div className="flex flex-col justify-center gap-y-2">
                        <div data-aos="fade-in" data-aos-duration="2000">
                            <div className="flex flex-col justify-center gap-y-2">
                                <span className="block mx-auto px-6 py-2 mb-3 rounded-full bg-primary/10 text-primary text-md transition-colors duration-500 hover:bg-primary/20">Kdo jsem</span>
                        
                                <h2 className="text-4xl text-center md:text-5xl font-bold mt-4 mb-6">
                                    <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Něco málo</span>
                                    <span className="text-white">o mně</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-in" data-aos-duration="2000">
                        <p className="text-gray-400 text-center max-w-4xl mx-auto text-lg">
                            Jmenuji se Alex Pokorný, je mi 14 let a studuji na Základní Škole v jsem v 7. ročníku. Webovým Stránkám se věnuji již 2 roky nejprve jsem začínal na Frameworku Angular ale po krátké době mě zaujal Vite React a s ním Next.js ve kterém mám tento web. Kromě webových stránek se také věnuji 1 rok vytváření Discord Robotů pomocí Discord.js .
                        </p>
                        <br className="select-none"/>
                        <p className="text-gray-400 text-center max-w-4xl mx-auto text-lg">
                            Také rád sportuji a hraji závodně Basketball. Také mám rád poslech hudby.
                        </p>
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

            <section id="about" className="relative py-20 px-2 md:px-12">
                <div className="absolute w-[200px] h-[200px] left-20 bottom-0 bg-primary blur-[200px] z-0"/>
                <div className="absolute w-[200px] h-[200px] right-36 right-36 top-0 bg-primary blur-[200px] z-0"/>
                
                <div className="relative">
                    <div className="flex flex-col justify-center gap-y-2">
                        <div data-aos="fade-in" data-aos-duration="2000">
                            <div className="flex flex-col justify-center gap-y-2">
                                <span className="block mx-auto px-6 py-2 mb-3 rounded-full bg-primary/10 text-primary text-md transition-colors duration-500 hover:bg-primary/20">Moje cesta</span>
                        
                                <h2 className="text-4xl text-center md:text-5xl font-bold mt-4 mb-6">
                                    <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Jak jsem se dostal</span>
                                    <span className="text-white">ke kódování</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-gray-400 text-center max-w-4xl mx-auto text-lg" data-aos="fade-in" data-aos-duration="2000">
                        Webové stránky kóduji od svých 12 let, kdy jsem se z nudy začal učit základní HTML a CSS, následně jsem objevil Framework Angular. Od Angularu jsem pomalu začal přecházet k Vite React a učit se další frameworky, jako je SvelteKit,Next.js. A to až do té doby, než jsem narazil na React, který díky svým možnostem využívám nejraději. <br/> V nynější době nejraději pracuji v React frameworku <span className="text-primary">Next.js</span>, který mě díky svým rozsáhlým možnostem a svojí modulárností velice zaujal.
                    </p>
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

            <section id="techstack" className="relative py-20 px-2 md:px-12">
                <div className="absolute w-[200px] h-[200px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary blur-[200px] z-0"/>
                
                <div className="relative">
                    <div data-aos="fade-in" data-aos-duration="2000">
                        <div className="flex flex-col justify-center gap-y-2">
                            <span className="block mx-auto px-6 py-2 mb-3 rounded-full bg-primary/10 text-primary text-md transition-colors duration-500 hover:bg-primary/20">Využívané technologie</span>
                            
                            <h2 className="text-4xl text-center md:text-5xl font-bold mt-4 mb-9">
                                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Technologie, které</span>
                                <span className="text-white">používám</span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 mt-9">
                        <div className="bg-background2 shadow-[0_0_20px_#00000043] rounded-xl py-4 px-6 w-[400px]" data-aos="fade-up" data-aos-duration="2000">
                            <div className="rounded-full bg-primary/40 w-20 h-20 py-[16.5px] px-auto block mx-auto mb-4">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} className="text-primary -mt-[2.3px] m-auto" fill={"none"}>
                                        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            
                            <h2 className="text-2xl text-center font-bold text-white mb-2 duration-300 mb-4">Frontend</h2>
                            <p className="text-gray-400 text-center text-md mb-4">Frontend tvořím v níže uvedených technologiích.</p>

                            <div className="relative mb-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-background3/30 rounded-xl border-[1.3px]"/>
                                </div>
                                <div className="relative flex justify-between">
                                    <div className="bg-primary w-2 h-2 rounded-full shadow-[0_0_10px_#58cc00]"/>
                                    <div/>
                                    <div className="bg-primary w-2 h-2 rounded-full shadow-[0_0_10px_#58cc00]"/>
                                </div>
                            </div>

                            <ul className="mt-2 flex flex-col gap-y-2">
                                <li className="flex gap-2 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                    <span className="my-auto mt-[1px] text-white">Next.js 14 - TypeScript</span>
                                </li>
                                <li className="flex gap-2 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                    <span className="my-auto mt-[1px] text-white">HTML5</span>
                                </li>
                                <li className="flex gap-2 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                    <span className="my-auto mt-[1px] text-white">TailwindCss</span>
                                </li>
                                <li className="flex gap-2 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                    <span className="my-auto mt-[1px] text-white">Scss & Sass</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-background2 shadow-[0_0_20px_#00000043] rounded-xl py-4 px-6 w-[400px]" data-aos="fade-up" data-aos-duration="2000">
                            <div className="rounded-full bg-primary/40 w-20 h-20 py-[16.5px] px-auto block mx-auto mb-4">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} className="text-primary -mt-[3px] m-auto" fill={"none"}>
                                        <path d="M19 4H5C4.06812 4 3.60218 4 3.23463 4.15224C2.74458 4.35523 2.35523 4.74458 2.15224 5.23463C2 5.60218 2 6.06812 2 7C2 7.93188 2 8.39782 2.15224 8.76537C2.35523 9.25542 2.74458 9.64477 3.23463 9.84776C3.60218 10 4.06812 10 5 10H19C19.9319 10 20.3978 10 20.7654 9.84776C21.2554 9.64477 21.6448 9.25542 21.8478 8.76537C22 8.39782 22 7.93188 22 7C22 6.06812 22 5.60218 21.8478 5.23463C21.6448 4.74458 21.2554 4.35523 20.7654 4.15224C20.3978 4 19.9319 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19 14H5C4.06812 14 3.60218 14 3.23463 14.1522C2.74458 14.3552 2.35523 14.7446 2.15224 15.2346C2 15.6022 2 16.0681 2 17C2 17.9319 2 18.3978 2.15224 18.7654C2.35523 19.2554 2.74458 19.6448 3.23463 19.8478C3.60218 20 4.06812 20 5 20H19C19.9319 20 20.3978 20 20.7654 19.8478C21.2554 19.6448 21.6448 19.2554 21.8478 18.7654C22 18.3978 22 17.9319 22 17C22 16.0681 22 15.6022 21.8478 15.2346C21.6448 14.7446 21.2554 14.3552 20.7654 14.1522C20.3978 14 19.9319 14 19 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 17H6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 17H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 7H6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 7H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            
                            <h2 className="text-2xl text-center font-bold text-white mb-2 duration-300 mb-4">Backend</h2>
                            <p className="text-gray-400 text-center text-md mb-4">Backend tvořím v níže uvedených technologiích.</p>

                            <div className="relative mb-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-background3/30 rounded-xl border-[1.3px]"/>
                                </div>
                                <div className="relative flex justify-between">
                                    <div className="bg-primary w-2 h-2 rounded-full shadow-[0_0_10px_#58cc00]"/>
                                    <div/>
                                    <div className="bg-primary w-2 h-2 rounded-full shadow-[0_0_10px_#58cc00]"/>
                                </div>
                            </div>

                            <ul className="mt-2 flex flex-col gap-y-2 pb-2">
                                <li className="flex gap-2 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                    <span className="my-auto mt-[1px] text-white">Node.js - TypeScript</span>
                                </li>
                                <li className="flex gap-2 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                    <span className="my-auto mt-[1px] text-white">MongoDB</span>
                                </li>
                                <li className="flex gap-2 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                    <span className="my-auto mt-[1px] text-white">MySQL</span>
                                </li>
                                <li className="flex gap-2 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                    <span className="my-auto mt-[1px] text-white">Express.js</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
