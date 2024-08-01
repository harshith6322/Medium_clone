import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4 animate-pulse">404</h1>
      <p className="text-xl mb-8 animate-bounce">Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-200 focus:outline-none"
      >
        Go Home
      </Link>
      <div className="mt-12">
        <svg
          className="w-64 h-64 text-gray-600 animate-spin"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a8.25 8.25 0 1 0 8.25 8.25A8.26 8.26 0 0 0 12 3.75zM1.5 12a10.5 10.5 0 1 1 10.5 10.5A10.51 10.51 0 0 1 1.5 12z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
