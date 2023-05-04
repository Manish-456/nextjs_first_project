"use client";
import React, { useState } from "react";
import styles from "@/app/styles/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
});

const ContactForm = () => {
  const [status, setStatus] = useState(null)
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
 async function handleSubmit(e) {
    e.preventDefault();
 try {
  const response = await fetch('/api/contact', {
    method : 'POST',
    headers : {"Content_Type" : "application/json"},
    body : JSON.stringify({...user})
  })
  // Set the stauts based on the response from the APi route
  if(response.status === 200){
    setUser({username : "", email : "", phone : "", message : ""})
   setStatus('success');
  }else{
    setStatus('error');
  }
 } catch (error) {
  setStatus('error')
 }

}

  return (
    <form onSubmit={handleSubmit} className={styles.contact_form}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name:
          <input
            placeholder="Enter your name"
            className={mulish.className}
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter your email:
          <input
            placeholder="Enter your email"
            className={mulish.className}
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Enter your email:
          <input
            placeholder="Enter your phone number"
            className={mulish.className}
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Enter your message:
          <textarea
            name="message"
            id="message"
            className={mulish.className}
            placeholder="Enter your message"
            rows="5"
            value={user.message}
            onChange={handleChange}
          ></textarea>
        </label>
      </div>
      <div>
      {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
