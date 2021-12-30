import styled from "styled-components";

export const Container = styled.div`
  min-width: 40%;
  min-height: 100%;
  color: white;
  margin-top: 10rem;
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
export const CartHeadline = styled.div``;
export const Left = styled.div`
  width: 50%;
`;
export const Right = styled.div`
  width: 50%;
`;
