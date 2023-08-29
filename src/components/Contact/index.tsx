import Image from "next/image";
import styles from "./contact.module.scss";
import {useState} from "react";

const Contact = () => {

  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    console.log(data);
    // setMessage(data.get("message"));
    
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
      } else {
        console.log("error");
      }
    };
    xhr.send(data);
  };
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.left}>
        <Image src="/assets/shake.svg" alt="" width={100} height={100} />
      </div>
      <div className={styles.right}>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit} method="POST">
          <input type="hidden" name="_subject" value="Contact request from personal website" />
          <input type="email" placeholder="Email" name="_replyto" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I&apos;ll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
