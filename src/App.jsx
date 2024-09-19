import React from "react";
import Navbar from "./components/navbar";
import SearchSpace from "./components/searchSpace";
import ContactCard from "./components/contactCard";
function App() {
  return (
    <div className="max-w-sm mx-auto">
      <Navbar />
      <SearchSpace />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
}

export default App;
