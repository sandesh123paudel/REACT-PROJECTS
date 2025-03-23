import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}></div>
      <div className={styles.contact_image}>
        <img src="images/service.svg" alt="Service" />
      </div>
    </section>
  );
};

export default ContactForm;
