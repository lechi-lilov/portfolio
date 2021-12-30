import React from "react";
import styled from "styled-components";
import Header from "../../src/components/header/Header";
import Projects from "../../src/components/projects/Projects";

function myprojects() {
  return (
    <Container>
      <Header />
      <Projects />
    </Container>
  );
}

export default myprojects;

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
