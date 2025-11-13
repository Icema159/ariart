import React from 'react';
import { useState } from 'react';
import SwipeWrapper from '../components/SwipeWrapper';

const cakesWithImages = [
    {
        name: 'Raudonasis aksomas',
        description: 'Drėgnas biskvitas, sūrio kremas, braškių konfitiūras',
        image: '/tortai/aksomas.jpg',
        price: 'nuo 25€ / kg'
    },
    {
        name: 'Citrina–Persikas',
        description: 'Citrininis biskvitas, persikų įdaras, citrininis kremas',
        image: '/tortai/citrina.jpg',
        price: 'nuo 25€ / kg'
    },
    {
        name: 'Medutis',
        description: 'Medaus ploni biskvitai, grietinėlės kremas',
        image: '/tortai/medutis.jpg',
        price: 'nuo 25€ / kg'
    },
    {
        name: 'Oreo musas',
        description: 'Drėgnas šokoladinis biskvitas, oreo sausainių putėsiai, sūrio pyrago sluoksnis',
        image: '/tortai/oreo.jpg',
        price: 'nuo 25€ / kg'
    },
    {
        name: 'Rafaello',
        description: 'Kokosinis biskvitas, švelnus kremas, traškus migdolų riešutų sluoksnis',
        image: '/tortai/rafaelo.jpg',
        price: 'nuo 25€ / kg'
    },
    {
        name: 'Serbentas',
        description: 'Šokoladinis biskvitas. serbentų musas, šokoladinis kremas',
        image: '/tortai/serbentas.jpg',
        price: 'nuo 25€ / kg'
    },
    {
        name: 'Šokoladinis',
        description: 'Šokoladinis biskvitas, tamsaus šokolado įdaras, karamelinis musas, grietinėlės ir balto šokolado kremas',
        image: '/tortai/sokoladinis.jpg',
        price: 'nuo 25€ / kg'
    },
    {
        name: 'Šilkine aguona',
        description: 'Aguoninis biskvitas laistytas pienu, balto šokolado ir maskarponės kremas',
        image: 'tortai/silkine aguona.jpg',
        price: 'nuo 25€ / kg'
    }
];

const Tortai = () => {
    const [selectedCake, setSelectedCake] = useState(null);
    const [showInfo, setShowInfo] = useState(false);
    return (
        <SwipeWrapper scrollTo="tortai">
            <>
                <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500 ${showInfo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <div className="bg-white rounded-lg max-w-md w-full p-6 text-purple-900 relative transition-transform duration-500 transform scale-100">
                        <button onClick={() => setShowInfo(false)} className="absolute top-2 right-4 text-xl font-bold">×</button>
                        <h3 className="text-2xl font-semibold mb-4">Tortų užsakymo informacija</h3>
                        <ul className="space-y-2 text-sm">
                            <li>• Kaina: <span className="font-semibold">nuo 25€ / kg</span></li>
                            <li>• Minimalus užsakymas: <span className="font-semibold">1 kg</span></li>
                            <li>• Dekoracijos: <span className="font-semibold">Sausų gėlių dekoras +10€</span></li>
                            <li>• Papildomas individualus dekoras gali kainuoti papildomai pagal pageidavimą.</li>
                        </ul>
                    </div>
                </div>
                <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-700 ${selectedCake ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <div className={`bg-white rounded-lg max-w-md w-full p-6 text-purple-900 relative transition-transform duration-700 transform ${selectedCake ? 'scale-100' : 'scale-95'}`}>
                        <button onClick={() => setSelectedCake(null)} className="absolute top-2 right-4 text-xl font-bold">
                            ×
                        </button>
                        {selectedCake && (
                            <>
                                <img
                                    src={selectedCake.image}
                                    alt={selectedCake.name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h2 className="text-2xl font-bold mb-2">{selectedCake.name}</h2>
                                <p>{selectedCake.description}</p>
                                <p className="text-lg font-semibold">{selectedCake.price}</p>
                            </>
                        )}
                    </div>
                </div>
                <section className="py-16 px-6 text-white bg-gradient-to-b from-purple-800 to-purple-300 min-h-screen">
                    <h2 className="text-4xl font-bold text-center mb-4">Tortai</h2>
                    <button
                        onClick={() => setShowInfo(true)}
                        className="block mx-auto mb-10 px-6 py-3 bg-white/20 border border-white/30 rounded-lg text-white hover:bg-white/30 transition duration-300"
                    >
                        Tortų užsakymo informacija
                    </button>
                    <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
                        Pasirinkite iš mūsų klasikinių bei modernių tortų variantų
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cakesWithImages.map((cake, index) => (
                            <div
                                key={index}
                                className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                                onClick={() => setSelectedCake({ name: cake.name, description: cake.description, price: cake.price, image: cake.image })}
                            >
                                <img
                                    src={cake.image}
                                    alt={cake.name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-2xl font-semibold">{cake.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </>
        </SwipeWrapper>
    );
};

export default Tortai;