import styled from "styled-components";

export const StyledButton = styled.button`
  button {
    transition: all 0.2s ease-in-out;
  }

  button:active {
    transform: translateY(1px);
  }

  button:not(:disabled):active {
    transform: translateY(1px);
  }
`;
