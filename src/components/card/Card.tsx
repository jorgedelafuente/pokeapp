import { StyledCard } from "./Card.styles";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
