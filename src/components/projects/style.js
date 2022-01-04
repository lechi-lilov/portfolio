import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  min-height: 100%;
  color: white;
  margin: 10rem 0 5rem 0;
  h1 {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Headline = styled.ul`
  color: black;
  font-size: 2.5rem;
  list-style-type: square;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1rem;
  }
`;
export const Cart = styled.div`
  width: 100%;
  background-color: #4071f4;
  box-shadow: 5px 10px 18px black;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  a {
  }
  a:hover {
  }
`;
export const CartHeadline = styled.div`
  display: flex;
  justify-content: left;
`;
export const Right = styled.div`
  width: 50%;
`;
