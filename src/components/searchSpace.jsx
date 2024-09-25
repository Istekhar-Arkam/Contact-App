import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";
import AddAndUpdate from "./addAndUpdate";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { CgProfile } from "react-icons/cg";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const SearchSpace = () => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="flex relative mx-3 flex-col">
        <div className="flex items-center gap-1">
          <FiSearch className="text-white text-2xl absolute ml-2" />
          <input
            type="text"
            className="bg-transparent border-2 border-white flex-grow rounded-md h-10 text-white text-xl font-semibold px-10 w-3/4"
          />
          <IoMdAddCircle
            onClick={onOpen}
            className="text-white text-4xl cursor-pointer"
          />
        </div>
        <div>
          {contacts.map((contact) => (
            <div key={contact.id}>
              <div className="flex items-center justify-between h-16 text-yellow-600 my-4 bg-yellow-200 rounded-lg px-2 ">
                <CgProfile className="text-3xl" />
                <div className="flex flex-col mr-10">
                  <p className="text-black font-semibold text-lg">
                    {contact.name}
                  </p>
                  <p className="text-black font-medium">{contact.number}</p>
                </div>
                <div className="flex text-3xl">
                  <TbEdit className="text-black" />
                  <MdDelete />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddAndUpdate onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default SearchSpace;
