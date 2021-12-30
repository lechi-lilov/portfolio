import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(90deg, #4071f4 33%, white 33%);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 4rem;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 23%;
  min-height: 55%;
  margin: 0 0 5rem 10rem;
  padding: 2rem;
  color: white;
  background: #4071f4;
  border: 1px solid #4071f4;
  box-shadow: 5px 10px 18px black;
  h1 {
    text-align: center;
    font-weight: 300;
  }
  h1:nth-child(2) {
    line-height: 3.8rem;
    border-bottom: 2px solid white;
    transition: 0.5s;
  }
  h1:nth-child(2):hover {
    border-bottom: 2px solid #4071f4;
  }
`;

export const Img = styled.div`
  width: 15rem;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  font-size: 2.5rem;
  font-weight: 600;

  @keyframes slide {
    100% {
      top: -110px;
    }
  }
  span {
    position: relative;
  }
  span::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: white;
    border-left: 2px solid white;
    animation: typing 2.5s steps(200) infinite;
  }

  @keyframes typing {
    100% {
      left: 100%;
      margin: 0 -35px 0 35px;
    }
  }
`;

export const Statictxt = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
`;
export const Dynamictxt = styled.div`
  margin-left: 1rem;
  height: 3.5rem;
  line-height: 3.5rem;
  overflow: hidden;

  li {
    list-style-type: none;
    color: #4071f4;
    position: relative;
    top: 0;
    animation: slide 5s steps(2) infinite;
  }
`;

export const Right = styled.div`
  color: black;
  min-width: 20%;
  min-height: 40%;
  margin: 0 10rem 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p:nth-child(1) {
    font-size: 4rem;
    font-weight: 700;
  }
  p {
    font-size: 1.3rem;
  }
`;
export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Option1 = styled.div`
  button {
    color: white;
    background-color: #4071f4;
    border-radius: 2rem;
    width: 15rem;
    height: 3rem;
    border: none;
    font-size: 1.3rem;
    transition: 0.3s;
  }
  button:hover {
    cursor: pointer;
    color: #4071f4;
    background-color: white;
    border: 1px solid #4071f4;
  }
`;
export const Option2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    border-bottom: 1px solid white;
    transition: 0.3s;
  }
  a:nth-child(1) {
    margin-right: 2rem;
  }
  a:hover {
    border-bottom: 1px solid #4071f4;
  }
`;
