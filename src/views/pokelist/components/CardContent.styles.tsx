import styled from "styled-components";

export const CardContentWrapper = styled.div`
  h2 {
    text-transform: capitalize;
    text-align: center;
    padding-bottom: 2rem;
  }

  img {
    background: var(--primary-background-gradient);
    clip-path: circle(50%);
    cursor: pointer;
  }

  img:hover {
    transform: scaleY(1.1);
  }
`;
