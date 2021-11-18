import React from "react";
import { useForm } from "react-hook-form";
import { useMoralis } from "react-moralis";

const SignInForm = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useMoralis();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    login(data.username, data.password, data.email);
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" {...register("username")} />
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

export default SignInForm;
