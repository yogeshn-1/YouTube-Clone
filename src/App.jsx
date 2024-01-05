import styled, { ThemeProvider } from "styled-components"
import Navbar from "./Components/Navbar"
import Menu from "./Components/Menu"
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
const Container=styled.div`
display:flex;
`;
const Main=styled.div`
flex:7;
background-color: ${({theme})=>theme.bg};
color: ${({theme})=>theme.textSoft};
`;
const Wrapper= styled.div``;

function App() {
  const [darkMode,setDarkMode]=useState(true)
  return (
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main>
        <Navbar/>
        <Wrapper>
         video Cards 
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  )
}

export default App
