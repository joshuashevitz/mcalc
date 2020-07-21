import React from "react";
import styled from "styled-components";
import {Button} from "reactstrap";
import Layout from "./components/Layout";

const TestBar = styled(Button) `
width: 50%;
margin: auto;
border: 5px solid black;
`;

const PageDiv = styled.div `
width:100rem;
height: 100;
background-color: lightblue;
`;

const App = () => {
  return (
    <Layout>
    <PageDiv className="App">
      <TestBar>Test</TestBar>
      <p>
        i have dirty underwear in my sock, and 
        kenai keeps biting it
      </p>
    </PageDiv>
    </Layout>
  );
}

export default App;
