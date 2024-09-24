// import React, { useEffect, useState } from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";
import AddAndUpdate from "./addAndUpdate";

// import { collection } from "firebase/firestore";

const SearchSpace = () => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   const getContacts = async () => {
  //     try {
  //       const contactsRef = collection(db, "contacts");
  //       const contactsSnapshot = await getDocs(contactsRef);
  //       const contactList = contactsSnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.doc.data(),
  //         };
  //       });
  //       setContacts(contactList);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     y;
  //   };
  //   getContacts();
  // }, []);

  return (
    <>
      <div className="flex relative mx-3">
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
        {/* <div>
        {contacts.map((contact) => (
          <div key={contact.id}></div>
        ))}
      </div> */}
      </div>
      <AddAndUpdate onClose={onClose} isOpen={isOpen}/>
    </>
  );
};

export default SearchSpace;
