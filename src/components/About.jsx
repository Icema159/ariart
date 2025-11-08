// src/components/About.jsx

export default function About() {
    return (
        <>
            <section
                data-aos="fade-up"
                className="bg-white text-black py-16 px-6 text-center animate-fade-in font-body">
                <h2 className="text-4xl font-bold mb-2 text-black animate-fade-in font-heading">Apie mus</h2>
                <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-black mb-10 animate-fade-in delay-150 font-body">
                    Ari.Art – tai vieta, kur susitinka kūrybiškumas ir skonis. Mūsų desertai gimsta iš meilės estetikai ir
                    noro pradžiuginti kiekvieną, kuris pasirenka mūsų kepinius savo šventei ar kasdieniam pasilepinimui.
                </p>
            </section>
            <div className="custom-shape-divider-top-about">
                <svg
                    className="w-full h-[80px] rotate-180"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="tiffanyGradient" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0%" stopColor="#D8B4FE" />
                            <stop offset="100%" stopColor="#6B21A8" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
                        82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
                        906.67,72,985.66,92.83c70.05,18.48,
                        146.53,26.09,214.34,3V0H0V27.35A600.21,
                        600.21,0,0,0,321.39,56.44Z"
                        fill="url(#tiffanyGradient)"
                    />
                </svg>
            </div>
        </>
    );
}