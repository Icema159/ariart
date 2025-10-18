import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Deserts from "../components/Deserts";
import Decor from "../components/Decor";
import Contacts from "../components/Contacts";

export default function Home() {
    const navigate = useNavigate();

    const handlers = useSwipeable({
        onSwipedLeft: () => navigate("/tortai"),
        onSwipedRight: () => navigate(-1),
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
    });

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