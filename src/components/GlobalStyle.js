import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ::-webkit-scrollbar {
            display: none;
          }
    }

    body{
        background: #272727;
        font-family: 'Inter', sans-serif;  
        ${({ navStatus }) => navStatus && `
            transition: all .8s ease;
            margin-left: 10%;
        `}
        ${({ navStatus }) => !navStatus && `
            transition: all .8s ease .5s;
            margin-left: 0%;
        `} 
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #00fdd7;
        font-family: 'Inter', sans-serif;
        background-color: transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            background-color: #00fdd7;
            color: black;
        }
    }
    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
    h3 {
        color: #1b1b1b;
    }
    h4 {
        font-weight: bold;
        font-size: 2rem;
    }
    a {
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: #02ffd9
    }
    p {
        padding: 3rem 0rem;
        color: #dbdbdb;
        font-size: 1.4rem;
        line-height: 150%;
    }
`

// #23d997

export default GlobalStyle