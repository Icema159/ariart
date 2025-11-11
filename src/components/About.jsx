// src/components/About.jsx

export default function About() {
    return (
        <>
            <section
                data-aos="fade-up"
                className="relative w-full min-h-[60vh] overflow-hidden flex items-center justify-center px-6 py-16 bg-white text-black text-center font-body">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full w-full h-full object-cover opacity-60 z-0"
                >
                    <source src="/promo.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 border-2 border-white/20 bg-white/0 backdrop-blur-sm rounded-full p-6 md:p-10 shadow-lg">
                    <h2 className="text-4xl font-bold mb-2 text-purple-700  font-heading">Apie mus</h2>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-purple-700  mb-10 font-body">
                        Ari.Art – tai vieta, kur susitinka kūrybiškumas ir skonis. Mūsų desertai gimsta iš meilės estetikai ir
                        noro pradžiuginti kiekvieną, kuris pasirenka mūsų kepinius savo šventei ar kasdieniam pasilepinimui.
                    </p>
                </div>
            </section>

        </>
    );
}