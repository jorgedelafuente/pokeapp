import { StyledButton } from "./Button.styled";

const Button = ({
  buttonText,
  onClick,
}: {
  buttonText: string;
  onClick: () => void;
}) => {
  return <StyledButton onClick={onClick}>{buttonText}</StyledButton>;
};

export default Button;
