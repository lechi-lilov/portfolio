import React from "react";
import styled from "styled-components";
import Header from "../../src/components/header/Header";
import Resume from "../../src/components/resume/Resume";

function myresume() {
  return (
    <Container>
      <Header />
      <Resume />
    </Container>
  );
}

export default myresume;

const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
