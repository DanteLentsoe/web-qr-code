import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} style={{ bottom: 0, height: 30 }}>
      <a
        href="https://dantelentsoe.com"
        target="_blank"
        rel="noopener noreferrer">
        Developed By{" "}
        <span>
          {/* <Image src="" alt="Dante Lentsoe Website" width={79} height={18} /> */}
          {"   "}
          Dante Lentsoe
        </span>
      </a>
    </footer>
  );
};

export default Footer;
