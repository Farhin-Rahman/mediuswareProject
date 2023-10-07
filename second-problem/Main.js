import React, { useState } from "react";
import ModalA from "./ModalA";
import ModalB from "./ModalB";
import { ContactAPI } from "./ContactAPI";

const Main = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState("all");
  const [onlyEven, setOnlyEven] = useState(false);

  const handleModalOpen = (type) => {
    setModalIsOpen(true);
    setModalType(type);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleCheckboxChange = (event) => {
    setOnlyEven(event.target.checked);
  };

  const getContacts = async () => {
    const response = await ContactAPI.getContacts({
      page: 1,
      onlyEven,
    });
    return response.data;
  };

  return (
    <div>
      <button
        style={{
          color: modalType === "all" ? "#46139f" : "black",
        }}
        onClick={() => handleModalOpen("all")}
      >
        All Contacts
      </button>
      <button
        style={{
          color: modal