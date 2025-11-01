import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Nerflix</h1>
    </nav>
  );
}

export default Navbar;
