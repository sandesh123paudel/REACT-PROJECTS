import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");
        const contactSnapshot = await getDocs(contactsRef);
        const contactList = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center">
          <FiSearch className="absolute ml-2 text-2xl text-white" />

          <input
            type="text"
            className="h-10 flex-grow rounded-md border bg-transparent pl-10 text-white"
          />
        </div>

        <AiFillPlusCircle className="cursor-pointer text-5xl text-white" />
      </div>
      <div>
        <div>
          {contacts.length === 1 ? (
            <EmptyCard />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

const ContactCard = ({ contact }) => (
  <div className="bg-yellow mt-4 flex h-[64px] items-center rounded-xl">
    <HiOutlineUserCircle className="ml-2 text-6xl text-red-500" />
    <div className="ml-3 text-black">
      <h2 className="text-xl font-medium">{contact.name}</h2>
      <p>{contact.email}</p>
    </div>
    <div className="ml-auto mr-4 flex gap-2">
      <RiEditCircleLine className="cursor-pointer text-3xl" />
      <IoMdTrash className="cursor-pointer text-3xl text-purple-700" />
    </div>
  </div>
);

const EmptyCard = () => (
  <div className="flex h-[60vh] items-center justify-center">
    <div className="flex items-center gap-5">
      <img src="/images/handcontact.png" alt="" />
      <div className="text-xl text-white">No Contact Found</div>
    </div>
  </div>
);
