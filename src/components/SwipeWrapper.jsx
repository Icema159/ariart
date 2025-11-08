// src/components/SwipeWrapper.jsx
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SwipeWrapper({ children, scrollTo }) {
    const navigate = useNavigate();

    useEffect(() => {
        const savedScroll = sessionStorage.getItem("scrollPosition");
        if (scrollTo && savedScroll !== null) {
            window.scrollTo(0, parseInt(savedScroll, 10));
        }
    }, [scrollTo]);

    const handlers = useSwipeable({
        onSwipedRight: () => {
            const currentScroll = window.scrollY;
            sessionStorage.setItem("scrollPosition", currentScroll.toString());
            navigate("/", { state: { scrollTo: true } });
        },
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
    });

    return (
        <div {...handlers} className="min-h-screen">
            {children}
        </div>
    );
}