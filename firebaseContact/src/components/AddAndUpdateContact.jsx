import React from "react";
import Modal from "../components/Modal";

const AddAndUpdateContact = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        Hi Hello
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
