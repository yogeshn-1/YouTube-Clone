import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../assets/yogi-high-resolution-logo-transparent.png"

const Container=styled.div`
display:${({size})=>size==="sm"&&"flex"};
width: ${({size})=>size!=="sm"&&"300px"};
cursor: pointer;
margin-bottom: ${({size})=>size==="sm"?"10px":"30px"};
gap:10px;
`;

const Image=styled.img`
width: 100%;
height: ${({size})=>size==="sm"?"120px":"200px"};
background-color: #789;
flex: 1;
`;

const Details=styled.div`
display: flex;
margin-top: ${({size})=>size!=="sm"&&"10px"};
gap: 15px;
align-items: ${({size})=>size!=="sm"&&"center"};
flex: 1;
`;

const ChannelImage=styled.img`
width:40px;
height: 40px;
border-radius: 50%;
display:${({size})=>size==="sm"&&"none"};
`;

const TextContainer=styled.div`

`;

const Title=styled.h2`
font-size: 16px;
color: ${({theme})=>theme.text};
margin: 0;
`;

const ChannelName=styled.h3`
font-size: 14px;
color: ${({theme})=>theme.textSoft};
margin: 5px 0 0;
`;

const Info=styled.div`
font-size: 12px;
`;

const Cards = ({size}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none",color:"inherit"}}>
        <Container size={size}>
            <Image size={size}/>
            <Details size={size}>
                <ChannelImage src={logo} size={size}/>
                <TextContainer>
                    <Title>Test title</Title>
                    <ChannelName>Yogi bhai ki video</ChannelName>
                    <Info>640 views, 2 days ago</Info>
                </TextContainer>
            </Details>
        </Container>
    </Link>
  )
}

export default Cards