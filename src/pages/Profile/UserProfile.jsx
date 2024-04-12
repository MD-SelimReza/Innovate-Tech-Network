import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import UpdateProfile from "./UpdateProfile";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card shrink-0 border h-80 w-full max-w-sm shadow-2xl bg-base-100">
          {" "}
          {user && (
            <div className="flex flex-col w-80 mx-auto justify-center items-center py-8">
              <img
                className="rounded-full size-24 mb-3"
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
                alt=""
              />
              <h3 className="text-3xl font-bold mb-2">
                {user.displayName ? user.displayName : "Unknown"}
              </h3>
              <p className="mb-2">
                <span className="font-bold">Email : </span> {user.email}
              </p>
              <p className="text-center">
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
