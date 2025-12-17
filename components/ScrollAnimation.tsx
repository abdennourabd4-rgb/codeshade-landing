"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimationType = "fade-up" | "fade-in" | "scale-up" | "slide-right" | "slide-left";

interface ScrollAnimationProps {
    children: React.ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
}

const variants = {
    "fade-up": {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    "scale-up": {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    "slide-right": {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    },
    "slide-left": {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    }
};

const ScrollAnimation = ({
    children,
    animation = "fade-up",
    delay = 0,
    duration = 0.5,
    className = "",
}: ScrollAnimationProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[animation]}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
