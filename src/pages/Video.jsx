import React from 'react'
import styled from 'styled-components'
import logo from "../assets/yogi-high-resolution-logo-transparent.png"
import AddComments from '../Components/AddComment';
import Comment from '../Components/Comment';
import Cards from '../Components/Cards';
import {Forward ,ThumbsUp, ThumbsDown,CopyPlus} from "lucide-react";

const Container=styled.div`
display: flex;
@media screen and (max-width: 768px) {
  flex-direction: column;
  gap: 20px;
}
`;

const Content=styled.div`
flex: 5;
`;

const VideoWrapper=styled.div`
@media screen and (max-width: 768px) {
  iframe{
    width:500px;
    height: 420px;
  }
}
@media screen and (min-width: 768px) and (max-width:960px){
  iframe{
    width:540px;
    height:480px;
  }
}
@media screen and (min-width: 960px) and (max-width: 1180px) {
  iframe{
    width:640px;
    height: 560px;
  }
}
  @media screen and (min-width: 1180px) and (max-width:1500px) {
  iframe{
    width:800px;
    height: 620px;
  } 
   @media screen and (min-width:1500px) {
  iframe{
    width:100%;
    height: 100%;
  }
}}
`;

const Title=styled.h1`
font-size: 26px;
color: ${({theme})=>theme.text};
font-weight: 500;
margin:5px 0;
`;

const Details=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Info=styled.div`
font-size: medium;
color: ${({theme})=>theme.textSoft};
`;

const Buttons=styled.div`
display: flex;
gap: 10px;
`;

const Button=styled.div`
display: flex;
gap: 5px;
align-items: center;
cursor: pointer;
color: ${({theme})=>theme.text};
font-size: 14px;
`;

const Hline=styled.div`
border: 0.5px solid ${({theme})=>theme.soft};
margin-top: 5px;
`;

const Recommendation=styled.div`
flex: 3;
margin-left: 20px;
@media screen and (max-width: 768px) {
  width: 60%;
}
@media screen and (min-width: 768px) and (max-width:1024px) {
  width: 60%;
}
`;

const Channel=styled.div`
margin:10px 0;
display:flex;
justify-content:space-between;
`;

const ChannelInfo=styled.div`
display: flex;
gap:15px;
`;

const ChannelImage=styled.img`
width:40px;
height: 40px;
border-radius: 50%;
flex-flow: nowrap;
`;

const ChannelDetails=styled.div`
display: flex;
flex-direction: column;
color: ${({theme})=>theme.text};
`;

const ChannelName=styled.span`
font-weight: 500;
`;

const ChannelCounter=styled.span`
font-size: 12px;
color: ${({theme})=>theme.textSoft};
margin: 2px 0 5px;
`;

const Description=styled.p`
font-size: 14px;
margin: 0;
`;

const Subscribe=styled.button`
background-color: red;
color: white;
height: max-content;
padding: 5px 10px;
border: 0;
border-radius: 5px;
cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="900" height="523" src="https://www.youtube.com/embed/K87aFjB7Ff0" title="Beautiful Sunrise &amp; The Flowers | NO COPYRIGHT VIDEO | NATURE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>No Cpoyright Video</Title>
        <Details>
          <Info>640 views , 2 days ago</Info>
          <Buttons>
            <Button><ThumbsUp /> 1452</Button>
            <Button><ThumbsDown />Dislike</Button>
            <Button><Forward />Share</Button>
            <Button><CopyPlus />Add to library</Button>
          </Buttons>
        </Details>
        <Hline/>
        <Channel>
          <ChannelInfo>
            <ChannelImage src={logo}/>
            <ChannelDetails>
              <ChannelName>Yogesh Tube</ChannelName>
              <ChannelCounter>140k Subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aliquid cum harum dolore ipsa beatae iure similique quas iusto recusandae?</Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <AddComments/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </Content>
      <Recommendation>
       <Cards size="sm"/>  
       <Cards size="sm"/>  
       <Cards size="sm"/>  
       <Cards size="sm"/>  
       <Cards size="sm"/>  
       <Cards size="sm"/>  
       <Cards size="sm"/>  
      </Recommendation>    
    </Container>
   
  )
}

export default Video