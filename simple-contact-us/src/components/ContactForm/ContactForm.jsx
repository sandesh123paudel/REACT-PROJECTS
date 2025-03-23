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


        <form action="">
          <input type="text" name="" id="" />

        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="images/service.svg" alt="Service" />
      </div>
    </section>
  );
};

export default ContactForm;
