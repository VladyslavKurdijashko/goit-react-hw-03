import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
    const validationSchema = Yup.object({
      name: Yup.string()
        .min(3, "Min 3 characters")
        .max(50, "Max 50 characters")
        .required("Required"),
      number: Yup.string()
        .min(3, "Min 3 characters")
        .max(50, "Max 50 characters")
        .required("Required"),
    });
  
    return (
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit({ id: nanoid(), ...values });
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <Field name="name" type="text" className={styles.input} />
            <ErrorMessage name="name" component="div" className={styles.error} />
  
            <label htmlFor="number" className={styles.label}>
              Number
            </label>
            <Field name="number" type="text" className={styles.input} />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
  
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.button}
            >
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    );
  };
  
  export default ContactForm;
