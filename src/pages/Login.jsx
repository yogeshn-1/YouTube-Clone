import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
align-items: center;
display: flex;
height: 90vh;
justify-content: center;
`;

const Wrapper=styled.div`
align-items: center;
background-color: ${({theme})=>theme.bgLighter};
border-radius: 10px;
color: ${({theme})=>theme.text};
display: flex;
flex-direction: column;
padding: 20px 50px;
`;

const Title=styled.h1`
font-weight: 500;
font-size: 24px;
margin: 0 0 7px;
`;

const SubTitle=styled.h2`
font-weight: 400;
font-size: 16px;
margin: 0 0 7px;
`;

const Input=styled.input`
margin: 5px 0;
outline: 0;
padding: 2px 5px;
border-radius: 2px;
color: ${({theme})=>theme.text};
border: 2px solid ${({theme})=>theme.soft}; 
background: transparent;
`;

const Btn=styled.button.attrs(props=>({className:props.className}))`
margin:5px 0;
cursor: pointer;
padding: 5px 15px;
background-color: #28c557;
color: whitesmoke;
border: 0;
border-radius: 6px;
&.signup{
    background-color: #6767de;
}
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                Sign In 
            </Title>
            <SubTitle>to continue to YouTube</SubTitle>
            <Input type='text' placeholder='username'/>
            <Input type='password' placeholder='password'/>
            <Btn>Sign in</Btn>
            <SubTitle>or</SubTitle>
            <Title>
                Sign Up 
            </Title>
            <Input type='text' placeholder='username'/>
            <Input type='email' placeholder='email'/>
            <Input type='password' placeholder='password'/>
            <Btn className='signup'>Sign Up</Btn>
        </Wrapper>
    </Container>
  )
}

export default Login