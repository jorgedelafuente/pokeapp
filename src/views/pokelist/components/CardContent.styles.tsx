import styled from "styled-components";

export const CardContentWrapper = styled.div`
  height: 300px;
  h2 {
    text-transform: capitalize;
    text-align: center;
    padding-bottom: 2rem;
    font-size: 2rem;
    margin: 0;
    color: red;
    -webkit-text-stroke: 1px black;
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
