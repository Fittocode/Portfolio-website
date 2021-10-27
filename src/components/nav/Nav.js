import React from 'react'
import { motion } from "framer-motion";
import { MenuItem } from "./Menuitem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1}
    }
};


export const Nav = ({toggle}) => {
    return (
        <motion.ul variants={variants}>
            {itemIds.map(item => (
                <MenuItem i={item.page} key={item.page} pages={item.page} link={item.link} toggle={toggle}/>
            ))}
        </motion.ul>
    )
}

const itemIds = [{ page: 'About', link: '/' }, { page: 'Projects', link: '/projects' }, { page: 'Resume', link: '/resume' }]


export default Nav
