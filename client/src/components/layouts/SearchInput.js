import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f4f4f4;
  position: absolute;
  top: 50px;
  left: 0;
  border: 1px solid #e8e8e8;
  visibility: ${({ clicked }) => (clicked ? "visible" : "hidden")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonAbsolut = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  svg {
    font-size: 18px;
    color: lightgray;
    &:hover{
        color: grey;
    }
  }
`;

const FormContainer = styled.div`
  width: 700px;
`;
const Form = styled.form`
  width: 100%;
`;
const InputContainer = styled.div`
  width: 100%;
  border: 1px solid #e8e8e8;
  ::placeholder {
    letter-spacing: 1px;
    color: gray;
  }
`;
const Input = styled.input`
  border: none;
  width: 100%;
  padding: 10px;
  outline: none;
`;
export default function SearchInput({ clicked, toggleHandler }) {
  return (
    <Container clicked={clicked}>
      <ButtonAbsolut>
        <AiOutlineClose
          onClick={() => {
            toggleHandler();
          }}
        />
      </ButtonAbsolut>
      <FormContainer>
        <Form>
          <InputContainer>
            <Input type="text" placeholder="Search a product" />
          </InputContainer>
        </Form>
      </FormContainer>
    </Container>
  );
}
