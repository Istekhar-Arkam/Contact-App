import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ onClose, isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="relative z-50 m-auto min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <IoClose className="text-xl" onClick={onClose} />
            </div>
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 z-40 h-screen w-screen backdrop-blur"
          />
        </>
      )}
    </>
  );
};

export default Modal;
