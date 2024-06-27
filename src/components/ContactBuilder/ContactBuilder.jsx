import { ContactForm, SearchBox, ContactList } from "/src/components";
import contactData from "../../data/contacts.json";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const ContactBuilder = () => {
  const [contacts, setContact] = useLocalStorage("contacts", contactData);
  const [search, setSearch] = useState("");

  const addContact = (newContact) => {
    setContact((prev) => {
      return [...prev, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContact((prev) => {
      return prev.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onContact={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </>
  );
};
