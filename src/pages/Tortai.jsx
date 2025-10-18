import React from 'react';
import { useState } from 'react';
import SwipeWrapper from '../components/SwipeWrapper';

const cakesWithImages = [
    {
        name: 'Raudonasis aksomas',
        description: 'Drėgnas biskvitas, sūrio kremas, braškių konfitiūras',
        image: '/tortai/aksomas.jpg',
    },
    {
        name: 'Citrina–Persikas',
        description: 'Citrininis biskvitas, persikų įdaras, citrininis kremas',
        image: '/tortai/citrina.jpg',
    },
    {
        name: 'Medutis',
        description: 'Medaus ploni biskvitai, grietinėlės kremas',
        image: '/tortai/medutis.jpg',
    },
    {
        name: 'Oreo musas',
        description: 'Drėgnas šokoladinis biskvitas, oreo sausainių putėsiai, sūrio pyrago sluoksnis',
        image: '/tortai/oreo.jpg',
    },
    {
        name: 'Rafaello',
        description: 'Kokosinis biskvitas, švelnus kremas, traškus migdolų riešutų sluoksnis',
        image: '/tortai/rafaelo.jpg',
    },
    {
        name: 'Serbentas',
        description: 'Šokoladinis biskvitas. serbentų musas, šokoladinis kremas',
        image: '/tortai/serbentas.jpg',
    },
    {
        name: 'Šokoladinis',
        description: 'Šokoladinis biskvitas, tamsaus šokolado įdaras, karamelinis musas, grietinėlės ir balto šokolado kremas',
        image: '/tortai/sokoladinis.jpg',
    },
    {
        name: 'Šilkine aguona',
        description: 'Aguoninis biskvitas laistytas pienu, balto šokolado ir maskarponės kremas',
        image: 'tortai/silkine aguona.jpg'
    }
];

const Tortai = () => {
    const [selectedCake, setSelectedCake] = useState(null);
    return (
        <SwipeWrapper scrollTo="tortai">
            <>
                <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-700 ${selectedCake ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <div className={`bg-white rounded-lg max-w-md w-full p-6 text-purple-900 relative transition-transform duration-700 transform ${selectedCake ? 'scale-100' : 'scale-95'}`}>
                        <button onClick={() => setSelectedCake(null)} className="absolute top-2 right-4 text-xl font-bold">
                            ×
                        </button>
                        {selectedCake && (
                            <>
                                <h2 className="text-2xl font-bold mb-2">{selectedCake.name}</h2>
                                <p>{selectedCake.description}</p>
                            </>
                        )}
                    </div>
                </div>
                <section className="py-16 px-6 text-white bg-gradient-to-b from-purple-800 to-purple-300 min-h-screen">
                    <h2 className="text-4xl font-bold text-center mb-4">Tortai</h2>
                    <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
                        Pasirinkite iš mūsų klasikinių bei modernių tortų variantų
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cakesWithImages.map((cake, index) => (
                            <div
                                key={index}
                                className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                                onClick={() => setSelectedCake({ name: cake.name, description: cake.description })}
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