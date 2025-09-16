import React, { useState } from "react";

const macaronsData = [
    {
        title: "Levanda",
        description: "Levandų ganašas, serbentų konfit.",
        image: "/macarons/Levanda.jpg",
    },
    {
        title: "Pistacija su aviete",
        description: "Pistacijų ganašas, aviečių konfit.",
        image: "/macarons/Pistacija su aviete.jpg",
    },
    {
        title: "Malibu",
        description: "Kokosinio likerio ganašas, braškinis konfit.",
        image: "/macarons/malibu.jpg",
    },
    {
        title: "Kavos infuzija",
        description: "Kavos pupelių ganašas",
        image: "/macarons/Kavos infuzija.jpg",
    },
    {
        title: "Kalamansi",
        description: "Kalamansi vaisiaus ganašas, braškių konfit.",
        image: "/macarons/kalamanai.jpg",
    },
    {
        title: "Pieniškas šokoladas",
        description: "Šokoladinis ganašas, lazd. riešutai",
        image: "/macarons/Pieniškas šokoladas.jpg",
    },
    {
        title: "Tropikai",
        description: "Mangų ganašas, pasiflorų konfit.",
        image: "/macarons/Tropikai.jpg",
    },
    {
        title: "Matcha",
        description: "Matchos atbatos ganašas, braškių konfit.",
        image: "/macarons/matcha.jpg",
    },
    {
        title: "Vanile",
        description: "Vanilinis ganašas, kriaušių, serbentų arba vyšnių konfit.",
        image: "/macarons/Vanile.jpg",
    },
    {
        title: "Pinakolada",
        description: "Kokosinio likerio ganašas, ananasų konfit.",
        image: "/macarons/Pinakolada.jpg",
    },
    {
        title: "Bounty",
        description: "Šokoladinis ganašas, kokosinis sūrio įdaras",
        image: "/macarons/bounty.jpg",
    },
    {
        title: "Biscoff karamelė",
        description: "Karamelinis ganašas, traškus įdaras",
        image: "/macarons/biscoff.jpg",
    },
];

export default function Macarons() {
    const [selected, setSelected] = useState(null);

    return (
        <section className="py-16 px-6 text-white bg-gradient-to-b from-purple-800 to-purple-300 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-4">Makarunsai</h2>
            <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
                Išsirinkite iš mūsų išskirtinių skonių macarons sausainių
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {macaronsData.map((macaron, index) => (
                    <div
                        key={index}
                        onClick={() => setSelected(macaron)}
                        className="cursor-pointer border border-purple-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={macaron.image}
                            alt={macaron.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold text-purple-700">{macaron.title}</h3>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="bg-white p-6 rounded-lg max-w-md w-full mx-4 text-left relative animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-3 text-gray-600 text-2xl font-bold"
                            onClick={() => setSelected(null)}
                        >
                            &times;
                        </button>
                        <img
                            src={selected.image}
                            alt={selected.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-bold text-purple-800">{selected.title}</h3>
                        <p className="mt-2 text-gray-700">{selected.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
}