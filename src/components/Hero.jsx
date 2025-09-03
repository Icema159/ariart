import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Hero() {
    return (
        <>
            <section className="font-serif relative bg-gradient-to-r from-purple-800 to-purple-300 text-white min-h-[30vh] flex flex-col items-center justify-start pt-10 md:pt-16 px-6">
                <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-[length:40px_40px] bg-repeat opacity-10 pointer-events-none z-0"></div>
                {/* Pavadinimas ir subtitras */}
                <div className="text-center z-10">
                    <h1 className="text-8xl md:text-8xl font-bold tracking-wide animate-fade-in">Ari.Art <span role="img" aria-label="cake"></span></h1>
                    <p className="text-md md:text-lg italic tracking-wide mt-1 animate-fade-in">desertinė</p>
                </div>

                {/* Navigacija + ikonėlės */}
                <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-sm md:text-base z-10">
                    <div className="flex gap-10 flex-wrap justify-center">
                        <a href="#" className="hover:underline">Apie mus</a>
                        <a href="#" className="hover:underline">Desertai</a>
                        <a href="#" className="hover:underline">Dekoras</a>
                        <a href="#" className="hover:underline">Kontaktai</a>
                    </div>
                    <div className="flex gap-4 ml-4">
                        <FaFacebookF className="cursor-pointer hover:text-gray-200 hover:scale-110 transition-transform duration-300" />
                        <FaInstagram className="cursor-pointer hover:text-gray-200 hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
            </section>
            <div class="custom-shape-divider-bottom-1756668446">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#6B21A8" />
                            <stop offset="100%" stop-color="#D8B4FE" />
                        </linearGradient>
                    </defs>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#heroGradient)"></path>
                </svg>
            </div>
        </>
    );
}