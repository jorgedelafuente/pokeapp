import { StyledLayout } from "./Layout.styled";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
