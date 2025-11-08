import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Contacts = () => {
    return (
        <section
            className="bg-gradient-to-r from-purple-800 to-purple-300 py-16 px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Susisiekite su mumis</h2>
            <p className="mb-8 text-lg max-w-xl mx-auto">
                Norite užsakyti desertus ar turite klausimų? Susisiekite su mumis žemiau pateiktais kontaktais.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-left max-w-3xl mx-auto">
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold mb-4">Kontaktai</h3>
                    <p className="flex items-center gap-2">
                        <FiPhone className="text-xl" />
                        <a href="tel:+37060000000" className="hover:underline">+370 600 00000</a>
                    </p>
                    <p className="flex items-center gap-2">
                        <FiMail className="text-xl" />
                        <a href="mailto:info@ari.art" className="hover:underline">info@ari.art</a>
                    </p>
                    <p className="flex items-center gap-2">
                        <FiMapPin className="text-xl" />
                        Turgaus g. 1, Jonava, 55149 Jonavos r. sav.
                    </p>
                </div>
                <div className="w-full rounded-2xl md:w-1/2">
                    <iframe
                        title="Ari.Art location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.385960339159!2d24.2770889!3d55.0711359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7238a2b29a54f%3A0x5e8f1f1c14c3d1d1!2sTurgaus%20g.%201%2C%2055149%20Jonava%2C%20Lithuania!5e0!3m2!1sen!2slt!4v1699999999999!5m2!1sen!2slt"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contacts;