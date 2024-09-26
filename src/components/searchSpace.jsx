import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";
import AddAndUpdate from "./addAndUpdate";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import ContactCard from "./contactCard";
import UseDisclouse from "../hooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchSpace = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = UseDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);

        // code to refresh page

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists();
        });
        
      } catch (error) {
        console.log(error);
      };
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactsLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactsLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts();
    });
  };

  return (
    <>
      <div className="flex relative mx-3 flex-col">
        <div className="flex items-center gap-1">
          <FiSearch className="text-white text-2xl absolute ml-2" />
          <input
          onChange={filterContacts}
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
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdate onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default SearchSpace;
