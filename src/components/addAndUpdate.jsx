import React from "react";
import Modal from "../components/modal";
import { Formik, Form, Field } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdate = ({ isOpen, onClose }) => {
  const AddAndUpdateContact = (contact) => {
    const addContact = async (contact) => {
      try {
        const contactRef = collection(db, "contacts");
        await addDoc(contactRef, contact);
      } catch (error) {
        console.log(error);
      }
    };
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: "",
            number: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            addContact(values)
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field
                type="name"
                name="name"
                className="border-2 border-black h-10 px-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="number">Number</label>
              <Field
                type="number"
                name="number"
                className="border-2 border-black h-10 px-2"
              />
            </div>
            <button className="bg-orange border-1 px-8 py-1.5 self-end rounded-lg text-lg font-semibold">
              Save
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
