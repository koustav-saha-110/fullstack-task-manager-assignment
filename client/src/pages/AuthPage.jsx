import React, { useEffect, useState } from 'react';

// Importing Components
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const AuthPage = () => {

    // States
    const [currentPage, setCurrentPage] = useState(true);

    // Handlers
    const toggleCurrentPage = () => {
        setCurrentPage(prev => !prev);
    }

    // Cleanup function
    useEffect(() => {
        return () => {
            setCurrentPage(true);
        }
    }, []);

    return (
        <React.Fragment>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4 from-blue-100 to-purple-200">
                <div className="bg-white shadow-2xl rounded-2xl px-8 py-10 w-full max-w-md flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-6 text-purple-700">
                        {currentPage ? "Welcome Back!" : "Create an Account"}
                    </h2>

                    {
                        currentPage ? <LoginForm /> : <SignUpForm />
                    }

                    <div className="mt-6 text-gray-600 text-sm">
                        {
                            currentPage ? (
                                <span>
                                    Don&apos;t have an account?{" "}
                                    <button className="text-purple-600 hover:underline font-medium" onClick={toggleCurrentPage}>
                                        Sign up
                                    </button>
                                </span>
                            ) : (
                                <span>
                                    Already have an account?{" "}
                                    <button className="text-purple-600 hover:underline font-medium" onClick={toggleCurrentPage}>
                                        Log in
                                    </button>
                                </span>
                            )
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default AuthPage;
