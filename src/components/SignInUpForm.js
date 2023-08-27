import React, { useRef, useState } from 'react';
import { validateUserData } from '../utils/validate';

const SignInUpForm = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = (event) => {
        event.preventDefault();

        // Validation
        const { isValid, message } = validateUserData(
            email.current.value,
            password.current.value,
            name.current ? name.current.value : "",
            isSignInForm
        );

        console.log(email.current.value, password.current.value, message);

        if (!isValid) {
            setErrorMessage(message);
            return;
        } else {
            setErrorMessage(null);
        };
    };

    return (
        <div>
            <form
                className="absolute p-12 bg-black w-3/12 mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
            >
                <h1
                    className="font-bold text-3xl py-4"
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {errorMessage && (
                    <p className="text-red-500 font-bold py-2 text-sm">
                        {errorMessage}
                    </p>
                )}
                {
                    !isSignInForm && (
                        <input
                            className="p-4 my-4 w-full bg-gray-700"
                            type="text"
                            placeholder="Full Name"
                            ref={name}
                        />
                    )
                }
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
                    className="p-4 my-6 bg-red-600 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p
                    className="py-4"
                >
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