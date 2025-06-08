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
import { motion } from 'framer-motion'
import Portfolio from "@/components/wcomp/Portfolio"
import Contact from "@/components/wcomp/Contact"

export default function MainPage(){
    const [isLoading,setLoading] = useState(true);
    const [hasError,setError] = useState("");


    /*function formatDate(date: Date): string {
        return date.toISOString().split('T')[0];
    }
    
    console.log(formatDate(new Date()));*/

    const timeline = [
        {
        title: '#1',
        role: 'CEO',
        years: '2024 – 2025',
        description:
            'Description about project.',
        },
        {
        title: '#2',
        role: 'Lead Developer',
        years: '2023 – 2025',
        description:
            'Description about project.',
        },
        {
        title: '#3',
        role: 'Owner',
        years: '2022 – 2022',
        description:
            'Description about project.',
        },
    ]

    const skills = [
        'UX Research',
        'UI Design',
        'Prototyping',
        'Design Systems',
        'User Testing',
        'Figma',
        'Adobe Creative Suite',
        'HTML/CSS',
    ]

    return(
        <Layout>
            <Head>
                <title>Next.js Portfolio Template</title>
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

            <section className="bg-background py-16 px-6 sm:px-12">
            <div className="flex flex-col justify-center gap-y-2" data-aos="fade-in" data-aos-duration="2000">
                <span className="cursor-pointer block mx-auto px-6 py-2 mb-3 rounded-full bg-primary/10 text-primary text-md transition-colors duration-500 hover:bg-primary/20">Who I am and what I do?</span>
            </div>    
            <h2 className="text-3xl font-bold text-white mb-12 text-center">About me</h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

                <div>
                <p className="text-white/80 mb-6">
                    Description about you.
                </p>

                <h3 className="text-white font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, i) => (
                    <button
                        key={i}
                        className="px-4 py-2 text-sm rounded-md bg-white/10 text-white/80 hover:bg-primary/35 transition-colors duration-500"
                    >
                        {skill}
                    </button>
                    ))}
                </div>
                </div>

                <div className="rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-white mb-6">My journey</h3>
                <div className="space-y-12">
                    {timeline.map((item, i) => (
                    <div key={i} className="relative pl-8 pb-6">
                        <div className="absolute left-3 top-3 bottom-0 w-px bg-primary/40"></div>

                        <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>

                        <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                            <span className="text-sm text-primary sm:ml-2">{item.role}</span>
                        </div>
                        <p className="text-sm text-white/40 mb-2">{item.years}</p>
                        <p className="text-sm text-white/80">{item.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

            </div>
            </section>

            <Portfolio />        

            <Contact />

            
        </Layout>
    );
}