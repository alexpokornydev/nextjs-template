import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import axios from "axios";
import Head from "next/head";
import {useState} from "react";
import {toast} from "react-toastify";

export default function ProjectsPage(){
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [request,setRequest] = useState("");

    async function handleFormSubmit(e:React.FormEvent){
        e.preventDefault();

        if(!name || !mail || !request){
            toast.error("Musí být vyplněna všechna pole!");
            return;
        }

        try{
            const res = await axios.post("/api/contact",{name,mail,request},{
                headers:{
                    "Content-Type": "application/json"
                }
            });

            if(res.status === 200 || res.status === 204){
                setName("");
                setMail("");
                setRequest("");
                toast.success("Formulář byl úspěšně odeslán!");
            }
            
            if(res.status === 429 || res.status === 500){
                toast.error("Zkuste to znovu za hodinu.");
            }
        }catch(exception){
            console.error(exception);
        }
    }

    return(
        <Layout>
            <Head>
                <title>Alex Pokorný • Kontakt</title>
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
                
                <div className="absolute inset-0 flex flex-col justify-center">
                    <div className="absolute w-[400px] h-[400px] bg-primary/50 blur-[200px] z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
                    <div className="container mx-auto text-center relative z-[9] px-8 mb-9 md:px-12 lg:px-24" data-aos="fade-in" data-aos-duration="2000">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-36">
                            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Pojďme společně vytvořit</span>
                            <span className="text-white">něco nového!</span>
                        </h1>

                        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
                            Kontaktujte mě a společně se domluvíme!
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact" className="relative py-20 px-2 md:px-12">
                <div className="absolute w-[200px] h-[200px] left-20 bottom-0 bg-primary blur-[200px] z-0"/>
                <div className="absolute w-[200px] h-[200px] right-36 right-36 top-0 bg-primary blur-[200px] z-0"/>

                <div className="relative">
                    <div className="flex flex-col justify-center gap-y-2">
                        <div data-aos="fade-in" data-aos-duration="2000">
                            <div className="flex flex-col justify-center gap-y-2">
                                <span className="block mx-auto px-6 py-2 mb-3 rounded-full bg-primary/10 text-primary text-md transition-colors duration-500 hover:bg-primary/20">Napište mi!</span>
                        
                                <h2 className="text-4xl text-center md:text-5xl font-bold mt-4 mb-6">
                                    <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text block">Napište mi zprávu</span>
                                    <span className="text-white">a domluvíme se</span>
                                </h2>

                                <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12 text-center">
                                    Kontaktujte mě a domluvíme se na <br />cenně a vytvoříme spolu návrh webové stránky!
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="block mx-auto max-w-4xl mt-9">
                        <div className="bg-background2 shadow-[0_0_20px_#00000043] rounded-xl py-4 px-6 w-4xl">
                            <form onSubmit={handleFormSubmit}>
                                <div className="mb-4">
                                    <p className="text-sm text-gray-400 mb-2">Vaše jméno a příjmení <span className="text-red-600">*</span></p>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Např. Josef Novák" className="block select-none bg-background1 border-background1 border-solid border-[1px] text-white py-2 px-3 rounded-xl w-full outline-none transition ease-in-out duration-300 focus:border-primary focus:outline-none"/>
                                </div>
                                
                                <div className="mb-4">
                                    <p className="text-sm text-gray-400 mb-2">Váš mail <span className="text-red-600">*</span></p>
                                    <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Např. josef.n@email.cz" className="block select-none bg-background1 border-background1 border-solid border-[1px] text-white py-2 px-3 rounded-xl w-full outline-none transition ease-in-out duration-300 focus:border-primary focus:outline-none"/>
                                </div>
                                
                                <div className="my-4">
                                    <p className="text-sm text-gray-400 mb-2">Vaše požadavky <span className="text-red-600">*</span></p>
                                    <textarea minLength={50} rows={5} value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Např. Komplexní web s integrací CMS..." className="block select-none bg-background1 border-background1 border-solid border-[1px] text-white py-2 px-3 rounded-xl w-full outline-none transition ease-in-out duration-300 focus:border-primary focus:outline-none"/>
                                </div>

                                <div className="flex justify-end">
                                    <button className="mt-3 bg-primary/30 text-primary py-2 px-6 w-full rounded-xl mt-4 select-none transition ease-in-out duration-300 active:scale-[0.96]">Odeslat</button>
                                </div>
                            </form>
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
