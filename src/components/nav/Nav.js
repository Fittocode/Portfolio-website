import React from 'react'
import { motion } from "framer-motion";
import { MenuItem } from "./Menuitem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};


export const Nav = () => {
    return (
        <motion.ul variants={variants}>
            {itemIds.map(item => (
                <MenuItem i={item.page} key={item.page} pages={item.page} link={item.link} />
            ))}
        </motion.ul>
    )
}

const itemIds = [{ page: 'About Me', link: '/' }, { page: 'Projects', link: '/projects' }, { page: 'Contact Me', link: '/contact' }]


export default Nav
