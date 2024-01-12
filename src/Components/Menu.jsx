import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Icons import
import yt from "../assets/icons8-youtube-48.png";

import { Compass, Home ,GalleryVerticalEnd,History, BookPlus,Music,LandPlot, Joystick,CircleUser,Clapperboard,Newspaper,Radio,Settings,MessageCircleWarning,HelpCircle,SunMedium,SunMoon,Youtube} from "lucide-react";

const Container=styled.div`
background: ${({theme})=>theme.bgLighter};
color:${({theme})=>theme.text};
flex:1;
font-size: 14px;
height: 100vh;
height: 100vh;
position: sticky;
top: 0;
`;

const Wrapper=styled.div`
padding: 5px 10px;
`;

const Image=styled.img`
width:35px`;

const Logo=styled.div`
align-items: center;
display: flex;
font-weight: bold;
gap: 5px;
margin-bottom: 10px;
`
const Item=styled.div`
align-items: center;
cursor: pointer;
display: flex;
gap: 10px;
margin-top: 5px;
&:hover{
     background-color: ${({theme})=>theme.soft};
     border-radius: 5px;
}
`
const Hline=styled.div`
border: 0.5px solid ${({theme})=>theme.soft};
margin: 10px 0;
`
const Login=styled.div``;

const Btn=styled.button`
align-items: center;
background: transparent;
border : 2px solid #3ca0e3;
border-radius: 3px;
color:#3ca0e3 ;
cursor: pointer;
display:flex;
gap: 5px;
margin: 5px 0;
padding: 5px 15px;
`;

const Title=styled.h2`
font-weight:500;
font-size: 14px;
color:#aaaaaa;
margin-bottom: 7px;
`;

const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
       <Wrapper>
        <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
             <Logo>
             <Image src={yt}/>
                 CloneTube
             </Logo>
        </Link>
        <Item>
        <Home/> Home
        </Item>
        <Item>
          <Compass/> 
          Explore
        </Item>
        <Item>
          <GalleryVerticalEnd />            
          Subscriptions
        </Item>
        <Hline/>
        <Login>
            Sign in to like videos, comment and Subscribe 
            <Link to="login" style={{textDecoration:"none"}}>
             <Btn> <CircleUser/> Sign in</Btn>
            </Link>
        </Login>
        <Hline/>
        <Item>
          <BookPlus />
          Library
        </Item>
        <Item>
         <History />        
          History
        </Item> 
        <Hline/>
        <Title>Best of Youtube</Title>
        <Item>
            <Music />
             Music
        </Item>
        <Item>
             <LandPlot />  
             Sports
        </Item>
        <Item>
          <Joystick />        
          Gaming
        </Item>
        <Item>
          <Clapperboard />
          Movies
        </Item>
        <Item>
          <Newspaper />
          News
        </Item> 
        <Item>
          <Radio />
          Live
        </Item>
        <Hline/>
        <Item>
          <Settings />
          Settings
        </Item>
        <Item>
          <MessageCircleWarning />
          Report
        </Item>
        <Item>
         <HelpCircle />
          Help
        </Item> 
        <Item onClick={()=>setDarkMode(!darkMode)}>
        {darkMode?<SunMedium />:<SunMoon />}
             {darkMode? "Light":"Dark"} Mode
        </Item>
       </Wrapper>
    </Container>
  )
}

export default Menu