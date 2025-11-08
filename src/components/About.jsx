// src/components/About.jsx

export default function About() {
    return (
        <>
            <section
                data-aos="fade-up"
                className="relative w-full min-h-[50vh] overflow-hidden flex items-center justify-center px-6 py-16 bg-white text-black text-center font-body">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
                    style={{ backgroundImage: "url('/about.jpg')" }}
                ></div>
                <div className="relative z-10 border-2 border-white/20 bg-white/20 backdrop-blur-sm rounded-full p-6 md:p-10 shadow-lg">
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