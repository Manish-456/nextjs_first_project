import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "@/app/styles/contact.module.css";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to head <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76978.40570781073!2d87.5702040774799!3d26.59911551855424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1683182167292!5m2!1sen!2snp"
        width="600"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        className={styles.mapping}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default page;

// BsMUkn1xMZzYbJTf
