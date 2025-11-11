import React from 'react';
import { Link } from 'react-router-dom';
import cakeImg from '../assets/cake.jpg';
import macaronsImg from '../assets/macarons.jpg';
import cupcakesImg from '../assets/cupcakes.jpg';
const Deserts = () => {
    return (
        <>
            <section
                className="bg-gradient-to-r from-purple-800 to-purple-300 py-16 px-4 text-center">
                <h2 className="text-4xl font-bold mb-2 text-white animate-fade-in font-header">Mūsų desertai</h2>
                <p className="text-lg text-white mb-10 animate-fade-in delay-150 font-body">Rinkitės iš mūsų kruopščiai sukurtų saldumynų kategorijų</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Tortai */}
                    <Link to="/tortai" className="group">
                        <div className="group cursor-pointer transition-transform duration-300 hover:scale-105">
                            <img src={cakeImg} alt="Tortas" className="w-full h-64 object-cover rounded-2xl mb-2" />
                            <p className="text-sm text-purple-100 text-center mb-1 font-body" data-aos="fade-up">
                                1kg tortas be dekoro 25.00€
                                Torto dekoras gali kainuoti nuo 5€ iki 25€,
                                priklausomai nuo sudétingumo.
                            </p>
                            <h3 className="text-lg font-semibold text-white text-center font-header group-hover:text-purple-100 transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">Tortai</h3>
                            <button className="inline-block mt-2 px-4 py-2 bg-white text-purple-700 font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body hover:bg-purple-800 hover:text-white" data-aos="fade-up" data-aos-delay="200">
                                Išsirinkti skonį
                            </button>
                        </div>
                    </Link>

                    {/* Makarūnsai */}
                    <Link to="/macarons" className="group">
                        <div className="group cursor-pointer transition-transform duration-300 hover:scale-105">
                            <img src={macaronsImg} alt="Makarūnsai" className="w-full h-64 object-cover rounded-2xl mb-2" />
                            <p className="text-sm text-purple-100 text-center mb-1 font-body" data-aos="fade-up">
                                1vnt.
                                2.20eur
                                Uzsakomi rinkiniai 4vnt., 8vnt. arba
                                16vnt.</p>
                            <h3 className="text-lg font-semibold text-white text-center font-header group-hover:text-purple-100 transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">Macarons</h3>
                            <button className="inline-block mt-2 px-4 py-2 bg-white text-purple-700 font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body hover:bg-purple-800 hover:text-white" data-aos="fade-up" data-aos-delay="200">
                                Išsirinkti skonį
                            </button>
                        </div>
                    </Link>

                    {/* Kiti desertai */}
                    <Link to="/kiti-desertai" className="group">
                        <div className="group cursor-pointer transition-transform duration-300 hover:scale-105">
                            <img src={cupcakesImg} alt="Keksiukai" className="w-full h-64 object-cover rounded-2xl mb-2" />
                            <p className="text-sm text-purple-100 text-center mb-1 font-body" data-aos="fade-up">Keksiukai, cake pops'ai, sausainiai – nuo 2€ už vnt.</p>
                            <h3 className="text-lg font-semibold text-white text-center font-header group-hover:text-purple-100 transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">Kiti desertai</h3>
                            <button className="inline-block mt-2 px-4 py-2 bg-white text-purple-700 font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body hover:bg-purple-800 hover:text-white" data-aos="fade-up" data-aos-delay="200">
                                Išsirinkti desertus
                            </button>
                        </div>
                    </Link>
                </div>
            </section>
            <div className="custom-shape-divider-top-1699999999 -mt-1">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="tiffanyGradient" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0%" stopColor="#6B21A8" />
                            <stop offset="100%" stopColor="#D8B4FE" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="url(#tiffanyGradient)"
                    />
                </svg>
            </div>
        </>
    );
};

export default Deserts;
