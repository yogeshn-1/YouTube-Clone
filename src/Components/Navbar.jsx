import React from 'react'
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';  
import SearchIcon from '@mui/icons-material/Search';

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

const Search=styled.div`
  align-items: center;
  border-radius: 5px;
  border: 1px solid #cde;
  display: flex;
  justify-content: space-between;
  left: 0;
  margin: auto;
  position: relative;
  right: 0;
  width: 40%;
`;

const Input=styled.input`
background-color: transparent;
border: 0;
color: ${({theme})=>theme.text};
flex-grow: 1;
outline: 0;
padding: 7px;
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
        <Search>
          <Input placeholder="Search"></Input>
          <SearchIcon/>
        </Search>
        <Btn> <AccountCircleIcon/> Sign in</Btn> 
      </Wrapper>
    </Container>
  )
}

export default Navbar