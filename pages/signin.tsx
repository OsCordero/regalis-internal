import Link from "next/link";
import { useMoralis } from "react-moralis";
import SignInForm from "../src/components/SignInForm/SignInForm";
import SignupForm from "../src/components/SignupForm/SignupForm";

const SignIn = () => {
  const {
    authenticate,
    isAuthenticated,
    logout,
    isAuthenticating,
    authError,
    signup,
  } = useMoralis();
  return (
    <div>
      <div>
        <h1>Christmas gifts season</h1>

        {isAuthenticated ? (
          <>
            <p>You are logged in</p>
            <button onClick={() => logout()}>Logout</button>
          </>
        ) : (
          <>
            <p>You are not logged in</p>
            {isAuthenticating ? <p>Loading...</p> : null}
            {authError && <p>{authError.message}</p>}
            <button onClick={() => authenticate()}>Authenticate</button>
          </>
        )}

        <h2>Or login with credentials:</h2>
        <SignInForm />

        <h2>dont have an account?</h2>
        <SignupForm />

        <Link href="/contactTest">Questions</Link>
      </div>
    </div>
  );
};

export default SignIn;
