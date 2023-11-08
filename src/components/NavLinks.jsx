import {NavLink} from "react-router-dom";
import useAuth from "../hooks/useAuth";
const NavLinks = () => {
  const {user} = useAuth();
  return (
    <>
      <NavLink
        to={"/"}
        className={({isActive}) =>
          isActive
            ? "active text-primary"
            : "text-whitish transition hover:text-primary"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"jobs"}
        className={({isActive}) =>
          isActive
            ? "active text-primary"
            : "text-whitish transition hover:text-primary"
        }
      >
        All Jobs
      </NavLink>
      {user?.email && (
        <>
          {" "}
          <NavLink
            to={"appliedjobs"}
            className={({isActive}) =>
              isActive
                ? "active text-primary"
                : "text-whitish transition hover:text-primary"
            }
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to={"addjob"}
            className={({isActive}) =>
              isActive
                ? "active text-primary"
                : "text-whitish transition hover:text-primary"
            }
          >
            Add A Job
          </NavLink>
          <NavLink
            to={"postedjobs"}
            className={({isActive}) =>
              isActive
                ? "active text-primary"
                : "text-whitish transition hover:text-primary"
            }
          >
            My Jobs
          </NavLink>
        </>
      )}
      <NavLink
        to={"blogs"}
        className={({isActive}) =>
          isActive
            ? "active text-primary"
            : "text-whitish transition hover:text-primary"
        }
      >
        Blogs
      </NavLink>
    </>
  );
};

export default NavLinks;
