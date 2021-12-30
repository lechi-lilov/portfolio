import styled from "styled-components";

export const Container = styled.div`
  padding-top: 7rem;
  min-width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    color: white;
    font-size: 2.5rem;
    list-style-type: square;
  }
`;

export const Form = styled.form`
  box-shadow: 5px 10px 18px black;
  border-radius: 1rem;
  min-width: 100%;
  background-color: white;
  border: 1px solid white !important;

  h1 {
    text-align: center;
  }
  p {
    color: #bf1650;
  }

  ,
  p::before {
    display: inline;
    content: "⚠ ";
  }
  ,
  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: black;
    font-size: 14px;
    font-weight: 200;
  }
  ,
  input {
    display: block;
    box-sizing: border-box;
    width: 17vw;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;
    padding: 10px 15px 15px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  ,
  input:hover {
    border-bottom: 1px solid #4071f4;
  }
  ,
  input:focus {
    outline: none;
  }
`;
export const Namefield = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 15px 15px;
`;
export const Name = styled.div``;
export const Surname = styled.div``;

export const Email = styled.div`
  input {
    width: 100%;
  }
  ,
  textarea {
    width: 100%;
    border-radius: 1rem;
    padding: 10px 15px 15px 15px;
  }
  textarea:focus {
    outline: none;
  }
`;
export const Button = styled.div`
  button {
    background: #4071f4;
    color: white;
    text-transform: uppercase;
    border: 1px solid #4071f4;
    border-radius:4rem;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
    width:100%;
    transition: 0.3s;
  }
  button:hover {
    background:white;
    border: 1px solid #4071f4;
    color:#4071f4;
    cursor:pointer;
  }
  ,
 
`;
