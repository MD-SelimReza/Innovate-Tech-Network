import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;

    if (!/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter character."
      );
      return;
    }

    signIn(email, password).then(() => {
      toast.success("Successfully Login");
      navigate(location?.state ? location.state : "/");
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
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered mb-3"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control relative justify-center items-end">
                <p>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-80"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
