import React from 'react'
import Matt2 from '../img/IMG_0940.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// Styled
import { StyledAbout, StyledDescription, StyledImage, StyledHide, StyledBox, StyledBrandIcon, StyledBrandIcon2 } from '../styles'

// Framer Motion
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
// import { photoAnim } from '../animation'


const AboutSection = () => {

    const titleAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1 } }
    }

    const headlineAnim = {
        hidden: { y: 200 },
        show: { y: 0, transition: { duration: 1 } }
    }
    const container = {
        hidden: { x: 100, opacity: 0 },
        show: { x: 0, opacity: 1, transition: { duration: .5, ease: "easeOut", staggerChildren: .20, when: 'beforeChildren' } }
    }

    return (
        <motion.div exit="exit" variants={pageAnimation} initial='hidden' animate="enter">
            <StyledAbout variants={container} initial="hidden" animate="show">
                <StyledDescription>
                    <div className="title">
                        <StyledHide>
                            <motion.h2 variants={headlineAnim}>Hi, I'm Matt</motion.h2>
                        </StyledHide>
                        <StyledHide>
                            <motion.h2 variants={headlineAnim}>
                                <span> Front-end</span> Developer
                            </motion.h2>
                        </StyledHide>
                    </div>
                    <motion.p variants={titleAnim}>This Portfolio was built with <span style={{ color: 'rgb(1, 225, 255)' }}>React</span></motion.p>
                    <StyledBox>
                        <motion.button whileHover={{ y: -10, transition: { duration: .02 } }} variants={titleAnim} style={{ marginRight: '.5rem' }}>Projects</motion.button>
                        <motion.button whileHover={{ y: -10, transition: { duration: .02 } }} variants={titleAnim}>
                            Contact me
                        </motion.button>
                        <motion.a whileHover={{ y: -10, transition: { duration: .3 } }} href="https://github.com/Fittocode" className="brand-icon">
                            <StyledBrandIcon variants={titleAnim}>
                                <FontAwesomeIcon size="3x" icon={faGithub} />
                            </StyledBrandIcon>
                        </motion.a>
                        <motion.a whileHover={{ y: -10, transition: { duration: .3 } }} href="https://www.linkedin.com/in/matt-harrison-5697b363/" className="brand-icon">
                            <StyledBrandIcon2 variants={titleAnim}>
                                <FontAwesomeIcon className="brand-icon" size="3x" icon={faLinkedin} />
                            </StyledBrandIcon2>
                        </motion.a>
                    </StyledBox>
                </StyledDescription>
                <StyledImage>
                    <motion.img variants={titleAnim} src={Matt2} alt="Matt Harrison portrait" />
                </StyledImage>
            </StyledAbout>
        </motion.div>
    )
}



export default AboutSection