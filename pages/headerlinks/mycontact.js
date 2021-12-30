import React from "react";
import styled from "styled-components";
import Contact from "../../src/components/contact/Contact";
import Header from "../../src/components/header/Header";

function mycontact() {
  return (
    <Container>
      <Header />
      <Contact />
    </Container>
  );
}

export default mycontact;

const Container = styled.div`
  background-color: #4071f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
