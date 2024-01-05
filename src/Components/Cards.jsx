import React from 'react'
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

const ChannelImage=styled.img`
width:40px;
height: 40px;
background-color: #789;
border-radius: 50%;
`;

const Details=styled.div`
display: flex;
margin-top: 10px;
gap: 15px;
background-color: aquamarine;
`;

const Cards = () => {
  return (
    <Container>
        <Image>
        </Image>
        <Details>
            <ChannelImage></ChannelImage>
        </Details>
    </Container>
  )
}

export default Cards