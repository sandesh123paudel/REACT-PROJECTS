import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button
            text={"VIA SUPPORT CHAT"}
            icon={<MdMessage fontSize={"24px"} is />}
          />

          <Button text={"VIA CALL"} icon={<IoMdCall fontSize={"24px"} />} />
        </div>

        <Button
          isOutline={true}
          text={"VIA EMAIL FORM"}
          icon={<MdEmail fontSize={"24px"} />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">TEXT</label>
            <textarea type="text" name="text" id="" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button isOutline={false} text={"SUBMITT"} />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="images/service.svg" alt="Service" />
      </div>
    </section>
  );
};

export default ContactForm;
