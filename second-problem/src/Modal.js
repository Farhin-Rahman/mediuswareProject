import React, { useState } from "react";
import Modal from "react-modal";
import { ContactAPI } from "./ContactAPI";

const ModalA = ({ onClose }) => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchContacts = async () => {
    const response = await ContactAPI.getContacts();
    setContacts(response.data);
  };

  React.useEffect(() => {
    fetchContacts();
  }, []);

  const handleSearch = async (event) => {
    setSearchQuery(event.target.value);
    const response = await ContactAPI.getContacts({ search: event.target.value });
    setContacts(response.data);
  };

  return (
    <Modal
      isOpen
      onRequestClose={onClose}
      contentLabel="Contacts Modal"
    >
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default ModalA;
import React, { useState } from "react";
import Modal from "react-modal";
import { ContactAPI } from "./ContactAPI";

const ModalB = ({ onClose }) => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchContacts = async () => {
    const response = await ContactAPI.getContacts({ country: "US" });
    setContacts(response.data);
  };

  React.useEffect(() => {
    fetchContacts();
  }, []);

  const handleSearch = async (event) => {
    setSearchQuery(event.target.value);
    const response = await ContactAPI.getContacts({
      search: event.target.value,
      country: "US",
    });
    setContacts(response.data);
  };

  return (
    <Modal
      isOpen
      onRequestClose={onClose}
      contentLabel="Contacts Modal"
    >
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default ModalB;