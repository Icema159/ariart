import React, { useState } from "react";
import SwipeWrapper from "../components/SwipeWrapper";

export default function KitiDesertai() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <SwipeWrapper>
            <section className="py-16 px-6 bg-gradient-to-b from-purple-800 to-purple-300 min-h-screen">
                <h2 className="text-4xl font-bold text-center mb-4 text-white">Kiti desertai</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

                    <div className="bg-white/10 p-4 rounded-xl shadow-md self-start">
                        <h3
                            onClick={() => toggleSection("keksiukai")}
                            className="cursor-pointer text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-white"
                        >
                            🧁 Keksiukai (2,00 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "keksiukai" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "keksiukai" && (
                            <>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Šokoladiniai su karamele</li>
                                    <li>Citrininiai su aviete</li>
                                    <li>Šokoladiniai arba vaniliniai su kokosu</li>
                                    <li>Vaniliniai su pasifloru</li>
                                    <li>Šokoladiniai su vyšnia</li>
                                    <li>Raudonasis aksomas su aviete</li>
                                    <li>
                                        <span className="font-semibold text-purple-600">NAUJIENA:</span> raffaello su įdaru, aplietas su baltu šokoladu ir kokoso drožlėmis
                                    </li>
                                    <li>
                                        <span className="font-semibold text-purple-600">NAUJIENA:</span> ferrero su įdaru, aplietas pienišku šokoladu ir lazd. rieš.
                                    </li>
                                </ul>
                                <p className="text-sm text-purple-300 mt-2">
                                    Užsakomi rinkiniai 6vnt., 9vnt., 12vnt ar daugiau. Spausdintas užrašas, paveikslėlis +1 € / vnt.
                                </p>
                            </>
                        )}
                    </div>

                    <div key="desertaiIndeliuose" className="bg-white/10 p-4 rounded-xl shadow-md self-start">
                        <h3
                            onClick={() => toggleSection("desertaiIndeliuose")}
                            className="cursor-pointer text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-white"
                        >
                            🍨 Desertai indeliuose (3,00 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "desertaiIndeliuose" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "desertaiIndeliuose" && (
                            <>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Desertas su aviečių įdaru</li>
                                    <li>Šokoladinis desertas su vyšnia</li>
                                </ul>
                                <p className="text-sm text-purple-300 mt-2">Mažiausias užsakomas kiekis – 6 vnt.</p>
                            </>
                        )}
                    </div>

                    <div key="popsiukai" className="bg-white/10 p-4 rounded-xl shadow-md self-start">
                        <h3
                            onClick={() => toggleSection("popsiukai")}
                            className="cursor-pointer text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-white"
                        >
                            🍡 Popsiukai (1,30 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "popsiukai" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "popsiukai" && (
                            <>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Vaniliniai</li>
                                    <li>Šokoladiniai</li>
                                    <li>Raudonasis aksomas</li>
                                    <li>Karameliniai</li>
                                </ul>
                                <p className="text-sm text-purple-300 mt-2">Mažiausias užsakomas kiekis – 10 vnt. Dekoruojami pagal poreikius.</p>
                            </>
                        )}
                    </div>

                    <div key="prancuziskiDesertai" className="bg-white/10 p-4 rounded-xl shadow-md self-start">
                        <h3
                            onClick={() => toggleSection("prancuziskiDesertai")}
                            className="cursor-pointer text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-white"
                        >
                            🇫🇷 Prancūziški desertai (3,00 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "prancuziskiDesertai" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "prancuziskiDesertai" && (
                            <>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Vyšnia šokolade</li>
                                    <li>Pistacija–Avietė</li>
                                    <li>Pasifloras–Mangas</li>
                                    <li>Sūris su karamele ir riešutais</li>
                                </ul>
                                <p className="text-sm text-purple-300 mt-2">Mažiausias užsakomas kiekis – 6 vnt.</p>
                            </>
                        )}
                    </div>

                    <div key="miniSpurgos" className="bg-white/10 p-4 rounded-xl shadow-md self-start">
                        <h3
                            onClick={() => toggleSection("miniSpurgos")}
                            className="cursor-pointer text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-white"
                        >
                            🍩 Mini spurgos (0,80 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "miniSpurgos" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "miniSpurgos" && (
                            <>
                                <p>Vanilinės</p>
                                <p className="text-sm text-purple-300 mt-2">Mažiausias užsakomas kiekis – 10 vnt. Spausdintas užrašas arba paveiksliukas +1 €. Dekoruojamos pagal poreikius.</p>
                            </>
                        )}
                    </div>

                    <div key="pannaCotta" className="bg-white/10 p-4 rounded-xl shadow-md self-start">
                        <h3
                            onClick={() => toggleSection("pannaCotta")}
                            className="cursor-pointer text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-white"
                        >
                            🍮 Panna Cotta (2,00 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "pannaCotta" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "pannaCotta" && (
                            <>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Mandarinų</li>
                                    <li>Braškinė</li>
                                </ul>
                                <p className="text-sm text-purple-300 mt-2">Mažiausias užsakomas kiekis – 6 vnt.</p>
                            </>
                        )}
                    </div>

                    <div key="kaneles" className="bg-white/10 p-4 rounded-xl shadow-md self-start">
                        <h3
                            onClick={() => toggleSection("kaneles")}
                            className="cursor-pointer text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-white"
                        >
                            🍥 Kanelės
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "kaneles" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "kaneles" && (
                            <ul className="list-disc list-inside space-y-1">
                                <li>Klasikinės (1vnt. ~45g)</li>
                                <li>Šokoladinės (1vnt. ~45g)</li>
                                <li>Su įdaru (1vnt. ~50g):
                                    <ul className="list-disc list-inside ml-4">
                                        <li>Pistacijų</li>
                                        <li>Avietinis</li>
                                        <li>Vanilinis</li>
                                    </ul>
                                </li>
                                <li>1 kg (~30vnt. kanelių)</li>
                            </ul>
                        )}
                    </div>
                </div>
            </section>
        </SwipeWrapper>
    );
}