import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";

const SearchSpace = () => {
  return (
    <div className="flex relative">
      <div className="flex flex-grow items-center">
        <FiSearch className="text-white text-2xl absolute mx-2" />
        <input
          type="text"
          className="bg-transparent border-2 border-white flex-grow rounded-md h-10 text-white text-xl font-semibold px-10"
        />
        <IoMdAddCircle className="text-white text-4xl mx-1" />
      </div>
    </div>
  );
};

export default SearchSpace;
