import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {CircleUser,Search} from "lucide-react";
import yt from "../assets/icons8-youtube-48.png";


const Container=styled.div`
  background-color: ${({theme})=>theme.bgLighter};
  height: 56px;
  position: sticky;
  top: 0;
`;

const Wrapper=styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  &:first-of-type img{
    display: none;
  }
  @media screen  and (max-width: 480px){
    &:first-of-type img{
    display: block;
  }
  }
`;

const Image=styled.img`
width:40px;
padding: 5px;
`;

const SearchBar=styled.div`
  align-items: center;
  border-radius: 5px;
  border: 1px solid #cde;
  display: flex;
  justify-content: space-between;
  left: 0;
  margin: auto;
  position: relative;
  padding: 0 5px;
  right: 0;
  width: 50%;
`;

const Input=styled.input`
background-color: transparent;
border: 0;
color: ${({theme})=>theme.text};
flex-grow: 1;
outline: 0;
padding: 5px 10px;
`;

const Btn=styled.button`
align-items: center;
background: transparent;
border : 2px solid #3ca0e3;
border-radius: 3px;
color:#3ca0e3 ;
cursor: pointer;
display:flex;
gap: 5px;
margin:0 5px;
padding: 5px 15px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
             <Image src={yt}/>
        </Link>
        <SearchBar>
          <Input placeholder="Search"></Input>
          <Search />
        </SearchBar>
        <Link to="login" style={{textDecoration:"none"}}>
          <Btn> <CircleUser/> Sign in</Btn> 
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar