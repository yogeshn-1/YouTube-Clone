import React from 'react'
import styled from 'styled-components'
import logo from "../assets/yogi-high-resolution-logo-transparent.png"

const Container=styled.div`
display: flex;
margin-top: 10px;
`;

const NewComment=styled.div`
display: flex;
align-items: center;
gap:15px;
width: 100%;
`;

const Logo=styled.img`
width:40px;
height: 40px;
border-radius: 50%;
`;

const Input=styled.input`
background: transparent;
border-bottom: 0.5px solid ${({theme})=>theme.soft};
border: 0;
color: ${({theme})=>theme.text};
outline: 0;
padding: 2px;
width: 100%;
`;

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Logo src={logo}/>
            <Input placeholder='Add a comment'/>
        </NewComment>
    </Container>
  )
}

export default Comments