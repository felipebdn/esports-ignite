import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #121214;
    color: #FAFAFA;
    -webkit-font-smoothing: antialiased;
  }

  body, input, extarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`