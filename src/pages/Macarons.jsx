import React, { useState } from "react";
import SwipeWrapper from "../components/SwipeWrapper";

const macaronsData = [
    {
        title: "Malibu",
        description: "Kokosinio likerio ganašas, braškinis konfit.",
        image: "/macarons/malibu.jpg",
    },
    {
        title: "Matcha",
        description: "Kavos pupelių ganašas",
        image: "/macarons/matcha.jpg",
    },
    {
        title: "Kalamansi",
        description: "Kalamansi vaisiaus ganašas, braškių konfit.",
        image: "/macarons/kalamanai.jpg",
    },
    {
        title: "Mėlynoji matcha",
        description: "Matcha arbatos ganašas, braškinis konfit.",
        image: "/macarons/melynojimatcha.jpg"
    },
    {
        title: "Pieniškas šokoladas",
        description: "Šokoladinis ganašas, lazd. riešutai",
    },
    {
        title: "Tropikai",
        description: "Mangų ganašas, pasiflorų konfit.",
    },
    {
        title: "Matcha",
        description: "Matchos atbatos ganašas, braškių konfit.",
    },
    {
        title: "Vanile",
        description: "Vanilinis ganašas, kriaušių, serbentų arba vyšnių konfit.",
    },
    {
        title: "Pinakolada",
        description: "Kokosinio likerio ganašas, ananasų konfit.",
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
    {
        title: "Kavos infuzija",
        description: "Kavos pupelių ganašas",
    },
    {
        title: "Pistacija su aviete",
        description: "Pistacijų ganašas, aviečių konfit.",
    },
];

export default function Macarons() {
    const [selected, setSelected] = useState(null);
    const [showInfo, setShowInfo] = useState(false);

    const macaronsWithImages = macaronsData.filter((m) => m.image);
    const macaronsWithoutImages = macaronsData.filter((m) => !m.image);

    return (
        <SwipeWrapper scrollTo="makarunsai">
            <section className="py-16 px-6 text-white bg-gradient-to-b from-purple-800 to-purple-300 min-h-screen">
                <h2 className="text-4xl font-bold text-center mb-4">Macarons</h2>
                <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
                    Išsirinkite iš mūsų išskirtinių skonių macarons sausainių
                </p>
                <button
                    onClick={() => setShowInfo(true)}
                    className="mx-auto mb-8 block bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition font-semibold"
                >
                    Macarons užsakymo informacija
                </button>

                {/* Block 1: With Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {macaronsWithImages.map((macaron, index) => (
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

                {/* Block 2: Stylish List Without Images */}
                {macaronsWithoutImages.length > 0 && (
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-center mb-6">Kiti skoniai</h3>
                        <ul className="space-y-4">
                            {macaronsWithoutImages.map((macaron, index) => (
                                <li
                                    key={index}
                                    className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20"
                                >
                                    <h4 className="text-lg font-semibold">{macaron.title}</h4>
                                    <p className="text-sm text-white/80">{macaron.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Modal */}
                {selected && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300"
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

                {showInfo && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                        onClick={() => setShowInfo(false)}
                    >
                        <div
                            className="bg-white p-6 rounded-lg max-w-md w-full mx-4 text-left relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-2 right-3 text-gray-600 text-2xl font-bold"
                                onClick={() => setShowInfo(false)}
                            >
                                &times;
                            </button>
                            <h3 className="text-2xl font-bold text-purple-800 mb-4">Macarons užsakymo informacija</h3>
                            <p className="text-gray-700 mb-2">1 vnt. – 2.20 €</p>
                            <p className="text-gray-700 mb-2">Rinkiniai: 4, 8, 12 arba 16 vnt.</p>
                            <p className="text-gray-700 mb-2">Piramidė: nuo 4 iki 10 aukštų</p>
                            <p className="text-gray-700">Piramidės padėkliukas turi būti grąžintas per 3 d.</p>
                        </div>
                    </div>
                )}
            </section>
        </SwipeWrapper>
    );
}