import React, { useState } from "react";
import SwipeWrapper from "../components/SwipeWrapper";

export default function KitiDesertai() {
    const toggleSection = (section) => {
        const isDesktop = window.innerWidth >= 1024;
        setOpenSection(prev => {
            if (isDesktop) {
                return prev === section ? null : section;
            } else {
                // Mobile: allow only one open section as well
                return prev === section ? null : section;
            }
        });
    };

    const [openSection, setOpenSection] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <SwipeWrapper>
            <section className="py-16 px-6 bg-gradient-to-b from-purple-800 to-purple-300 min-h-screen">
                <h2 className="text-4xl font-header font-bold text-center mb-4 text-white">Kiti desertai</h2>
                <div className="text-center mb-8">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition backdrop-blur-md"
                    >
                        Desertų užsakymo informacija
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

                    <div id="keksiukai" className="bg-white p-4 rounded-xl shadow-md self-start flex flex-col h-full font-body">
                        <img src="/kiti-desertai/keksai.jpg" alt="Keksiukai" className="rounded-lg mb-4 h-48 w-full object-cover" />
                        <h3
                            onClick={() => toggleSection("keksiukai")}
                            className="cursor-pointer font-body text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-purple-800"
                        >
                            Keksiukai (2,20 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "keksiukai" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "keksiukai" && (
                            <>
                                <ul className="font-body list-disc list-inside space-y-1">
                                    <li>Šokoladiniai su karamele</li>
                                    <li>Citrininiai su aviete</li>
                                    <li>Šokoladiniai arba vaniliniai su kokosu</li>
                                    <li>Vaniliniai su pasifloru</li>
                                    <li>Šokoladiniai su vyšnia</li>
                                    <li>Raudonasis aksomas su aviete</li>
                                    <li>Raffaello su įdaru, aplietas su baltu šokoladu ir kokoso drožlėmis</li>
                                    <li>Ferrero su įdaru, aplietas pienišku šokoladu ir lazd. rieš.</li>
                                </ul>
                                <p className="font-body text-sm text-purple-800 mt-2">
                                    Užsakomi rinkiniai 6vnt., 9vnt., 12vnt ar daugiau. Spausdintas užrašas, paveikslėlis +1 € / vnt.
                                </p>
                            </>
                        )}
                    </div>

                    <div id="desertaiIndeliuose" className="bg-white p-4 rounded-xl shadow-md self-start flex flex-col h-full font-body">
                        <img src="/kiti-desertai/desertaindeliuose.jpg" alt="Desertai indeliuose" className="rounded-lg mb-4 h-48 w-full object-cover" />
                        <h3
                            onClick={() => toggleSection("desertaiIndeliuose")}
                            className="cursor-pointer font-body text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-purple-800"
                        >
                            Desertai indeliuose (3,00 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "desertaiIndeliuose" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "desertaiIndeliuose" && (
                            <>
                                <ul className="font-body list-disc list-inside space-y-1">
                                    <li>Desertas su aviečių įdaru</li>
                                    <li>Šokoladinis desertas su vyšnia</li>
                                </ul>
                                <p className="font-body text-sm text-purple-800 mt-2">Mažiausias užsakomas kiekis – 6 vnt.</p>
                            </>
                        )}
                    </div>

                    <div id="popsiukai" className="bg-white p-4 rounded-xl shadow-md self-start flex flex-col h-full font-body">
                        <img src="/kiti-desertai/popsiukai.jpg" alt="Popsiukai" className="rounded-lg mb-4 h-48 w-full object-cover" />
                        <h3
                            onClick={() => toggleSection("popsiukai")}
                            className="cursor-pointer font-body text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-purple-800"
                        >
                            Popsiukai (1,30 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "popsiukai" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "popsiukai" && (
                            <>
                                <ul className="font-body list-disc list-inside space-y-1">
                                    <li>Vaniliniai</li>
                                    <li>Šokoladiniai</li>
                                    <li>Raudonasis aksomas</li>
                                    <li>Karameliniai</li>
                                </ul>
                                <p className="font-body text-sm text-purple-800 mt-2">Mažiausias užsakomas kiekis – 10 vnt. Dekoruojami pagal poreikius.</p>
                            </>
                        )}
                    </div>

                    <div id="prancuziskiDesertai" className="bg-white p-4 rounded-xl shadow-md self-start flex flex-col h-full font-body">
                        <img src="/kiti-desertai/prancuziski-desertai2.jpg" alt="Prancūziški desertai" className="rounded-lg mb-4 h-48 w-full object-cover" />
                        <h3
                            onClick={() => toggleSection("prancuziskiDesertai")}
                            className="cursor-pointer font-body text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-purple-800"
                        >
                            Prancūziški desertai (3,00 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "prancuziskiDesertai" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "prancuziskiDesertai" && (
                            <>
                                <ul className="font-body list-disc list-inside space-y-1">
                                    <li>Vyšnia šokolade</li>
                                    <li>Pistacija–Avietė</li>
                                    <li>Pasifloras–Mangas</li>
                                    <li>Sūris su karamele ir riešutais</li>
                                </ul>
                                <p className="font-body text-sm text-purple-800 mt-2">Mažiausias užsakomas kiekis – 6 vnt.</p>
                            </>
                        )}
                    </div>

                    <div id="miniSpurgos" className="bg-white p-4 rounded-xl shadow-md self-start flex flex-col h-full font-body">
                        <img src="/kiti-desertai/minispurgos.jpg" alt="Mini spurgos" className="rounded-lg mb-4 h-48 w-full object-cover" />
                        <h3
                            onClick={() => toggleSection("miniSpurgos")}
                            className="cursor-pointer font-body text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-purple-800"
                        >
                            Mini spurgos (0,80 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "miniSpurgos" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "miniSpurgos" && (
                            <>
                                <p className="font-body text-purple-800">Vanilinės</p>
                                <p className="font-body text-sm text-purple-800 mt-2">Mažiausias užsakomas kiekis – 10 vnt. Spausdintas užrašas arba paveiksliukas +1 €. Dekoruojamos pagal poreikius.</p>
                            </>
                        )}
                    </div>

                    <div id="pannaCotta" className="bg-white p-4 rounded-xl shadow-md self-start flex flex-col h-full font-body">
                        <img src="/kiti-desertai/panakota.jpg" alt="Panna Cotta" className="rounded-lg mb-4 h-48 w-full object-cover" />
                        <h3
                            onClick={() => toggleSection("pannaCotta")}
                            className="cursor-pointer font-body text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-purple-800"
                        >
                            Panna Cotta (2,00 €/vnt)
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "pannaCotta" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "pannaCotta" && (
                            <>
                                <ul className="font-body list-disc list-inside space-y-1">
                                    <li>Mandarinų</li>
                                    <li>Braškinė</li>
                                </ul>
                                <p className="font-body text-sm text-purple-800 mt-2">Mažiausias užsakomas kiekis – 6 vnt.</p>
                            </>
                        )}
                    </div>

                    <div id="kaneles" className="bg-white p-4 rounded-xl shadow-md self-start flex flex-col h-full font-body">
                        <img src="/kiti-desertai/kaneles.jpg" alt="Kanelės" className="rounded-lg mb-4 h-48 w-full object-cover" />
                        <h3
                            onClick={() => toggleSection("kaneles")}
                            className="cursor-pointer font-body text-2xl font-semibold mb-2 hover:text-purple-200 transition-colors flex justify-between items-center text-purple-800"
                        >
                            Kanelės
                            <span
                                className={`transform transition-transform duration-300 ${openSection === "kaneles" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </h3>
                        {openSection === "kaneles" && (
                            <>
                                <ul className="font-body list-disc list-inside space-y-1">
                                    <li>Klasikinės (1vnt. ~45g)</li>
                                    <li>Šokoladinės (1vnt. ~45g)</li>
                                    <li>Su įdaru (1vnt. ~50g):
                                        <ul className="font-body list-disc list-inside ml-4">
                                            <li>Pistacijų</li>
                                            <li>Avietinis</li>
                                            <li>Vanilinis</li>
                                        </ul>
                                    </li>
                                    <li>1 kg (~30vnt. kanelių)</li>
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </section>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            ✕
                        </button>
                        <h3 className="text-3xl font-extrabold mb-2 text-center text-purple-800">
                            Desertu užsakymo informacija
                        </h3>
                        <hr className="border-t border-gray-300 mb-4" />
                        <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm leading-relaxed font-body">
                            <li><strong>Keksiukai</strong> – užsakomi rinkiniais: 6, 9, 12 vnt. ir daugiau.</li>
                            <li><strong>Desertai indeliuose</strong> – min. kiekis 6 vnt.</li>
                            <li><strong>Popsiukai</strong> – min. kiekis 10 vnt. Dekoruojami pagal poreikį.</li>
                            <li><strong>Mini spurgos</strong> – min. kiekis 10 vnt. Galima dekoruoti paveikslėliu ar užrašu (+1 €).</li>
                            <li><strong>Panna Cotta</strong> – min. kiekis 6 vnt.</li>
                            <li><strong>Prancūziški desertai</strong> – min. kiekis 6 vnt.</li>
                            <li><strong>Kanelės</strong> – galima rinktis po vieną arba 1 kg (~30 vnt.).</li>
                        </ul>
                    </div>
                </div>
            )}
        </SwipeWrapper>
    );
}