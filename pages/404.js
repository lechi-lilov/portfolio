import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <Container>
      <h1>Ooops...</h1>
      <h2>That page cannot be found</h2>
      <h2>You are being redirected to the home page</h2>
    </Container>
  );
}

export default NotFound;

const Container = styled.div`
  background-color: #353353;
  height: 100vh;
  color: White;
  display: Flex;
  flex-direction: column;
  justify-content: Center;
  align-items: center;
`;
