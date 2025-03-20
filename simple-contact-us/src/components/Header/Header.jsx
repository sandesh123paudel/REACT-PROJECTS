import React from "react";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img src="images/logo1.jpg" alt="" />
      </div>
      <nav className={css.nav}>
        <ul>
          <li>HOME </li>
          <li>ABOUT </li>
          <li>CONTACT </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
