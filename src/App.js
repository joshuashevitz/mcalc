import React from "react";
import styled from "styled-components";
import {Button} from "reactstrap";

const TestBar = styled(Button) `
width: 50%;
margin: auto;
border: 5px solid black;
`;

const PageDiv = styled.div `
width:100%;

`;

const App = () => {
  return (
    <PageDiv className="App">
      <TestBar>Test</TestBar>
      <p>
        i have dirty underwear in my sock, and 
        kenai keeps biting it
      </p>
    </PageDiv>
  );
}

export default App;
