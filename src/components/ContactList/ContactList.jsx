import { Contact } from "/src/components";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.contactWrap}>
      <ul className={css.list}>
        {contacts.map((contact) => {
          return (
            <li className={css.item} key={contact.id}>
              <Contact contact={contact} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
