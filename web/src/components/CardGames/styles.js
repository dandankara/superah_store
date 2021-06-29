import styled from 'styled-components';

const ContainerCard = styled.div`
display: flex;
padding: 2rem;
justify-content: center;
`;

const Card = styled.div`
flex-direction: column;
border: 1px solid;
margin: 0.5rem;
background-color: aliceblue;
`;


const CardGame = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  span:first-child{
    flex-grow: 1;
  }
  span:last-child{
  position: relative;
  bottom: -1px;
    font-size: 30px;

  }
`;

export {ContainerCard, Card, CardGame};