import React from 'react';
import { useState } from 'react';

const Tortai = () => {
    const [selectedCake, setSelectedCake] = useState(null);
    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-700 ${selectedCake ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div
                    className={`bg-white rounded-lg max-w-md w-full p-6 text-purple-900 relative transition-transform duration-700 transform ${selectedCake ? 'scale-100' : 'scale-95'
                        }`}
                >
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
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Raudonasis aksomas',
                                description: 'Drėgnas biskvitas, sūrio kremas, braškių konfitiūras',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Raudonasis aksomas</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Apelsinas',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Apelsinas</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Ferrero',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Ferrero</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Vyšnia',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Vyšnia</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Rafaello',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Rafaello</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Karamelinis',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Karamelinis</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Citrina–Persikas',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Citrina–Persikas</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Serbentas',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Serbentas</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Avietinis',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Avietinis</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Oreo musas',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Oreo musas</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Stracciatella',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Stracciatella</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Braškinis',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Braškinis</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Medutis',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Medutis</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Banoffee',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Banoffee</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Marshmallows-avietė',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Marshmallows-avietė</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Šokoladinis',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Šokoladinis</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Mango-avietė',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Mango-avietė</h3>
                    </div>
                    <div
                        className="bg-white text-purple-900 rounded-lg shadow-lg p-6 cursor-pointer transition-opacity transition-transform duration-700 hover:scale-105 hover:opacity-90"
                        onClick={() =>
                            setSelectedCake({
                                name: 'Šilkinė aguona',
                                description: '',
                            })
                        }
                    >
                        <h3 className="text-2xl font-semibold mb-2">Šilkinė aguona</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tortai;