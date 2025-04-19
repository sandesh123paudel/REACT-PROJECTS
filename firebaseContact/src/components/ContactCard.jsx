import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const ContactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      console.log("Deleting ID:", id); // debug
      await deleteDoc(doc(db, "contact", id));
      console.log("Contact deleted!");
    } catch (error) {
      console.error("Failed to delete contact:", error);
    }
  };

  return (
    <div className="mt-4 flex h-[64px] items-center rounded-xl bg-yellow px-2">
      <div className="flex-shrink-0">
        <HiOutlineUserCircle className="text-5xl text-orange" />
      </div>

      <div className="ml-3 flex-grow overflow-hidden text-black">
        <h2 className="text-md truncate font-semibold">{contact.name}</h2>
        <p className="truncate">{contact.email}</p>
      </div>

      <div className="ml-2 flex-shrink-0 text-3xl">
        <div className="flex cursor-pointer gap-2">
          <RiEditCircleLine />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-purple-600"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
