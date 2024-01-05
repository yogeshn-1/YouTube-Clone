import React from 'react'
import styled from 'styled-components';
import Cards from '../Components/Cards';
const Container=styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
`;
const Home = () => {
  return (
    <Container>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </Container>
  )
}

export default Home