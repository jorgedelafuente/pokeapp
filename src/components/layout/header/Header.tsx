import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerImage}>
        <img loading="lazy" src="/images/poke-icon.png" />
      </div>
      <div>
        <div className={styles.headerLogo}>
          <img loading="lazy" src="/images/poke-logo.jpg" />
        </div>
        <h3>React, Redux-Toolkit, TypeScript, CSS Modules</h3>
      </div>
    </header>
  );
};

export default Header;
