import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container=styled.div`
display:flex;
width: 300px;
cursor: pointer;
margin-bottom: 20px;
flex-direction: column;
`;
const Image=styled.img`
width: 100%;
height: 200px;
background-color: #789;
`;

const Details=styled.div`
display: flex;
margin-top: 10px;
gap: 15px;
`;


const ChannelImage=styled.img`
width:40px;
height: 40px;
background-color: #789;
border-radius: 50%;
`;

const TextContainer=styled.div`

`;

const Title=styled.h2`
font-size: 16px;
color: ${({theme})=>theme.text};
`;

const ChannelName=styled.h3`
font-size: 14px;
color: ${({theme})=>theme.textSoft};
margin: 5px 0 0;
`;

const Info=styled.div`

`;

const Cards = () => {
  return (
    <Link to="/video/test" style={{textDecoration:"none",color:"inherit"}}>
        <Container>
            <Image />
            <Details>
                <ChannelImage/>
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