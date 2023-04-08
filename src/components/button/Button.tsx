import { StyledButton } from "./Button.styled";

const Button = ({
  buttonText,
  onClick,
  disabled,
}: {
  buttonText: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {buttonText}
    </StyledButton>
  );
};

export default Button;
