import React from "react";
import { useForm } from "react-hook-form";
import { useMoralis } from "react-moralis";

const SignupForm = () => {
  const { register, handleSubmit } = useForm();
  const { signup } = useMoralis();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    signup(data.username, data.password, data.email);
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" {...register("username")} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
