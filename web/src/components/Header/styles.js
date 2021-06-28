import styled from 'styled-components'

const ContainerHeader = styled.div`
background-color: orange;
display: flex;
flex-direction: row;
justify-content: space-between;
height: 60px;
`;

const HomeButton = styled.button`
size: 0.5rem;
padding:0.5rem;
background:transparent;
border: 0;
img{
  width: 2.5rem;
}
`;

const CarButton = styled.button`
size: 0.5rem;
padding:0.5rem;
background:transparent;
border: 0;
img{
  width: 2.5rem;
}
`;

const Search = styled.input`
margin: 0.5rem;
  width: 30rem;
  border-width: 0px;
  border-color: #f89500;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0px 0px 6px rgba(66,66,66,.80);
  text-shadow: 0px 0px 0px rgba(66,66,66,.100);
`;

export { ContainerHeader, HomeButton, CarButton, Search };