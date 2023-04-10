import styled from "@emotion/styled";

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #d8e0ea;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
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
