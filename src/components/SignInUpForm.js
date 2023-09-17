import React, { useRef, useState } from "react";
import { validateUserData } from "../utils/validate";

// auth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import { USER_ICON } from "../utils/constants/constants";
import SpinnerIcon from "./Icons/SpinnerIcon";

const SignInUpForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const updateUserProfile = async (user) => {
    try {
      await updateProfile(user, {
        displayName: name.current.value,
        photoURL: USER_ICON,
      });
      const { uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(addUser({ uid, email, displayName, photoURL }));
      // will see
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const signUp = async () => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );

      const user = userCredential.user;
      updateUserProfile(user);
      setErrorMessage(null);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async () => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );

      const user = userCredential.user;
      setErrorMessage(null);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClick = (event) => {
    event.preventDefault();

    // Validation
    const { isValid, message } = validateUserData(
      email.current.value,
      password.current.value,
      name.current ? name.current.value : "",
      isSignInForm
    );

    if (!isValid) {
      setErrorMessage(message);
      return;
    } else {
      setErrorMessage(null);
    }

    // SignIn / SignUp
    if (isSignInForm) {
      signIn();
    } else {
      signUp();
    }
  };

  return (
    <div>
      <form className="absolute p-12 bg-black max-w-sm mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {errorMessage && (
          <p className="text-red-500 font-bold py-2 text-sm">{errorMessage}</p>
        )}
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
            ref={name}
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
          ref={email}
        />
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <button
          className="p-4 my-6 bg-red-500 hover:bg-red-600 w-full rounded-lg disabled:bg-red-400"
          onClick={handleButtonClick}
          disabled={isLoading}
        >
          <span className="flex justify-center items-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
            {isLoading && <SpinnerIcon height={24} width={24} />}
          </span>
        </button>
        <p className="py-4">
          {isSignInForm ? "New to Netflix?" : "Already an user?"}
          <span
            onClick={toggleForm}
            className="underline cursor-pointer select-none pl-2"
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignInUpForm;
