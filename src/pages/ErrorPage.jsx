import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 px-6 bg-white">
            <div className="text-center max-w-lg">

                <h1 className="text-8xl font-extrabold text-gray-800 mb-4">
                    404
                </h1>

                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mb-6">
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition"
                >
                    Go Back Home
                </Link>

            </div>
        </div>
        </>
    );
};

export default ErrorPage;