import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Nav } from "./Nav"

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const Navbar = ({ navStatus, setNavStatus }) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
        >
            <motion.div className="background" variants={sidebar} />
            <Nav toggle={() => toggleOpen(setNavStatus(!navStatus))}/>
            <MenuToggle toggle={() => toggleOpen(setNavStatus(!navStatus))} />
        </motion.nav>
    );
};
