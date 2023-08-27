import React, { useState } from 'react';

const SignInUpForm = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
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
                {
                    !isSignInForm && (
                        <input
                            className="p-4 my-4 w-full bg-gray-700"
                            type="text"
                            placeholder="Full Name"
                        />
                    )
                }
                <input
                    className="p-4 my-4 w-full bg-gray-700"
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    className="p-4 my-4 w-full bg-gray-700"
                    type="password"
                    placeholder="Password"
                />
                <button
                    className="p-4 my-6 bg-red-600 w-full rounded-lg"
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