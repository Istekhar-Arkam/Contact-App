import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";
import {} from "firebase/firestore";
const SearchSpace = () => {
  const [contacts, setContacts] = useState([]);


useEffect(()=>{
const getContacts=async()=>{};
try {
 const contactCollection=collection;  
    

} catch (error) {
    
}



getContacts();
},[]);

  return (
    <div className="flex relative mx-3">
      <div className="flex items-center gap-1">
        <FiSearch className="text-white text-2xl absolute ml-2" />
        <input
          type="text"
          className="bg-transparent border-2 border-white flex-grow rounded-md h-10 text-white text-xl font-semibold px-10 w-3/4"
        />
        <IoMdAddCircle className="text-white text-4xl" />
      </div>
    </div>
  );
};

export default SearchSpace;
