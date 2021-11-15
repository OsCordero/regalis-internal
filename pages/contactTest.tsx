import React from "react";
<<<<<<< HEAD
import Contact from "../src/components/Contact/Contact"




export default function ContactTest() {

  
return (
  <> 
  <Contact />
</>
)
  
  
};
=======
import { useForm } from "react-hook-form";
import Head from "next/head";
import styles from "../src/styles/contact.module.css";
import Navbar from "../src/components/Navbar";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactTest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmitForm = (data: any) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Response succeeded!");
      }
    });

    reset();
  };

  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <br />
      <br />
      <br />
      <div>
        <div className={styles.center}>
          <h1>Contact us!</h1>
        </div>
        <br />

        <div className={styles.container}>
          <form className={styles.main} onSubmit={handleSubmit(onSubmitForm)}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "You must enter your Name",
                  minLength: {
                    value: 3,
                    message: "This name is too short",
                  },
                  maxLength: {
                    value: 30,
                    message: "This name is too long",
                  },
                })}
                placeholder="Your name"
                autoComplete="off"
                autoFocus
                name="name"
                className={styles.inputField}
              />
              <span className={styles.span}>{errors?.name?.message}</span>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email:
              </label>
              <input
                type="text"
                id="email"
                {...register("email", {
                  required: "You must input your email",
                  minLength: {
                    value: 6,
                    message: "This email is too short",
                  },
                  maxLength: {
                    value: 100,
                    message: "This email is too long",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="example@email.com"
                autoComplete="off"
                name="email"
                className={styles.inputField}
              />

              <span className={styles.span}>{errors?.email?.message}</span>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Message:
              </label>
              <textarea
                id="message"
                {...register("message", {
                  required: "You must input your message",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                  maxLength: {
                    value: 120,
                    message: "Message cannot be longer than 120 characters",
                  },
                })}
                placeholder="Example Message"
                autoComplete="off"
                minLength={20}
                name="message"
                className={styles.textArea}
              />
              <span className={styles.span}>{errors?.message?.message}</span>
            </div>

            <input type="submit" value="Send" className={styles.send} />
          </form>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e8697cb1ac47680b2bbe1b543fa72e46775d06f
