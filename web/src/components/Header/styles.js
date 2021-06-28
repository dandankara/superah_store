import styled from 'styled-components'

const ContainerHeader = styled.div`
background-color: orange;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const Home = styled.button`
button{
  padding: 1rem;
  background:transparent;
  border:0;
}
`;

const Cart = styled.button`
margin: 0.5rem;
background:transparent;
border:0;
  img{
    width: 2.5rem;
  }
`;

const Search = styled.input`
  
`;

export { ContainerHeader, Home, Cart, Search };