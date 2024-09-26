import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ onClose, isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute top-28 z-40 h-screen w-screen backdrop-blur sm:max-w-lg px-2">
          <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <IoClose className="text-xl" onClick={onClose} />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
