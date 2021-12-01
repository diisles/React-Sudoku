import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle `
 ${({ theme }) => css`
    html {
        height: 100%;

     body {
        background: ${theme.colors.background};
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        

        #root {
            color: ${theme.colors.black};
            display: flex;
            font-family: sans-serif;
            //height: 100%; */ //remove height in root
            justify-content: center;
            padding: 15px;
        }
     }    
   }
`}
`