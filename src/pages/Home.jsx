import React from 'react'
import styled from 'styled-components';
import Cards from '../Components/Cards';
const Container=styled.div`
display:grid;
grid-template-columns: repeat(4,1fr);
column-gap: 10px;
@media screen and (min-width:968px) and (max-width: 1439px) {
  grid-template-columns: repeat(3,1fr);
}
@media screen and (min-width:600px) and (max-width: 968px) {
  grid-template-columns: repeat(2,1fr);
}
@media screen and (min-width:0) and (max-width: 599px) {
  grid-template-columns: repeat(1,1fr);
}
`;
const Home = () => {
  return (
    <Container>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
    </Container>
  )
}

export default Home