import React from 'react'
import styled from 'styled-components';
import logo from "../assets/yogi-high-resolution-logo-transparent.png"

const Container=styled.div`
display: flex;
gap:15px;
margin-top: 15px;
align-items: center;
`;
const Logo=styled.img`
width:40px;
height: 40px;
border-radius: 50%;
`;

const CommentDetails=styled.div`
display: flex;
flex-direction: column;
`; 

const Author=styled.span`
font-weight: bold;
font-size: 14px;
color: ${({theme})=>theme.text};
`;

const Date=styled.span`
color: ${({theme})=>theme.textSoft};
font-weight: 300;
margin-left:5px;
`;

const CommentText=styled.p`
color: ${({theme})=>theme.text};
margin: 3px 0;
font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
         <Logo src={logo}/>
         <CommentDetails>
            <Author>John Doe <Date>2 days ago</Date> </Author>
            <CommentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis voluptates maiores in beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, earum? Dolore.</CommentText>
         </CommentDetails>
    </Container>
  )
}

export default Comment