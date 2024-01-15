import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../assets/yogi-high-resolution-logo-transparent.png"
import thumbnail from "../assets/thumbnail.png"

const Container=styled.div`
display:${({size})=>size==="sm"&&"flex"};
gap:${({size})=>size==="sm"&&"15px"};
width: ${({size})=>size!=="sm"&&"300px"};
cursor: pointer;
margin:5px auto ${({size})=>size==="sm"?"10px":"30px"} ;
`;

const Image=styled.img`
width: 100%;
height: ${({size})=>size==="sm"?"120px":"200px"};
@media screen and (min-width: 768px) and (max-width:1024px) {
  height: ${({size})=>size==="sm"&&"100px"};
  width:${({size})=>size==="sm"&&"100px"} ;
}
@media screen and (min-width: 1025px) and (max-width:1280px) {
  width:${({size})=>size==="sm"&&"125px"} ;
  height:${({size})=>size==="sm"&&"110px"} ;
}
@media screen and (min-width: 1281px) {
  width:${({size})=>size==="sm"&&"180px"} ;
}
`;

const Details=styled.div`
display: flex;
margin-top: ${({size})=>size!=="sm"&&"10px"};
gap: 15px;
align-items: ${({size})=>size!=="sm"&&"center"};
@media screen and (min-width: 960px) and (max-width:1024px) {
  flex: 1;
}
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
font-size: ${({size})=>size==="sm"?"14px":"16px"};
color: ${({theme})=>theme.text};
margin: 0;
@media screen and (min-width: 768px) and (max-width:1024px) {
  font-size: ${({size})=>size==="sm"&&"12px"};
}
`;

const ChannelName=styled.h3`
font-size: ${({size})=>size==="sm"?"8px":"12px"};
color: ${({theme})=>theme.textSoft};
margin: 5px 0 0;
@media screen and (min-width: 768px) and (max-width:1024px) {
  font-size: ${({size})=>size==="sm"&&"8px"};
}
`;

const Info=styled.div`
font-size: 12px;
@media screen and (min-width: 768px) and (max-width:1024px) {
  font-size: ${({size})=>size==="sm"&&"8px"};
}
`;

const Cards = ({size}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none",color:"inherit"}}>
        <Container size={size}>
            <Image size={size} src={thumbnail}/>
            <Details size={size}>
                <ChannelImage src={logo} size={size}/>
                <TextContainer >
                    <Title  size={size}>No Copyright Video</Title>
                    <ChannelName>Yogesh Tube</ChannelName>
                    <Info>640 views, 2 days ago</Info>
                </TextContainer>
            </Details>
        </Container>
    </Link>
  )
}

export default Cards