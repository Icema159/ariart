import Hero from "../components/Hero";
import About from "../components/About";
import Deserts from "../components/Deserts";
import Decor from "../components/Decor";
import Contacts from "../components/Contacts";

export default function Home() {
    return (
        <>
            <>
                <Hero />
                <div id="apie-mus"><About /></div>
                <div id="desertai"><Deserts /></div>
                <div id="dekoras"><Decor /></div>
                <div id="kontaktai"><Contacts /></div>
            </>
        </>
    );
}