import React from "react";
import useNotifications from "../../components/MoralisObject/Notifications";
import { useForm } from "react-hook-form";
import styles from "./NotificationForm.module.scss";

type FormValues = {
  email: string;
  phone: string;
};

export default function NotificationForm() {
  const { activate } = useNotifications();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmitForm = (data: any) => {
    console.log(data);
    activate(data.email, data.phone);

    reset();
  };
  return (
    <>
      <div className={styles.center} id="notifications">
        <h1 className="text-2xl center md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4">
          Want to get notifications?
        </h1>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmitForm)}>
        <input type="text" {...register("email")} />
        <input type="text" {...register("phone")} />
        <button className="mw-4" type="submit">
          Activate
        </button>
      </form> */}
      <br />
      <div className="shadow-2xl max-w-2xl mx-auto rounded-3xl ">
        <div>
          <div className="px-8 py-10 md:p-20">
            <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
              <div className={styles.inputDiv}>
                <label htmlFor="email">E-mail: </label>
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
                <br />
                <span className={styles.span}>{errors?.email?.message}</span>
              </div>

              <div className={styles.inputDiv}>
                <label htmlFor="phone">Phone: </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "You must input your phone number",
                    minLength: {
                      value: 8,
                      message: "This phone number is too short",
                    },
                    maxLength: {
                      value: 15,
                      message: "This phone number is too long",
                    },
                    pattern: {
                      value:
                        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
                      message: "This is an invalid phone number",
                    },
                  })}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full sm:w-96 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="e.g 999-999-9999"
                  autoComplete="off"
                  name="phone"
                />
                <br />
                <span className={styles.span}>{errors?.phone?.message}</span>
              </div>

              <br />
              <div className="max-w-3xl mx-auto">
                <div className={styles.centerbtn}>
                  <input
                    type="submit"
                    value="Activate Notifications"
                    className="btn text-white bg-purple-600 self-center hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
