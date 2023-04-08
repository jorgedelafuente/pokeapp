import { StyledFooter } from "./Footer.styles";

const Footer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <StyledFooter>
      <img src="/images/poke-icon.png" alt="" />
      {children}
    </StyledFooter>
  );
};

export default Footer;
