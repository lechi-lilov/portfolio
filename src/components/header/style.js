import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  background-color: #4071f4;
  color: white;
  position: fixed;
  h1 {
    font-weight: 600;
  }
  span {
    font-weight: 100;
  }
  h1:hover {
    cursor: pointer;
  }
`;
export const Menu = styled.div`
  a {
    padding: 0.6rem;
    margin: 0.6rem;
    border-bottom: 1px solid #4071f4;
    transition: 0.2s;
  }
  a:hover {
    border-bottom: 1px solid white;
  }
`;
