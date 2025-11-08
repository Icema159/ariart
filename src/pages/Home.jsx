import { useSwipeable } from "react-swipeable";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Deserts from "../components/Deserts";
import Decor from "../components/Decor";
import Contacts from "../components/Contacts";

export default function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    const saveScrollPosition = () => {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            saveScrollPosition();
            navigate("/tortai");
        },
        onSwipedRight: () => {
            const scrollY = window.scrollY;
            sessionStorage.setItem("scrollPosition", scrollY.toString());
            navigate("/", { state: { fromSwipe: true } });
        },
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
    });

    useEffect(() => {
        const savedPosition = sessionStorage.getItem("scrollPosition");

        if (location.state?.fromSwipe && savedPosition) {
            setTimeout(() => {
                window.scrollTo({ top: parseInt(savedPosition), behavior: "auto" });
                sessionStorage.removeItem("scrollPosition");
            }, 100);
        }

        window.addEventListener("beforeunload", saveScrollPosition);
        window.addEventListener("pagehide", saveScrollPosition);

        return () => {
            window.removeEventListener("beforeunload", saveScrollPosition);
            window.removeEventListener("pagehide", saveScrollPosition);
        };
    }, [location]);

    return (
        <div {...handlers} className="min-h-screen">
            <Hero />
            <div id="apie-mus"><About /></div>
            <div id="desertai"><Deserts /></div>
            <div id="dekoras"><Decor /></div>
            <div id="kontaktai"><Contacts /></div>
        </div>
    );
}