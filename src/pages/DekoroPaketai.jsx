import React from 'react';

const DekoroPaketai = () => {
    return (
        <div className="w-full min-h-screen bg-purple-500 text-white px-4 py-16 md:px-20">            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Dekoravimo Paslaugų Paketai</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-transform duration-300 bg-white text-purple-700 transform hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4">Minimalus</h2>
                    <p>Nuo 200e. Įeina foto sienelė, 2–3 desertiniai staliukai, balionai ir darbas. Dėl papildomos atributikos tartis asmeniškai.</p>
                </div>

                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-transform duration-300 bg-white text-purple-700 transform hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4">Standartinis</h2>
                    <p>Nuo 400e. Į kaina įeina 2–3 dekoravimo zonos, vizijos išpildymas, foto sienelės, desertiniai staleliai, mūsų turima atributika, darbas.</p>
                </div>

                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-transform duration-300 bg-white text-purple-700 transform hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4">Gausesnis</h2>
                    <p>Nuo 500e. Tematikos dekoravimas ir spaudos gamyba. Į kaina įeina šventės vizijos išpildymas nuo fotozonos, vaikų ar suaugusiųjų, desertų stalų iki 5 zonų pagal poreikius + papildomai nuomojamas inventorius, spaudos darbai, gyvos gėlės, transportavimas ir kt.</p>
                </div>

                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-transform duration-300 bg-white text-purple-700 transform hover:scale-105">
                    <h2 className="text-xl font-semibold mb-4">Prabangus/Vestuvinis</h2>
                    <p>Nuo 1000e. Į kaina įeina, puokščių kūrimas, stalų dekoras su mūsų ar nuomojama atributika, saldaus stalo paruošimas, stalo kortelių išdėstymas, staltiesės, servetėlės, fotosienos kūrimas ir kt.
                        Neįeina: gyvos gėlės, kėdžių, tekstilės, polėkščių nuoma, žvakės, molbertai, spauda, transportas (0,50 €/km).</p>
                </div>
            </div>
        </div>
    );
};

export default DekoroPaketai;