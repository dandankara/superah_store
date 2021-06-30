import styled from 'styled-components';

const ContainerCard = styled.div`
max-width: 100%;
display: flex;
flex-wrap: wrap;
padding: 2rem;
justify-content: center;
`;

const CardGame = styled.div`
  margin: 0.5rem;
  flex-grow: 1;
  border: 1px solid;
  background-color: aliceblue;
  
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  align-items: center;
  flex: 0 1 n;

  span:first-child{
    font-size: 2rem;
  }
  span:last-child{
  }

  button{
    margin-top: 0.5rem;
    box-shadow:inset 0px 1px 0px 0px #cf866c;
	  background:linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
	  background-color:#d0451b;
	  border-radius:3px;
	  border:1px solid #942911;
	  display:inline-block;
	  cursor:pointer;
	  color:#ffffff;
	  font-family:Arial;
	  font-size:15px;
	  font-weight:bold;
	  padding:6px 24px;
	  text-decoration:none;
	  text-shadow:0px 1px 0px #854629;
  }

  button:hover {
	background:linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
	background-color:#bc3315;
}
button:active {
	position:relative;
	top:1px;
}

  img{
    border: 1px solid;
  }
`;

export { ContainerCard, CardGame };