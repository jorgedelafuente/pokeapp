import styles from "./Card.module.css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <article className={styles.card}>{children}</article>;
};

export default Card;
