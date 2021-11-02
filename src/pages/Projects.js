import React from 'react'
import JournalGif from '../img/Journal-app.gif'
import musicplayerGif from '../img/musicplayer.gif'
// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import { images } from "../images";

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 1, size: 1 },
    enter: { scale: 1, opacity: 1, transition },
};

const frameVariants = {
    hover: { scale: 1.01, opacity: 1, boxShadow: '5px 5px 15px -5px rgb(255, 255, 255, .7)'}
};

const Thumbnail = () => (
    <motion.div className="frame" variants={thumbnailVariants}>
        <div className="project-items">
            <motion.p className="projects-title">A Twitter-like Journal application, built with React and styled with Sass. Still being developed. Currently only client-side. </motion.p>
            <a href="https://zealous-kepler-ab4529.netlify.app/" target="tab"><div className="project-demo">Demo</div></a>
            <motion.div
                whileHover="hover"
                variants={frameVariants}
                transition={transition}
            >
                <a href="https://zealous-kepler-ab4529.netlify.app/" target="tab"><img className="thumbnail" src={JournalGif} alt="This is an animated gif of my Journal App"/></a>
            </motion.div>
        </div>
        <div className="projects-items">
            <motion.p className="projects-title">A fully functioning Music Player app, built with React and styled with Sass. </motion.p>
            <a href="https://gallant-heyrovsky-e92bf2.netlify.app/" target="tab"><div className="project-demo">Demo</div></a>
            <motion.div
                whileHover="hover"
                variants={frameVariants}
                transition={transition}
            >
                <a href="https://gallant-heyrovsky-e92bf2.netlify.app/" target="tab"><img className="thumbnail" src={musicplayerGif} alt="This is an animated gif of my Journal App"/></a>
            </motion.div>
        </div>
    </motion.div>
);

export const Projects = () => {
    return (
        <motion.div className="projects-layout" exit="exit" variants={pageAnimation} initial='hidden' animate="enter">
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