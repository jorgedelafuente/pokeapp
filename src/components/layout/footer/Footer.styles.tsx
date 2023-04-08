import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: red;
  height: 60px;
  background-image: var(--primary-background-gradient);
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  img {
    height: 50px;
  }
  img:hover {
    transform: scale(1.25);
  }
`;
