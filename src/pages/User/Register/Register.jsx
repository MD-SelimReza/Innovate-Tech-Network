import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");

    if (!/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter character."
      );
      return;
    }

    createUser(email, password, name, photo).then(() => {
      toast.success("Successfully Login");
      e.target.reset();
      navigate(location?.state ? location.state : "/");
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>InnovativeTechNetwork / Register page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="hero-content">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body w-96">
            <h2 className="text-3xl font-bold mb-5">Create an account</h2>
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
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
            <div className="form-control">
              <label>
                <input type="checkbox" required /> I agree with
                <Link> terms and conditions</Link>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Register</button>
            </div>
            <label className="label">
              <p>Already have an account?</p>
              <Link to="/login" className="text-[#FC8902] font-bold">
                Login
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
