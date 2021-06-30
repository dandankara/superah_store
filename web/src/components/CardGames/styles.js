import styled from 'styled-components';

const ContainerCard = styled.div`
display: grid;
padding: 1rem;
justify-content: center;
grid-template-columns: 400px 400px 400px;
/* grid-auto-flow: column; */
`;

const CardGame = styled.div`
  margin: 0.5rem;
  flex-grow: 1;
  border: 1px solid;
  background-color: aliceblue;
  padding: 0ch.5rem;
  
  display: flex;
  flex-direction: column;
  
  

  span:first-child{
    font-size: 1.7rem;
    font-weight: 800;
    align-self: center;
  }
  span{
    font-size: 1.5rem;
    font-weight: bold;
    align-self: center;
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
    align-self: center;
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
    align-self: center;
  }
`;

export { ContainerCard, CardGame };