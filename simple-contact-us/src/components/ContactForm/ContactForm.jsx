import React, { useRef } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactForm = ({ onSubmit }) => {
  const nameElement = useRef();
  const emailElement = useRef();
  const textElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameElement.current.value;
    const email = emailElement.current.value;
    const text = textElement.current.value;

    if (!name || !email || !text) {
      alert("Please enter all form datas.");
      return;
    }

    onSubmit(name, email, text);

    nameElement.current.value = "";
    emailElement.current.value = "";
    textElement.current.value = "";
  };

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

        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input ref={nameElement} type="text" name="name" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input ref={emailElement} type="email" name="email" id="" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">TEXT</label>
            <textarea
              ref={textElement}
              type="text"
              name="text"
              id=""
              rows="8"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button isOutline={false} text={"SUBMITT"} />
          </div>
        </form>

        <label htmlFor="name">Name</label>
        <input ref={nameElement} type="text" name="name" id="" />
      </div>
      <div className={styles.contact_image}>
        <img src="images/service.svg" alt="Service" />
      </div>
    </section>
  );
};

export default ContactForm;
