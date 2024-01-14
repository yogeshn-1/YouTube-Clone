import styled, { ThemeProvider } from "styled-components"
import Navbar from "./Components/Navbar"
import Menu from "./Components/Menu"
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Video from "./pages/Video";
import Login from "./pages/Login";
const Container=styled.div`
display:flex;
`;
const Main=styled.div`
flex:7;
background-color: ${({theme})=>theme.bg};
color: ${({theme})=>theme.textSoft};
`;
const Wrapper= styled.div`
margin:20px 40px;
@media screen and (min-width: 768px) and (max-width:960px){
margin: 10px 20px;
}
`
;
function App() {
  const [darkMode,setDarkMode]=useState(true)
  return (
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
    <Container>
      <BrowserRouter>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Main>
          <Navbar/>
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="video">
                  <Route path=":id" element={<Video/>}/>
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  )
}

export default App
