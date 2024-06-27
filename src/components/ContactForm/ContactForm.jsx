import css from "./ContactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";

export const ContactForm = ({ onContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onContact({ id: "id-" + nanoid(3), ...values });
    actions.resetForm();
  };

  const contactsSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short")
      .max(50, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(2, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactsSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.errorText} name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="text" name="number" id={numberFieldId} />
        <ErrorMessage
          className={css.errorText}
          name="number"
          component="span"
        />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
