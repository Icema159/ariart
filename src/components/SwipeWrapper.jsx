// src/components/SwipeWrapper.jsx
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

export default function SwipeWrapper({ children, scrollTo }) {
    const navigate = useNavigate();

    const handlers = useSwipeable({
        onSwipedRight: () => {
            navigate("/", { state: { scrollTo: scrollTo || null } });
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