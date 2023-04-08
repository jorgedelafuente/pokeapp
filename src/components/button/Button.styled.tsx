import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: white;
  padding: 0.75rem;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  border: 2px solid black;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 2px 2px 8px red;
  }

  &:active {
    transform: translateY(1px);
  }

  &:not(:disabled):active {
    transform: translateY(1px);
  }
`;
