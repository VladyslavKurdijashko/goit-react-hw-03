import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => (
    <li className={styles.item}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelete(id)} className={styles.button}>
        Delete
      </button>
    </li>
  );
  
  export default Contact;
  
