import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const Button = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
  svg:hover {
    fill: red;
  }
`;
