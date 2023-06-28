import React from 'react'
import styles from './page.module.css'
import Button from '../components/Button/Button'

function Contact() {
  return (
    <div className={styles.container}>Contact  
    <h1 className={styles.title}>Let's Keep in Touch</h1>
    <div className={styles.content}>

      <form className={styles.form}>
        <input type='text' placeholder='name' className={styles.input} />
        <input type='text' placeholder='email' className={styles.input} />
        <textarea
          className={styles.textArea}
          placeholder='message'
          cols='30'
          rows='10'
          ></textarea>
          <Button url="#" text="Send" />
      </form>
    </div>
    </div>
  )
}

export default Contact
