import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import ContactCard from "./components/ContactCard.jsx";
import EmptyCard from "./components/EmptyCard.jsx";

import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclose from "./hooks/useDisclose.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contact");

    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactList
        .filter((contact) => contact.name.toLowerCase()
        .includes(value.toLowerCase()));

      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <FiSearch className="absolute ml-2 text-2xl text-white" />

            <input
              onChange={filterContacts}
              type="text"
              className="h-10 flex-grow rounded-md border bg-transparent pl-10 text-white"
            />
          </div>

          <AiFillPlusCircle
            onClick={onOpen}
            className="cursor-pointer text-5xl text-white"
          />
        </div>
        <div>
          <div>
            {contacts.length === 0 ? (
              <EmptyCard />
            ) : (
              contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
              ))
            )}
          </div>
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />

      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
