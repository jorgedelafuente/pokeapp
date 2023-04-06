import { StyledFooter } from "./Footer.styles";

const Footer = ({ children }: { children?: React.ReactNode }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;
