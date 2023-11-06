import {Link} from "react-router-dom";
import NavLinks from "../NavLinks";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";
import {IoSettingsOutline, IoLogOutOutline} from "react-icons/io5";

const Navbar = () => {
  const {user, logout} = useAuth();
  const [miniLoading, setMiniLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMiniLoading(false);
    }, 2500);
  }, [setMiniLoading, user]);

  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");
    try {
      await logout();
      toast.success("Logged out", {id: toastId});
    } catch (error) {
      toast.error(error.message, {id: toastId});
      console.log(error);
    }
  };
  return (
    <nav>
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown md:mr-5 lg:mr-0">
            <label tabIndex={0} className="btn border-none lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
              className="menu menu-sm dropdown-content mt-3 z-[999] p-10 shadow bg-neutral rounded-box w-52 space-y-6 text-lg"
            >
              <NavLinks />
            </ul>
          </div>
          <Link className="flex-none">
            <img src="logo.svg" alt="HireHarbor" className="w-44 md:w-56" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8 text-lg">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {miniLoading ? (
            <span className="loading loading-ring loading-lg text-primary/75"></span>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div
                className="lg:tooltip lg:tooltip-bottom"
                data-tip={`${user?.displayName}`}
              >
                <button
                  tabIndex={0}
                  type="button"
                  className="flex items-center border-transparent hover:border-secondary pr-5  transition md:pr-2"
                >
                  <img
                    alt="person"
                    src={user?.photoURL}
                    className="w-8 md:h-10 h-8 md:w-10 rounded-full object-cover"
                  />
                </button>
              </div>
              <ul
                tabIndex={0}
                className="p-2 shadow menu dropdown-content z-50 bg-neutral rounded-box w-52 space-y-4 text-xl mt-3"
              >
                <li className="text-xl pl-5 break-words">
                  <p className="font-semibold">{user?.displayName}</p>
                </li>
                <li className="pt-3 hover:text-primary/75">
                  <button>
                    <IoSettingsOutline /> Account
                  </button>
                </li>
                <li className="hover:text-primary/75">
                  <button onClick={handleLogout}>
                    <IoLogOutOutline /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"login"}
              className="mr-2 md:mr-5 lg:mr-0 px-5 md:px-8 lg:px-10 text-blackish font-semibold py-2 rounded-2xl bg-primary hover:bg-opacity-80 transition text-base md:text-xl"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* 



*/
