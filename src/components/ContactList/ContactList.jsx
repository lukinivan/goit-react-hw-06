import css from "./ContactList.module.css";
import { Contact } from "/src/components";
import { selectContact } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contactWrap}>
      <ul className={css.list}>
        {visibleContacts.map((contact) => {
          return (
            <li className={css.item} key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
