import Contact from "../Contact/Contact.jsx";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
  
  export default ContactList;
