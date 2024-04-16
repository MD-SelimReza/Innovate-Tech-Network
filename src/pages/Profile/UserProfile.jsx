import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import UpdateProfile from "./UpdateProfile";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="hero min-h-screen bg-base-200 py-20">
      <Helmet>
        <title>InnovativeTechNetwork / User Profile</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="hero-content lg:flex-row flex-col">
        <div className="card shrink-0 border h-80 w-full max-w-sm shadow-2xl bg-base-100">
          {" "}
          {user && (
            <div className="flex flex-col w-80 mx-auto justify-center items-center py-8">
              <div className=" hover:scale-110 duration-1000">
                <img
                  title={user.displayName ? user.displayName : "Unknown"}
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  className="rounded-full border size-24 mb-3"
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                  alt=""
                />
              </div>
              <h3
                data-aos="fade-down"
                data-aos-delay="800"
                className="text-3xl font-bold mb-2"
              >
                {user.displayName ? user.displayName : "Unknown"}
              </h3>
              <p data-aos="fade-down" data-aos-delay="1000" className="mb-2">
                <span className="font-bold">Email : </span> {user.email}
              </p>
              <p
                data-aos="fade-down"
                data-aos-delay="1200"
                className="text-center break-all"
              >
                <span className="font-bold">Photo URL : </span>
                {user.photoURL
                  ? user.photoURL
                  : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
              </p>
            </div>
          )}
        </div>
        <div className="card shrink-0 border h-80 w-full max-w-sm shadow-2xl bg-base-100">
          <UpdateProfile />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
