import Image from "next/image";
import Avatar from "@/public/avatar.png";

export default function Banner(){
    return(
        <>
            <section className="relative bg-[#070606] p-[80px_30px]">
                <div className="container mx-auto">
                    <div className="grid gap-y-9 lg:grid-cols-2">
                        <div className="col">
                            <Image src={Avatar} alt="Moje profilovka" className="block mx-auto rounded-xl w-[430px] lg:ml-0" data-aos="fade-right" data-aos-duration={1000}/>
                        </div>
                        <div className="col my-auto">
                            <h1 className="text-center text-white text-6xl font-bold mb-8">Zdravím, já si říkám <span className="bg-gradient-to-r from-primary to-sky-300 bg-clip-text text-transparent">MaaviiX</span>!</h1>
                            <p className="text-center text-white text-[18px] mb-9">
                                Ahoj! Jmenuji se MaaviiX a s programováním jsem začal ve svých 14 letech, kdy jsem poprvé zjistil, že mě to vlastně baví. Nyní to dělám již třetím rokem a stále mě to baví a naplňuje, to co u mě začalo jako pouhý koníček, se nyní rozrostlo v mou vášeň.
                            </p>
                        
                            <button className="glowing border-solid border-2 border-primary bg-primary select-none py-2 px-9 shadow-[1px_1px_20px_#0a8edf] text-white uppercase font-bold text-center tracking-widest block mx-auto mb-[4px] shadow-[0_4px_0_#004977] transition duration-500 ease-in-out active:translate-y-[4px] active:[box-shadow:0_0_0_#002a44]">Napište mi</button>
                        </div>
                    </div>
                </div>
            </section>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#070606" fillOpacity="1" d="M0,160L34.3,181.3C68.6,203,137,245,206,250.7C274.3,256,343,224,411,181.3C480,139,549,85,617,80C685.7,75,754,117,823,154.7C891.4,192,960,224,1029,202.7C1097.1,181,1166,107,1234,96C1302.9,85,1371,139,1406,165.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
        </>
    );
}