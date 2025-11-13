import React from 'react';

const DekoroPaketai = () => {
    return (
        <div className="w-full min-h-screen bg-purple-500 text-white px-4 py-16 md:px-20">            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Dekoravimo Paslaugų Paketai</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-transform duration-300 bg-white text-purple-700 transform hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4">Minimalus</h2>
                    <p>30–40 vnt. dekoracijų, stalo takelis, kelios gėlės ar sausos kompozicijos, mažos dekoracijos, žvakės. Kaina nuo 45€.</p>
                </div>

                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-transform duration-300 bg-white text-purple-700 transform hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4">Standartinis</h2>
                    <p>50–70 vnt. dekoracijų, gėlės, dekoracijos, tekstilė, žvakės, stalo takeliai. Kaina nuo 60€.</p>
                </div>

                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-transform duration-300 bg-white text-purple-700 transform hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4">Gausesnis</h2>
                    <p>70–100 vnt. dekoracijų, gausios gėlės, kelios žvakės, dekoracijos, stalo takeliai, tekstilė. Kaina nuo 90€.</p>
                </div>

                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-transform duration-300 bg-white text-purple-700 transform hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4">Prabangus</h2>
                    <p>100+ vnt. dekoracijų, prabangios gėlės, daugybė žvakių, tekstilės, individualūs sprendimai. Kaina nuo 120€.</p>
                </div>
            </div>
        </div>
    );
};

export default DekoroPaketai;