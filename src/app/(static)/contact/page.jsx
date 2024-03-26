import Button from "@/app/ui/Button/Button";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nameSection}>
        <p className={styles.label}>First Name</p>
        <input type="text" className={styles.textField} />
      </div>
      <div className={styles.emailSection}>
        <p className={styles.label}>Email</p>
        <input type="text" className={styles.textField} />
      </div>
      <div className={styles.messageSection}>
        <p className={styles.label}>Message</p>

        <textarea className={styles.textArea} rows="6" cols="50"></textarea>
      </div>
      <div className={styles.submit}>
        <button className={styles.submitButton}>Send</button>
      </div>
    </div>
  );
};

export default Contact;
