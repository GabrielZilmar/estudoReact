import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        text-align: center;
        color: #fff
    }
    html {
        background: #000000;  
        background: -webkit-linear-gradient(to right, #434343, #000000);  
        background: linear-gradient(to right, #434343, #000000);
    }
`;
