import React from 'react'
import styles from '@/app/styles/contact.module.css';
import { MdEmail, MdForum, MdVoiceChat } from 'react-icons/md'
import Link from 'next/link';

const ContactCard = () => {
  return (
   <>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.grid_card}>
              <i><MdEmail /></i>
              <h2>Email</h2>
              <p>Monday to Friday Expected</p>
              <p className={styles.last_para}>response time : 72 hours</p>
          <Link href={'/'}>
           Send Email <span>-&gt;</span>
          </Link>
            </div>
            <div className={styles.grid_card}>
              <i><MdVoiceChat /></i>
              <h2>Live Chat</h2>
              <p>Weekdays : 9 Am - 6 Am ET</p>
              <p className={styles.last_para}>Weekdays : 9 Am - 6 Am ET</p>
          <Link href={'/'}>
           Send Email <span>-&gt;</span>
          </Link>
            </div>
            <div className={styles.grid_card}>
              <i><MdForum /></i>
              <h2>Community Forum</h2>
              <p>Monday to Friday Expected</p>
              <p className={styles.last_para}>response time : 72 hours</p>
          <Link href={'/'} className={styles.anchorLink}>
            Ask The community <span>-&gt;</span>
          </Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default ContactCard
