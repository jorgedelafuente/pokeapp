import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px;
  margin-bottom: 20px;
  background-image: var(--primary-background-gradient);
  display: flex;
  align-items: center;
  height: 140px;

  .header-image {
    width: 75px;
    height: 75px;
    margin-right: 50px;
  }

  .header-logo {
    border: 1px solid black;
    width: 140px;
  }
`;
