import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Nerflix</h1>
      <ul className={styles.menu}>
        <li className={styles.menu}>Inicio</li>
        <li>Series</li>
        <li>Peliculas</li>
        <li>Novedades</li>
        <li>Mi Lista</li>
      </ul>
    </nav>
  );
}

export default Navbar;
