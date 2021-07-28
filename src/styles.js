import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledAbout = styled(motion.div)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 0rem 10rem 14rem;
    color: white;
    @media screen and (max-width: 1200px) {
        flex-flow: column-reverse;
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
    @media screen and (max-width: 1200px) {
        img {
            
        }
    }
`
export const StyledHide = styled.div`
    overflow: hidden;
`

export const StyledBox = styled.div`
    display: flex;
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
// test
export const StyledBrandIcon2 = styled(StyledBrandIcon)`
    &:hover{
        color: #00fdd7;
    }
`
