import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledAbout = styled(motion.div)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0rem 10rem 14rem;
    color: white;
    @media screen and (max-width: 950px) {
        flex-flow: column-reverse;
        padding: 10rem 0rem 10rem 10rem;
    }
    @media screen and (max-width: 700px) {
        padding-bottom: 10rem 0rem 20rem 10rem;
    }
    @media screen and (max-width: 400px) {
        width: 90%;
        padding: 5rem 0rem 20rem 10rem;
    }
`;
export const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`
export const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 80%;
        border-radius: 50%;
    }
    @media screen and (max-width: 7680px) {
 
    }
`
export const StyledHide = styled.div`
    overflow: hidden;
`

export const StyledBox = styled.div`
    display: flex;
    order: 1;
`
export const StyledIcons = styled.div`
    display: flex;
    @media screen and (max-width: 760px) {
        order: 2;
    }
`

export const StyledBrandIcon = styled(motion.div)`
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    color: white;
    padding: 0rem 0rem 0rem 1rem;
    &:hover{
        color: #00fdd7;
        cursor: pointer;
    }
`
