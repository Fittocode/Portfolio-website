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

const colors = ["#23d997", "#ffa9ff", "#79c7fa"];

export const MenuItem = ({ j, i, link }) => {
    const style = { border: `2px solid ${colors[j]}` };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="icon-placeholder" style={style} />
            <Link to={link} className="text-placeholder"><div style={style}>{i}</div></Link>
        </motion.li>
    );
};



