import {Link} from "react-router-dom";
import NavLinks from "../NavLinks";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto border-b pb-5 border-gray-600 navbar">
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
              className="menu menu-sm dropdown-content mt-3 z-[999] p-10 shadow bg-neutral rounded-box w-52 space-y-6 text-xl"
            >
              <NavLinks />
            </ul>
          </div>
          <Link className="flex-none">
            <img src="logo.svg" alt="HireHarbor" className="w-44 md:w-56" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-14">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"login"}
            className="mr-2 md:mr-5 lg:mr-0 px-5 md:px-8 lg:px-10 text-blackish font-semibold py-2 rounded-2xl bg-primary hover:bg-opacity-80 transition text-base md:text-xl"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
