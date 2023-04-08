import { StyledHeader } from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-image">
        <img loading="lazy" src="/images/poke-icon.png" alt="poke-icon" />
      </div>
      <div>
        <div className="header-logo">
          <img loading="lazy" src="/images/poke-logo.jpg" alt="poke-logo" />
        </div>
        <h3>React, Redux-Toolkit, TypeScript, Styled Components</h3>
      </div>
    </StyledHeader>
  );
};

export default Header;
