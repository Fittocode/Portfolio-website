import React from 'react'
// style
import styled from 'styled-components'
// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const ContactMe = () => {
    return (
        <StyledContact exit="exit" variants={pageAnimation} initial='hidden' animate="enter" style={{ color: '#fff' }} >
            <h1>Contact Me</h1>
            <div>
                <h3>MattHarrison92@gmail.com</h3>
            </div>
        </StyledContact>
    )
}

const StyledContact = styled(motion.div)`
    min-height: 100vh;
    color: white;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
    h3 {
        padding-top: 1rem;
        color: white;
    }
`;

export default ContactMe