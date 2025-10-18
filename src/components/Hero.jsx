import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Hero() {
    return (
        <>
            <section className="font-playfair relative bg-gradient-to-r from-purple-800 to-purple-300 text-white min-h-[30vh] flex flex-col items-center justify-start pt-10 md:pt-16 px-6">
                <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-[length:40px_40px] bg-repeat opacity-10 pointer-events-none z-0"></div>

                {/* Pavadinimas ir subtitras */}
                <div className="text-center z-10">
                    <h1 className="text-8xl md:text-8xl font-bold tracking-wide animate-fade-in">
                        Ari.Art <span role="img" aria-label="cake"></span>
                    </h1>
                    <p className="text-md md:text-lg italic tracking-wide mt-1 animate-fade-in">
                        desertinė
                    </p>

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
                                href="https://www.facebook.com/ari.art.desertine"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-poppins hover:text-blue-300 transition-colors duration-300"
                            >
                                <FaFacebookF size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="custom-shape-divider-bottom-1756668446">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient
                            id="heroGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor="#6B21A8" />
                            <stop offset="100%" stopColor="#D8B4FE" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
          82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
          906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
          214.34,3V0H0V27.35A600.21,600.21,0,0,0,
          321.39,56.44Z"
                        fill="url(#heroGradient)"
                    ></path>
                </svg>
            </div>
        </>
    );
}