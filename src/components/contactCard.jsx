import React from "react";
import { CgProfile } from "react-icons/cg";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import AddAndUpdate from "./addAndUpdate";
import UseDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = UseDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div key={contact.id}>
        <div className="flex justify-between items-center h-16 text-yellow-600 my-4 bg-yellow-200 rounded-lg px-2 ">
          <CgProfile className="text-3xl" />
          <div className="flex flex-col">
            <p className="text-black font-semibold text-lg">{contact.name}</p>
            <p className="text-black font-medium">{contact.number}</p>
          </div>
          <div className="flex text-3xl">
            <TbEdit onClick={onOpen} className="text-black cursor-pointer" />
            <MdDelete
              className="cursor-pointer"
              onClick={() => deleteContact(contact.id)}
            />
          </div>
        </div>
      </div>
      <AddAndUpdate contact={contact} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
