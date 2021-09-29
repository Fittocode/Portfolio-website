import React from 'react'
import { Link } from "react-router-dom";
// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import { images } from "../images";

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };

const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } }
}

const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0, size: 1 },
    enter: { scale: 1, opacity: 1, transition },
};

const frameVariants = {
    hover: { scale: 1.01 }
};

const imageVariants = {
    hover: { scale: .98 }
};

const Thumbnail = ({ id, i }) => (
    <motion.div className="thumbnail" variants={thumbnailVariants}>
        <motion.div
            className="frame"
            whileHover="hover"
            variants={frameVariants}
            transition={transition}
        >
            <motion.p className="projects-title" variants={titleAnim}>A music player application, built with <span style={{ color: 'rgb(1, 225, 255)' }}>React</span> and styled with Sass</motion.p>
            <iframe className="iframe" style={{ background: 'white' }} title="Music App" src="https://gallant-heyrovsky-e92bf2.netlify.app/"></iframe>
        </motion.div>
    </motion.div>
);

export const Projects = () => {
    return (
        <motion.div className="projects-layout" exit="exit" variants={pageAnimation} initial='hidden' animate="enter">
            <h1>Projects</h1>
            <div className="gallery">
                <motion.div
                    className="thumbnails"
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
                >
                    {images.map((id, i) => (
                        <Thumbnail key={id} id={id} i={i} />
                    ))}
                </motion.div>
            </div>
        </motion.div >
    )
}

export default Projects