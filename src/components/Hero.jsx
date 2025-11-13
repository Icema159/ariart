import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Hero() {
    return (
        <>
            <section className="font-playfair relative bg-gradient-to-r from-purple-800 to-purple-300 text-white min-h-[30vh] flex flex-col items-center justify-start pt-10 md:pt-16 px-6">
                <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-[length:40px_40px] bg-repeat opacity-10 pointer-events-none z-0"></div>

                {/* Pavadinimas ir subtitras */}
                <div className="flex flex-col items-center z-10">
                    <img
                        src="public/logo.png"
                        alt="Ari.Art logotipas"
                        className="w-56 md:w-72 object-cover mb-2 animate-fade-in rounded-full shadow-lg border-2 border-white"
                    />

                    {/* NAVIGACIJA */}
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-6 text-sm md:text-base px-4 w-full z-10">
                        {/* Navigacija */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            <Link
                                to="apie-mus"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="font-poppins cursor-pointer hover:underline"
                            >
                                Apie mus
                            </Link>
                            <Link
                                to="desertai"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="font-poppins cursor-pointer hover:underline"
                            >
                                Desertai
                            </Link>
                            <Link
                                to="dekoras"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="font-poppins cursor-pointer hover:underline"
                            >
                                Dekoras
                            </Link>
                            <Link
                                to="kontaktai"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="font-poppins cursor-pointer hover:underline"
                            >
                                Kontaktai
                            </Link>
                        </div>

                        {/* Socialinės ikonos */}
                        <div className="flex gap-6 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end">
                            <a
                                href="https://www.instagram.com/ariart_desertai?igsh=MW4zd25raWQzdG92bQ==https://www.instagram.com/ari.art.desertine"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-poppins hover:text-pink-300 transition-colors duration-300"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100070058659281"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-poppins hover:text-blue-300 transition-colors duration-300"
                            >
                                <FaFacebookF size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="mt-10"></div>
                </div>
            </section>


        </>
    );
}