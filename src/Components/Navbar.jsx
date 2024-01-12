import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {CircleUser,Search} from "lucide-react";

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