import React from "react";
import Modal from "../components/Modal";
import { Form, Formik, Field } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdateContact = ({ isOpen, onClose }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact=()=>{
    
  }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            addContact({ name: values.name, email: values.email });
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 rounded-md border p-2" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="h-10 rounded-md border p-2"
              />
            </div>

            <button
              type="submit"
              className="mt-6 self-end rounded-lg bg-yellow px-3 py-1"
            >
              Add Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
