import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setLoginError("");
    setLoginSuccess("");

    if (!/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/.test(password)) {
      setLoginError(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter character."
      );
      return;
    }

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setLoginSuccess("Successfully login");
        e.target.reset();
        navigate("/");
      })
      .then((error) => {
        console.log(error);
        // setLoginError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>InnovativeTechNetwork / Login page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="hero-content">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body w-96">
            <h2 className="text-3xl font-bold mb-5">Sign into your account</h2>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="input input-bordered mb-3"
                  required
                />
              </div>
              <div className="form-control relative justify-center items-end">
                <p>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-80"
                    required
                  />
                </p>
                <p
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4"
                >
                  {showPassword ? (
                    <FaEye className="size-5" />
                  ) : (
                    <FaEyeSlash className="size-5" />
                  )}
                </p>
              </div>
              <div className="form-control mt-3">
                <SocialLogin />
              </div>
            </form>
            <label className="label">
              <p>Do not have an account?</p>
              <Link to="/register" className="text-[#FC8902] font-bold">
                Register
              </Link>
            </label>
            {loginError && <p className="text-red-700">{loginError}</p>}
            {loginSuccess && <p className="text-blue-600">{loginSuccess}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
