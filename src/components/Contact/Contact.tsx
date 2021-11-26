import React from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import styles from "./Contact.module.scss";
import Navbar from "../Navbar/Navbar";

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
    resetField,
  } = useForm<FormValues>();

  const onSubmitForm = (data: any) => {
    // e.preventDefault()
    console.log("Sending");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
      }
    });

    resetField("name");
    resetField("email");
    resetField("message");
  };

  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.center}>
        <h1 className="text-5xl center md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
          Contact us!
        </h1>
      </div>
      <br />
      <div className="shadow-2xl max-w-4xl mx-auto rounded-3xl ">
        <div>
          <div className="px-8 py-10 md:p-20 ">
            <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
              <br />
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name:</label>
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
                      value: 50,
                      message: "This name is too long",
                    },
                  })}
                  placeholder="Your name"
                  autoComplete="off"
                  autoFocus
                  name="name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full sm:w-96 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <span className={styles.span}>{errors?.name?.message}</span>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email:</label>
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
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full sm:w-96 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="example@email.com"
                  autoComplete="off"
                  name="email"
                />

                <span className={styles.span}>{errors?.email?.message}</span>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message:</label>
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
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <span className={styles.span}>{errors?.message?.message}</span>
              </div>
              <br />
              <div className="max-w-3xl mx-auto">
                <div className={styles.centerbtn}>
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn text-white bg-purple-600 self-center hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
