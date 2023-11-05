import {NavLink} from "react-router-dom";

const NavLinks = () => {
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
        to={"alljobs"}
        className={({isActive}) =>
          isActive
            ? "active text-primary"
            : "text-whitish transition hover:text-primary"
        }
      >
        All Jobs
      </NavLink>
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
