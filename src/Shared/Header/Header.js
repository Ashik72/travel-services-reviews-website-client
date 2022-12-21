import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

export default function Header() {
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="navbar bg-base-100 z-10 lg:px-16 bg-slate-800 text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                to="/services"
                className="text-base font-medium hover:text-slate-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-base font-medium hover:text-slate-400"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <span className="text-xl font-bold">
            Travel To <span className="text-red-600">Go.</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {user?.uid ? (
            <>
              <li>
                <Link
                  to="/services"
                  className="text-base font-medium  hover:text-slate-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-base font-medium  hover:text-slate-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/myreviews"
                  className="text-base font-medium  hover:text-slate-400"
                >
                  My Review
                </Link>
              </li>
              <li>
                <Link
                  to="/addservice"
                  className="text-base font-medium hover:text-slate-400"
                >
                  Add Service
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/services"
                  className="text-base font-medium  hover:text-slate-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-base font-medium hover:text-slate-400"
                >
                  Blog
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <li className="list-none pr-5">
              <Link to="">
                <div className="avatar"></div>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    className="w-10 rounded-full"
                    alt=""
                    src={user?.photoURL}
                  />
                </div>
              </Link>
            </li>
            <li className="list-none">
              <Link onClick={handleSignOut} to="/login">
                Log out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="list-none">
              <Link
                to="signup"
                className="whitespace-nowrap text-base font-medium  hover:text-gray-900"
              >
                Sign Up
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/login"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Login
              </Link>
            </li>
          </>
        )}
      </div>
    </div>
  );
}
