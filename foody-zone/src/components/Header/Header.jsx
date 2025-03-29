import React from "react";
import styles from "./Header.module.css";
import NavItem from "../NavItem/NavItem";

const Header = () => {
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.upper}>
          <div className={styles.logo}>
            <h1>Foody Zone</h1>
          </div>
          <input type="text" name="" id="" placeholder="Search Food" />
        </div>

        <div className={styles.lower}>
          <NavItem title={"All"} />
          <NavItem title={"Breakfast"} />
          <NavItem title={"Lunch"} />
          <NavItem title={"Dinner"} />
        </div>
      </nav>
    </>
  );
};

export default Header;
