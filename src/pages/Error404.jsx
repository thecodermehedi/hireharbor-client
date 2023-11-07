import {Link} from "react-router-dom";
import errorPhoto from "../assets/error-404.png";

const Error404 = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={errorPhoto} className="w-full lg:w-3/4" />
        <div className="card flex-shrink-0 max-sm text-center max-w-sm space-y-4">
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
              Go back home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;

/* 
<div className="flex flex-col lg:flex-row justify-between items-center gap-12 m-20">
      <img src="/error-404.png" alt="" className=" lg:w-1/2" />
      <div className="flex flex-col justify-center items-center w-full space-y-4 text-center">
        <h1 className="text-whitish text-5xl md:text-7xl  lg:text-9xl font-black">404</h1>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">
          We Are Sorry, Page Not Found
        </h3>
        <p className="text-base md:text-lg">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link href="/">
          <button className="font-semibold py-2 rounded-2xl bg-primary hover:bg-opacity-80 transition text-base md:text-xl text-blackish capitalize px-5">
            Go back home
          </button>
        </Link>
      </div>
    </div>



*/
