import styled from "styled-components";

export const Container = styled.div`
  color: black;
  width: 100%;
  padding-top: 7rem;
`;

export const Mid = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 5rem;
  h1:nth-child(1) {
    margin-bottom: 6rem;
    border-bottom: 1px solid #4071f4;
    text-align: center;
  }
`;
export const Headline = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 3rem 2rem;
  p {
    border-bottom: 1px solid white
    line-height: 2rem;
    font-weight:bold;
  }
`;
export const Button = styled.div`
  a {
    width: 10rem;
    height: 2rem;
    color: white;
    background-color: #4071f4;
    border-radius: 2rem;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a:hover {
    cursor: pointer;
    background-color: white;
    color: #4071f4;
    border: 1px solid #4071f4;
    border-radius: 2rem;
  }
`;

export const Info = styled.div`
  margin: 1rem 0;
  width: 100%;
  min-height: 8rem;
  padding: 1.5rem 3rem;
  background-color: #4071f4;
  box-shadow: 5px 10px 18px black;
  color: white;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: left;
    color: #daa520;
  }
  h4 {
    font-weight: normal;
  }
  p {
    margin: 0.5rem 0;
  }
  ,
  ul {
    margin: 0 0 0 2rem;
  }
`;

export const Headline2 = styled.div`
  width: 100%;
  margin: 5rem 0 3rem 2rem;
  p {
    line-height: 2rem;
    display: inline-block;
    font-weight: bold;
  }
`;
export const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: #4071f4;
  margin-top: 15rem;
  color: white;
  border-top: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  a {
    cursor: pointer;
  }
`;
export const Mail = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Option1 = styled.div`
  margin: 0 2rem 0 0;
  p {
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  a {
    transition: 0.3s;
    border-bottom: 1px solid #4071f4;
  }
  a:hover {
    border-bottom: 1px solid white;
  }
`;
export const Option2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4rem;
  p {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;
export const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    border-bottom: 1px solid #4071f4;
    transition: 0.2s;
  }
  a:hover {
    border-bottom: 1px solid white;
  }
`;
