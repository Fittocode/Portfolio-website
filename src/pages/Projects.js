import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
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
            {/* <Link to={`/image/${i}`}>
                <motion.img
                    src={`${id}`}
                    alt="music-player"
                    variants={imageVariants}
                    transition={transition}
                />
            </Link> */}
            <StyledProjectTitle variants={titleAnim}>A music player application, built with <span style={{ color: 'rgb(1, 225, 255)' }}>React</span> and styled with Styled Components</StyledProjectTitle>
            <iframe style={{ height: '800px', width: "1200px", background: 'white' }} src="https://gallant-heyrovsky-e92bf2.netlify.app/"></iframe>
        </motion.div>
    </motion.div>
);

export const Projects = () => {
    return (
        <StyledWork exit="exit" variants={pageAnimation} initial='hidden' animate="enter">
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
        </StyledWork >
    )
}

const StyledWork = styled(motion.div)`
    min-height: 100vh;
    color: white;
    overflow: hidden;
    padding: 2rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;

const StyledProjectTitle = styled(motion.p)`
    padding: 0rem 0rem 1rem;
    color: white;
`

// const Frame1 = styled(motion.div)`
//     position: fixed;
//     left: 0;
//     top: 0%;
//     width: 100%;
//     height: 100vh;
//     background: #00fdd7;
//     z-index: 2;
// `

export default Projects