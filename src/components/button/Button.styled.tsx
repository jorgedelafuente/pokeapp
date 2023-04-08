import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.75rem;
  transition: all 0.2s ease-in-out;
  /* border-radius: 10px; */
  /* border: 1px solid white; */

  &:active {
    transform: translateY(1px);
  }

  &:not(:disabled):active {
    transform: translateY(1px);
  }
`;
