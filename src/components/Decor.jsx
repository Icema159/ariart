import React from 'react';

const Decor = () => {
    return (
        <>
            <section
                data-aos="fade-up"
                className="bg-lightViolet py-16 px-6 text-center font-serif">
                {/* Antraštė */}
                <h2 className="text-4xl font-bold mb-2 text-gray-800 animate-fade-in">Dekoras</h2>
                <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-black mb-10 animate-fade-in delay-150 font-body">                    Subtilus grožis, pritaikytas tavo šventei.
                </p>

                {/* Aprašymas */}
                <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-black mb-10 animate-fade-in delay-150 font-body">                    „Ari.Art“ dekoruoja įvairias šventes – nuo mažų gimtadienių iki didelių vestuvių.
                    Kiekvienas stalas, desertas ar detalė apgalvota ir priderinta prie tavo vizijos.
                </p>

                {/* Dekorų tipų kortelės */}
                <div className="grid gap-8 md:grid-cols-2 justify-center items-center max-w-4xl mx-auto">
                    <div>
                        <img src="/images/vestuves.jpg" alt="Vestuvės dekoras" className="rounded-2xl mb-4 w-full h-56 object-cover" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Vestuvės</h3>
                    </div>
                    <div>
                        <img src="/images/krikstynos.jpg" alt="Krikštynų dekoras" className="rounded-2xl mb-4 w-full h-56 object-cover" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Krikštynos</h3>
                    </div>
                </div>
            </section>

            <div className="custom-shape-divider-bottom-1699999999">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    style={{ transform: "rotate(180deg)" }}
                >
                    <defs>
                        <linearGradient id="decorGradient" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0%" stopColor="#D8B4FE" />
                            <stop offset="100%" stopColor="#6B21A8" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="url(#decorGradient)"
                    />
                </svg>
            </div>
        </>
    );
};

export default Decor;