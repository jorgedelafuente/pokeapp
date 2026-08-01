import Pagination from "../../pagination/Pagination";
import styles from "./Footer.module.css";

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const Footer = ({ page, totalPages, onChange }: Props) => {
  return (
    <footer className={styles.footer}>
      <Pagination page={page} totalPages={totalPages} onChange={onChange} />
    </footer>
  );
};

export default Footer;
