import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [logOutMessage, setLogOutMessage] = useState(false);

  const handleLogOut = () => {
    logOut().then(() => setLogOutMessage(true));
  };

  if (logOutMessage) {
    alert("LogOut Successfully");
  }

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#FC8902]" : "hover:text-[#FC8902] opacity-75"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? "text-[#FC8902]" : "hover:text-[#FC8902] opacity-75"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="services"
        className={({ isActive }) =>
          isActive ? "text-[#FC8902]" : "hover:text-[#FC8902] opacity-75"
        }
      >
        Our Services
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          isActive ? "text-[#FC8902]" : "hover:text-[#FC8902] opacity-75"
        }
      >
        Contact Us
      </NavLink>
      {user && (
        <>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive ? "text-[#FC8902]" : "hover:text-[#FC8902] opacity-75"
            }
          >
            User Profile
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="navbar max-w-6xl bg-black text-white fixed top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl text-[#FC8902]">
          InnovateTechNetwork
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6 items-center">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            {user?.photoURL ? (
              <img src={user.photoURL} />
            ) : (
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            )}
          </div>
        </div>
        {user ? (
          <NavLink
            onClick={handleLogOut}
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline text-[#FC8902]"
                : "btn btn-outline text-white opacity-75"
            }
          >
            Log Out
          </NavLink>
        ) : (
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline text-[#FC8902]"
                : "btn btn-outline text-white opacity-75"
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
