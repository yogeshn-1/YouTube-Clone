import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Icons import
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import FeedIcon from '@mui/icons-material/Feed';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ReportIcon from '@mui/icons-material/Report';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

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
                 <FontAwesomeIcon icon={faYoutube} size='2x' color='red' />
                  Youtube
             </Logo>
        </Link>
        <Item>
             <HomeIcon />
             Home
        </Item>
        <Item>
             <ExploreIcon />
             Explore
        </Item>
        <Item>
             <SubscriptionsIcon /> 
             Subscriptions
        </Item>
        <Hline/>
        <Login>
            Sign in to like videos, comment and Subscribe 
            <Btn> <AccountCircleIcon/> Sign in</Btn>
        </Login>
        <Hline/>
        <Item>
            <LibraryAddIcon/>
             Library
        </Item>
        <Item>
            <HistoryIcon/>      
             History
        </Item> 
        <Hline/>
        <Title>Best of Youtube</Title>
        <Item>
            <LibraryMusicIcon/>
             Music
        </Item>
        <Item>
            <SportsBasketballIcon/>
             Sports
        </Item>
        <Item>
            <SportsEsportsIcon/>
             Gaming
        </Item>
        <Item>
            <MovieCreationIcon/>
             Movies
        </Item>
        <Item>
            <FeedIcon/>
             News
        </Item> 
        <Item>
            <LiveTvIcon/>
             Live
        </Item>
        <Hline/>
        <Item>
            <SettingsIcon/>
             Settings
        </Item>
        <Item>
            <ReportIcon/>
             Report
        </Item>
        <Item>
            <HelpCenterIcon/>
             Help
        </Item> 
        <Item onClick={()=>setDarkMode(!darkMode)}>
            <SettingsBrightnessIcon/>
             {darkMode? "Light":"Dark"} Mode
        </Item>
       </Wrapper>
    </Container>
  )
}

export default Menu