import {Link} from "react-router-dom";
import errorPhoto from "../assets/error-photo.svg";

import {Helmet} from "react-helmet-async";

const Error404 = () => {
  return (
    <div className="hero h-screen">
      <Helmet>
        <title>404 - HireHarbor</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row gap-16">
        <img
          src={errorPhoto}
          loading="lazy"
          className="w-full lg:w-3/4 h-full lg:h-[40rem]"
        />
        <div className="card text-center max-w-sm space-y-4">
          <h1 className="text-whitish text-5xl md:text-7xl  lg:text-9xl font-black">
            404
          </h1>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">
            We Are Sorry, Page Not Found
          </h3>
          <p className="text-base md:text-lg">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link href="/">
            <button className="font-semibold py-2 rounded-2xl bg-primary hover:bg-opacity-80 transition text-base md:text-xl text-blackish capitalize px-5">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
