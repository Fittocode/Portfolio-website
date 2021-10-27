import * as React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'


const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const MenuItem = ({ i, link, toggle }) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95}}
            onClick={toggle}
        >
            <div className="icon-placeholder" />
            <Link to={link} className="text-placeholder"><div>{i}</div></Link>
        </motion.li>
    );
};



