import styles from "./navbar.module.css";
import { useState } from "react";

function NavBar() {
  const navBarItems = ["Home", "Find job", "Companies", "News"];
  const [selectedItem, setSelectedItem] = useState("Home");

  return (
    <div className={styles.navbarRoot}>
      <h1 className={styles.logo} onClick={() => setSelectedItem("Home")}>
        GetJob
      </h1>
      <nav className={styles.navbarItems}>
        {navBarItems.map((item) => (
          <button
            className={
              selectedItem === item ? styles.navItemSelected : styles.navItem
            }
            key={item}
            onClick={() => setSelectedItem(item)}
          >
            <span>{item}</span>
          </button>
        ))}
      </nav>
      <h3 className={styles.login}>Login</h3>
    </div>
  );
}

export default NavBar;
