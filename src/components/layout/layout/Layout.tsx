import styles from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
