import styled from "styled-components";

export const PaginationBarContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CurrentPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 0.7rem;
  }
  div {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
