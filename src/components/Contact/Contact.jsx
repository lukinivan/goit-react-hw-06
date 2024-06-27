import css from "./Contact.module.css";
import { BiSolidPhone } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <div className={css.detailsWrap}>
        <p>
          <IoPerson />
          {" " + name}
        </p>
        <p>
          <BiSolidPhone />
          {" " + number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};
