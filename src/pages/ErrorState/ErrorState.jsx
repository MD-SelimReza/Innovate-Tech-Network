import { useNavigate } from "react-router-dom";
import ErrorImage from "../../assets/404.jpg";

const ErrorState = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
      <div className="flex flex-col items-center max-w-sm mx-auto text-center">
        <p className="p-3 text-sm font-medium text-primary rounded-lg bg-secondary bg-opacity-30 ">
          <img src={ErrorImage} alt="" className="w-40" />
        </p>
        <h1 className="mt-3 text-2xl font-semibold  md:text-3xl">
          Something Went Wrong!
        </h1>
        <p className="mt-4 text-base-500 ">Here are some helpful links:</p>

        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
          <button
            onClick={() => navigate(-1 || "/")}
            className="flex bg-[#FC8902] items-center justify-center w-1/2 px-5 py-1 text-sm text-white hover:text-black transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto   hover:bg-gray-100 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>Go back</span>
          </button>

          <button onClick={() => navigate("/")} className="text-[#FC8902]">
            Take Me Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;