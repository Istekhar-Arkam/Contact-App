import React from "react";
import { CgProfile } from "react-icons/cg";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { db } from "../config/firebase"
import { deleteDoc, doc } from "firebase/firestore"

const ContactCard = ({ contact }) => {

const deleteContact=async(id)=>{
try {
  await deleteDoc(doc(db,"contacts",id));

} catch (error) {
  console.log(error);
}
}

  return (
    <div key={contact.id}>
      <div className="flex items-center justify-between h-16 text-yellow-600 my-4 bg-yellow-200 rounded-lg px-2 ">
        <CgProfile className="text-3xl" />
        <div className="flex flex-col mr-10">
          <p className="text-black font-semibold text-lg">{contact.name}</p>
          <p className="text-black font-medium">{contact.number}</p>
        </div>
        <div className="flex text-3xl">
          <TbEdit className="text-black" />
          <MdDelete onClick={()=>deleteContact(contact.id)}/>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
