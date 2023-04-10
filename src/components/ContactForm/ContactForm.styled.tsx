import styled from "@emotion/styled";
import { Field, ErrorMessage } from "formik";

export const Wrapper = styled.div`
  display: block;
  width: 300px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #d8e0ea;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  width: 100%;
  :nth-of-type(2) {
    margin-top: 8px;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Input = styled(Field)`
  width: 100%;
  margin-top: 5px;
  margin-left: 10px;
  padding-left: 10px;
  border: 1px solid #d8e0ea;
  border-radius: 5px;
  outline: none;
  :hover,
  :focus {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 25px;
  margin-top: 10px;

  border-radius: 5px;
  border: 1px solid #d8e0ea;
  background-color: #b8b6beab;

  cursor: pointer;
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-size: 10px;
`;
