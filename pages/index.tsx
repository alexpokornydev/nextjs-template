/* eslint-disable @next/next/no-html-link-for-pages */
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import {fetchProjects} from "@/data/fetchProjects";
import {IProject} from "@/types/IProject";
import { convertDate } from "@/utils/date";
import Head from "next/head";
import {useEffect,useState} from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay} from "swiper/modules";
import "swiper/css/navigation";
import {fetchRatings} from "@/data/fetchRatings";
import {IRating} from "@/types/IRating";

export default function MainPage(){
    const [projects,setProjects] = useState<IProject[]>([]);
    const [isLoading,setLoading] = useState(true);
    const [hasError,setError] = useState("");
    const [ratings,setRatings] = useState<IRating[]>([]);


    useEffect(() => {
        async function getProjects(){
            setLoading(true);
            const projs = await fetchProjects();
            
            if(projs){
                const sortedProjects = projs.sort((
                        a:{ 
                            date: string | number | Date 
                        },
                        b:{ 
                            date: string | number | Date 
                        }
                    ) => {
                        const date1 = new Date(a.date).getTime();
                        const date2 = new Date(b.date).getTime();
                        return date2 - date1;
                });

                setProjects(sortedProjects);
                setLoading(false);
            }else{
                setError("Nastala chyba při získávání projektů!");
                setLoading(false);
            }
        }

        getProjects();
    },[]);


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

    /*function formatDate(date: Date): string {
        return date.toISOString().split('T')[0];
    }
    
    console.log(formatDate(new Date()));*/

    return(
        <Layout>
            <Head>
                <title>Alex Pokorný • „Dělám z Vašich snů realitu“</title>
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

            <Header/>

            <section id="about" className="relative py-20 px-2 md:px-12">
                <div className="flex flex-col justify-center gap-y-2" data-aos="fade-in" data-aos-duration="2000">
                    <span className="block mx-auto px-6 py-2 mb-3 rounded-full bg-primary/10 text-primary text-md transition-colors duration-500 hover:bg-primary/20">Kdo jsem a co dělám</span>
                    
                    <h2 className="text-4xl text-center md:text-5xl font-bold mt-4 mb-6">
                        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Tvořím to, co si</span>
                        <span className="text-white">představujete!</span>
                    </h2>

                    <p className="text-gray-400 text-center max-w-4xl mx-auto text-lg">
                        Už více než dva roky vytvářím kvalitní a funkční webové stránky, responzivní na všech zařízeních. Používám moderní technologie a nabízím skvělé ceny.
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
            
            <section className="relative py-20 px-2 md:px-12" id="services">
                <div className="">
                    <div className="absolute w-[200px] h-[200px] right-0 left-20 bg-primary blur-[200px] z-0"/>
                    <div className="absolute w-[200px] h-[200px] right-36 bottom-0 bg-primary blur-[200px] z-0"/>

                    <div className="relative inset-0">
                        <div className="flex flex-col justify-center gap-y-2" data-aos="fade-in" data-aos-duration="2000">
                            <span className="block mx-auto px-6 py-2 mb-3 rounded-full bg-primary/10 text-primary text-md transition-colors duration-500 hover:bg-primary/20">Co mohu poskytnout</span>
                            
                            <h2 className="text-4xl text-center md:text-5xl font-bold mt-4 mb-6">
                                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Co vše Vám mohu</span>
                                <span className="text-white">poskytnout</span>
                            </h2>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-8 mt-9">
                            <div className="bg-background2 shadow-[0_0_20px_#00000043] rounded-xl py-4 px-6 w-[400px] transition ease-in-out duration-200 hover:-translate-y-2" data-aos="fade-up" data-aos-duration="2000">
                                <div className="rounded-full bg-primary/40 w-20 h-20 py-[16.5px] px-auto block mx-auto mb-4">
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} className="text-primary m-auto" fill={"none"}>
                                            <path d="M17 8L18.8398 9.85008C19.6133 10.6279 20 11.0168 20 11.5C20 11.9832 19.6133 12.3721 18.8398 13.1499L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7 8L5.16019 9.85008C4.38673 10.6279 4 11.0168 4 11.5C4 11.9832 4.38673 12.3721 5.16019 13.1499L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M14.5 4L9.5 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>

                                <h2 className="text-2xl text-center font-bold text-white mb-2 duration-300">Tvorba webu na míru</h2>
                                <div className="shadow-standard rounded-xl bg-primary h-[3px] w-[80px] mb-4 block mx-auto"/>
                                <p className="text-gray-400 text-center text-md mb-4">Vytvářím moderní a responzivní webové stránky, které přesně odpovídají vašim požadavkům..</p>

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

                                        <span className="my-auto mt-[1px] text-white">Přizpůsobení podle Vašich představ</span>
                                    </li>
                                    <li className="flex gap-2 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        <span className="my-auto mt-[1px] text-white">Vytvoření bezplatného návrhu.</span>
                                    </li>
                                    <li className="flex gap-2 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        <span className="my-auto mt-[1px] text-white">Responzivní design pro všechny zařízení</span>
                                    </li>
                                    <li className="flex gap-2 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        <span className="my-auto mt-[1px] text-white">Cenově dostupné pro všechny</span>
                                    </li>
                                </ul>

                                <button className="bg-background3/30 text-gray-400 py-2 px-6 w-full rounded-xl mt-4 select-none cursor-default">Od 1000 Kč</button>
                            </div>

                            <div className="bg-background2 shadow-[0_0_20px_#00000043] rounded-xl py-4 px-6 w-[400px] transition ease-in-out duration-200 hover:-translate-y-2" data-aos="fade-up" data-aos-duration="2000">
                                <div className="rounded-full bg-primary/40 w-20 h-20 py-[16.5px] px-auto block mx-auto mb-4">
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} className="text-primary m-auto" fill={"none"}>
                                            <path d="M17.4776 8.00005C17.485 8.00002 17.4925 8 17.5 8C19.9853 8 22 10.0147 22 12.5C22 14.9853 19.9853 17 17.5 17H7C4.23858 17 2 14.7614 2 12C2 9.40034 3.98398 7.26407 6.52042 7.0227M17.4776 8.00005C17.4924 7.83536 17.5 7.66856 17.5 7.5C17.5 4.46243 15.0376 2 12 2C9.12324 2 6.76233 4.20862 6.52042 7.0227M17.4776 8.00005C17.3753 9.1345 16.9286 10.1696 16.2428 11M6.52042 7.0227C6.67826 7.00768 6.83823 7 7 7C8.12582 7 9.16474 7.37209 10.0005 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 20.75V20.5C14 19.9477 13.5523 19.5 13 19.5H12M14 20.75V21C14 21.5523 13.5523 22 13 22H11C10.4477 22 10 21.5523 10 21V20.75M14 20.75H19M10 20.75V20.5C10 19.9477 10.4477 19.5 11 19.5H12M10 20.75H5M12 19.5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <h2 className="text-2xl text-center font-bold text-white mb-2 duration-300">Hostingové služby</h2>
                                <div className="shadow-standard rounded-xl bg-primary h-[3px] w-[80px] mb-4 block mx-auto"/>
                                <p className="text-gray-400 text-center text-md mb-4">K webům, které vytvářím, nabízím také spolehlivý hosting! Poskytuji cenově výhodné hostingové služby pro všechny své klienty..</p>

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

                                        <span className="my-auto mt-[1px] text-white">Nasměrování domény zdarma</span>
                                    </li>
                                    <li className="flex gap-2 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        <span className="my-auto mt-[1px] text-white">Až 4 subdomény zdarma</span>
                                    </li>
                                    <li className="flex gap-2 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        <span className="my-auto mt-[1px] text-white">Bezplatná podpora při migraci webu</span>
                                    </li>
                                    <li className="flex gap-2 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        <span className="my-auto mt-[1px] text-white">Cenově dostupné pro všechny</span>
                                    </li>
                                </ul>

                                <button className="bg-background3/30 text-gray-400 py-2 px-6 w-full rounded-xl mt-4 select-none cursor-default">Od 60 Kč <span className="text-sm">za měsíc</span></button>
                            </div>

                            <div className="bg-background2 shadow-[0_0_20px_#00000043] rounded-xl py-4 px-6 w-[400px] transition ease-in-out duration-200 hover:-translate-y-2" data-aos="fade-up" data-aos-duration="2000">
                                <div className="rounded-full bg-primary/40 w-20 h-20 py-[16.5px] px-auto block mx-auto mb-4">
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} className="text-primary -mt-[2.3px] m-auto" fill={"none"}>
                                            <path d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>

                                <h2 className="text-2xl text-center font-bold text-white mb-2 duration-300">Pravidelné aktualizace</h2>
                                <div className="shadow-standard rounded-xl bg-primary h-[3px] w-[80px] mb-4 block mx-auto"/>
                                <p className="text-gray-400 text-center text-md mb-4">
                                    Díky tomuto cyklu se web neustále vyvíjí a lépe reaguje na potřeby uživatelů.
                                </p>
                                <p className="text-gray-400 text-center text-md mb-4">
                                    Pravidelné aktualizace jsou pro mě zásadní pro neustálé zlepšování uživatelských zkušeností.
                                </p>
                                <p className="text-gray-400 text-center text-md mb-4">
                                    Každá aktualizace přináší nové funkce, vylepšení a optimalizaci, a zároveň nabízí příležitost poučit se z předchozích chyb.
                                </p>

                                <div className="mb-[35px]"/>
                                <button className="bg-background3/30 text-gray-400 py-2 px-6 w-full rounded-xl mt-4 select-none cursor-default">Od 150 Kč <span className="text-sm">za aktualizaci</span></button>
                            </div>
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

            <section className="relative py-20 px-2 md:px-12" id="projects">
                <div className="">
                    <div className="absolute w-[200px] h-[200px] left-20 bottom-0 bg-primary blur-[200px] z-0"/>

                    <div className="relative inset-0">
                        <div className="flex flex-col justify-center gap-y-2" data-aos="fade-in" data-aos-duration="2000">
                            <span className="block mx-auto px-6 py-2 mb-3 rounded-full bg-primary/10 text-primary text-md transition-colors duration-500 hover:bg-primary/20">Referenční projekty</span>
                            
                            <h2 className="text-4xl text-center md:text-5xl font-bold mt-4 mb-6">
                                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Ukázka hotových</span>
                                <span className="text-white">projektů</span>
                            </h2>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-8 mt-9">
                            {projects.slice(0,3).map(proj => (
                                <div key={proj._id} className="bg-background2 shadow-[0_0_20px_#00000043] rounded-xl py-4 px-6 w-[400px]" data-aos="fade-up" data-aos-duration="2000">
                                    <h2 className="text-2xl text-center font-bold text-white mb-2 duration-300 mb-4">{proj.name}</h2>
                                    <p className="text-gray-400 text-center text-md mb-4">{proj.description}</p>
                                    
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
                                                <path d="M17 8L18.8398 9.85008C19.6133 10.6279 20 11.0168 20 11.5C20 11.9832 19.6133 12.3721 18.8398 13.1499L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7 8L5.16019 9.85008C4.38673 10.6279 4 11.0168 4 11.5C4 11.9832 4.38673 12.3721 5.16019 13.1499L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M14.5 4L9.5 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>

                                            <span className="my-auto mt-[1px] text-white">
                                                {proj.technologies.join(", ")}   
                                            </span>
                                        </li>
                                        <li className="flex gap-2 group">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                                <path d="M18 2V4M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M3.5 8H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>

                                            <span className="my-auto mt-[1px] text-white">{convertDate(proj.date)}</span>
                                        </li>
                                        <li className="flex gap-2 group">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                                <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>

                                            {proj.benefits.map(bene => (
                                                <span key={bene} className="my-auto mt-[1px] text-white">{bene}</span>
                                            ))}
                                        </li>
                                    </ul>

                                    <button onClick={() => window.open(proj.url,"_blank")} className="bg-primary/30 text-primary py-2 px-6 w-full rounded-xl mt-4 select-none transition ease-in-out duration-300 active:scale-[0.96]">Navštívit</button>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-[3%]">
                            <a href="/projects" className="bg-primary/30 text-primary py-2 px-6 w-full rounded-xl mt-4 select-none transition ease-in-out duration-300 active:scale-[0.96]">Zobrazit více</a>
                        </div>    

                        <div className="flex justify-center">
                            {hasError && (
                                <div className="block rounded-xl w-[500px] bg-red-500/30 text-red-500 py-2 px-4 border-red-500 border-[1px] border-solid">
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="hidden text-red-500 md:block" fill={"none"}>
                                            <path d="M5.32171 9.6829C7.73539 5.41196 8.94222 3.27648 10.5983 2.72678C11.5093 2.42437 12.4907 2.42437 13.4017 2.72678C15.0578 3.27648 16.2646 5.41196 18.6783 9.6829C21.092 13.9538 22.2988 16.0893 21.9368 17.8293C21.7376 18.7866 21.2469 19.6548 20.535 20.3097C19.241 21.5 16.8274 21.5 12 21.5C7.17265 21.5 4.75897 21.5 3.46496 20.3097C2.75308 19.6548 2.26239 18.7866 2.06322 17.8293C1.70119 16.0893 2.90803 13.9538 5.32171 9.6829Z" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M11.992 16H12.001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 13L12 8.99997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        <span className="my-auto mt-[1px] ml-2 text-center md:text-start">{hasError}</span>
                                    </div>
                                </div>
                            )}

                            {!hasError && isLoading && (
                                <div className="my-6">
                                    <div className="flex flex-row gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary animate-bounce shadow-[0_0_10px_#58cc00]"/>
                                        <div className="w-6 h-6 rounded-full bg-primary animate-bounce [animation-delay:-.3s] shadow-[0_0_10px_#58cc00]"/>
                                        <div className="w-6 h-6 rounded-full bg-primary animate-bounce [animation-delay:-.5s] shadow-[0_0_10px_#58cc00]"/>
                                    </div>
                                </div>
                            )}
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

            <section id="rating" className="relative py-20 px-2 md:px-12">
                <div className="absolute w-[200px] h-[200px] right-20 -translate-x-1/2 -translate-y-1/2 bg-primary blur-[200px] z-0"/>
                <div className="absolute w-[200px] h-[200px] left-5 bottom-0 bg-primary blur-[200px] z-0"/>
                
                <div className="relative">
                    <div data-aos="fade-in" data-aos-duration="2000">
                        <div className="flex flex-col justify-center gap-y-2">
                            <span className="block mx-auto px-6 py-2 mb-3 rounded-full bg-primary/10 text-primary text-md transition-colors duration-500 hover:bg-primary/20">Hodnocení mé práce</span>
                            
                            <h2 className="text-4xl text-center md:text-5xl font-bold mt-4 mb-12">
                                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Všechny recenze</span>
                                <span className="text-white">mé práce</span>
                            </h2>
                        </div>
                    </div>

                    <div className="container mx-auto px-2 md:px-12">
                        <Swiper 
                            slidesPerView={1} 
                            spaceBetween={10}
                            pagination={{
                                clickable: true
                            }}
                            grabCursor={true}
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={true}
                            breakpoints={{
                                1200:{
                                    slidesPerView: 3,
                                },
                                767: {
                                    slidesPerView: 2
                                },
                                768: {
                                    slidesPerView: 2
                                },
                                640:{
                                    slidesPerView: 1
                                }
                            }}
                            className="relative overflow-hidden"
                        >
                            {ratings.map(rate => (
                                <SwiperSlide key={rate._id} className="bg-background2 shadow-[0_0_20px_#00000043] rounded-xl py-4 px-6 w-full">
                                    <q className="text-gray-400 italic">{rate.description}</q>

                                    <hr className="border-background3/30 rounded-xl border-[1.3px] my-2"/>
                                    <div className="flex justify-between">
                                        <p className="text-white my-auto mt-[4px]">{rate.name}</p>
                                        
                                        <div className="flex my-auto mt-[2px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                                <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="text-white my-auto mt-[2px] ml-2">{rate.stars}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/*<div className="flex flex-wrap justify-center gap-8 mt-9">
                        {ratings.map(rate => (
                            <div key={rate._id} className="bg-background2 shadow-[0_0_20px_#00000043] rounded-xl py-4 px-6 w-[700px]" data-aos="fade-up" data-aos-duration="2000">
                                <q className="text-gray-400 italic">{rate.description}</q>

                                <hr className="border-background3/30 rounded-xl border-[1.3px] my-2"/>
                                <div className="flex justify-between">
                                    <p className="text-white my-auto mt-[4px]">{rate.name}</p>
                                    
                                    <div className="flex my-auto mt-[2px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="text-white" fill={"none"}>
                                            <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-white my-auto mt-[2px] ml-2">{rate.stars}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>*/}
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

            <section className="py-20 px-2 md:px-12" id="start">
                <div className="overflow-hidden rounded-xl bg-background2/50 backdrop-blur-md border border-white/5 p-12 text-center">
                    <div className="relative z-10 space-y-8">
                        <div className="absolute w-[400px] h-[400px] bg-primary/50 blur-[200px] z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
                        <div className="relative">
                            <h3 className="text-2xl font-bold text-white mb-4">Pojďme vytvořit něco nového!</h3>
                            <p className="text-gray-400 mb-8">V případě zájmu, se mi ozvěte na jednu z mých sociálních sítí, <br/> nebo na mail a společně vytvoříme něco unikátního.</p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <div className="col cursor-pointer transition ease-in-out duration-300 hover:scale-[1.06] active:scale-[0.97]">
                                    <div className="flex justify-center rounded-xl bg-primary/50 h-12 w-12">
                                        <div className="m-auto">
                                            <svg onClick={() => navigator.clipboard.writeText("art1x_._")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={35} height={35} className="text-white" fill={"none"}>
                                                <path d="M15.5008 17.75L16.7942 19.5205C16.9156 19.7127 17.1489 19.7985 17.3619 19.7224C18.1657 19.4353 20.158 18.6572 21.7984 17.4725C21.9263 17.3801 22.0002 17.2261 21.9992 17.0673C21.9992 8.25 19.5008 5.75 19.5008 5.75C19.5008 5.75 17.5008 4.60213 15.3547 4.25602C15.1436 4.22196 14.9368 4.33509 14.8429 4.52891L14.3979 5.44677C14.3979 5.44677 13.2853 5.21397 12 5.21397C10.7147 5.21397 9.6021 5.44677 9.6021 5.44677L9.15711 4.52891C9.06314 4.33509 8.85644 4.22196 8.64529 4.25602C6.50079 4.60187 4.50079 5.75 4.50079 5.75C4.50079 5.75 2.0008 8.25 2.0008 17.0673C1.9998 17.2261 2.07365 17.3801 2.20159 17.4725C3.84196 18.6572 5.8343 19.4353 6.63806 19.7224C6.85105 19.7985 7.08437 19.7127 7.20582 19.5205L8.50079 17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.5008 16.75C17.5008 16.75 15.2057 18.25 12.0008 18.25C8.79587 18.25 6.50079 16.75 6.50079 16.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17.2508 12.25C17.2508 13.3546 16.4673 14.25 15.5008 14.25C14.5343 14.25 13.7508 13.3546 13.7508 12.25C13.7508 11.1454 14.5343 10.25 15.5008 10.25C16.4673 10.25 17.2508 11.1454 17.2508 12.25Z" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M10.2508 12.25C10.2508 13.3546 9.46729 14.25 8.50079 14.25C7.5343 14.25 6.75079 13.3546 6.75079 12.25C6.75079 11.1454 7.5343 10.25 8.50079 10.25C9.46729 10.25 10.2508 11.1454 10.2508 12.25Z" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="col cursor-pointer transition ease-in-out duration-300 hover:scale-[1.06] active:scale-[0.97]">
                                    <div className="flex justify-center rounded-xl bg-primary/50 h-12 w-12">
                                        <div className="m-auto">
                                            <svg onClick={() => window.open("https://instagram.com/alex_on_sc00t","_blank")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={35} height={35} className="text-white" fill={"none"}>
                                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                                <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col cursor-pointer transition ease-in-out duration-300 hover:scale-[1.06] active:scale-[0.97]">
                                    <div className="flex justify-center rounded-xl bg-primary/50 h-12 w-12">
                                        <div className="m-auto">
                                            <svg onClick={() => window.open("mailto:email@alexpokorny.eu")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={35} height={35} className="text-white" fill={"none"}>
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
