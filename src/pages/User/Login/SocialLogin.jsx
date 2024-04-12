import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignIn, githubLogIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";

  const handleSocialLogIn = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };

  return (
    <>
      <button className="btn btn-primary">Login</button>
      <p className="text-center my-3">or</p>
      <button
        onClick={() => handleSocialLogIn(googleSignIn)}
        className="btn btn-outline mb-3"
      >
        <FaGoogle />
        Login with Google
      </button>
      <button
        onClick={() => handleSocialLogIn(githubLogIn)}
        className="btn btn-primary"
      >
        <FaFacebook />
        Login with Facebook
      </button>
    </>
  );
};

export default SocialLogin;
