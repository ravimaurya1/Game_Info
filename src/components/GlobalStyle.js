import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
    }
    body{
        font-family:'Montserrat',sans-serif;
        width:100%;
    }
    h2{
        font-size: 2rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #FF7676;
    }
    h3{
        font-size: 1rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1rem;
        line-height: 150%;
        color: #696969; 
    }
    img{
        display:block;
    }
    input{
        font-family:'Montserrat', sans-serif; 
    }
`;

export default GlobalStyles;
