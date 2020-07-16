import React from "react";
import styled from "styled-components";
import {Button, Navbar} from "reactstrap";
import './App.css';

const TestBar = styled(Button) `
width: 50%;

border: 5px solid red;
`;


const App = () => {
  return (
    <div className="App">
      <Navbar>my mcalc</Navbar>
      <TestBar>Test</TestBar>
      <p>
        i have dirty underwear in my sock, and 
        kenai keeps biting it
      </p>
    </div>
  );
}

export default App;
