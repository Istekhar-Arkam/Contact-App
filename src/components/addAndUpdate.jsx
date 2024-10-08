import React from "react";
import Modal from "../components/modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("* Name is Required"),
  number: Yup.number().required("* Number is Required"),
});
const AddAndUpdate = ({ isOpen, onClose, contact, isUpdate }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await UpdateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            contact
              ? {
                  name: contact.name,
                  number: contact.number,
                }
              : {
                  name: "",
                  number: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? UpdateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 font-semibold">
              <label htmlFor="name">Name</label>
              <Field
                type="name"
                name="name"
                className="border-2 border-black h-10 px-2"
              />
              <div className="text-red-500 text-sm font-semibold">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1 font-semibold">
              <label htmlFor="number">Number</label>
              <Field
                type="number"
                name="number"
                className="border-2 border-black h-10 px-2"
              />
              <div className="text-red-500 text-sm font-semibold">
                <ErrorMessage name="number" />
              </div>
            </div>
            <button className="bg-orange border-1 px-8 py-1.5 self-end rounded-lg text-lg font-semibold" typeof="button">
              Save
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
