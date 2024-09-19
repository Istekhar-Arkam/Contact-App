import React from "react";
import { CgProfile } from "react-icons/cg";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const ContactCard = () => {
  return (
    <div className="h-16 flex text-yellow-600 mx-2 my-4 items-center bg-yellow-200 rounded-lg px-2 justify-between">
      <div className="flex">
        <CgProfile className="text-3xl" />
        <p className="text-black font-semibold text-lg ml-2">Istekhar Arkam</p>
      </div>
      <div className="flex text-3xl">
        <TbEdit className="text-black" />
        <MdDelete />
      </div>
    </div>
  );
};

export default ContactCard;
