import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {useState} from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import {Helmet} from "react-helmet-async";
import useAxios from "../hooks/useAxios";
import loginPhoto from "../assets/login.svg"

const Login = () => {
  const {login, loginWithGoogle, setIsLoading} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const axios = useAxios();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const getJWT = async (user) => {
    const res = axios.post("/auth/accesstoken", user);
    return res.data;
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in ...");
    const user = {email: email};
    try {
      await login(email, password);
      await getJWT(user);
      location?.state ? navigate(location.state) : navigate("/");
      toast.success("Logged in", {id: toastId});
    } catch (error) {
      toast.error(
        error.message === "Firebase: Error (auth/invalid-login-credentials)."
          ? "Incorrect email or password"
          : error.message,
        {id: toastId}
      );
    }
    setIsLoading(false);
  };
  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in ...");
    try {
      await loginWithGoogle();
      toast.success("Logged in", {id: toastId});
      navigate("/");
    } catch (error) {
      toast.error(error.message, {id: toastId});
    }
  };
  return (
    <section className="container h-full px-6 py-24">
      <Helmet>
        <title>Login - HireHarbor</title>
      </Helmet>
      <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div className="mb-12 md:mb-0 hidden lg:block md:w-8/12 lg:w-6/12">
          <img
            src={loginPhoto}
            className="w-full scale-x-[-1]"
            alt="login-image"
            loading="lazy"
          />
        </div>

        <div className="md:w-8/12 lg:ml-6 lg:w-5/12 pb-10">
          <h1 className="text-center text-4xl font-bold text-main mb-6">
            Welcome back!
          </h1>
          <form onSubmit={handleLogIn} className="flex flex-col gap-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="input bg-neutral  rounded-2xl border-none focus:outline-none mb-2 text-lg w-full placeholder:text-whitish placeholder:text-opacity-30 focus:placeholder:text-opacity-0"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="input bg-neutral  rounded-2xl border-none focus:outline-none mb-2 text-lg w-full pr-10  placeholder:text-whitish placeholder:text-opacity-30 focus:placeholder:text-opacity-0"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-4 top-4 cursor-pointer text-lg"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEye
                  className="absolute right-4 top-4 cursor-pointer text-lg"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>

            <p className="text-center text-secondary ">
              <Link to="#">Forgot password?</Link>
            </p>
            <button
              type="submit"
              className=" text-blackish font-semibold py-2 rounded-2xl bg-primary hover:bg-opacity-80 transition text-base md:text-xl normal-case"
            >
              Log in
            </button>
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <span className="text-secondary">
                <Link to="/register">Sign up</Link>
              </span>
            </p>
          </form>
          <div className="divider">Or</div>
          <button
            onClick={handleGoogleLogin}
            type="submit"
            className="flex justify-center items-center gap-4 py-2 rounded-2xl transition w-full text-lg md:text-xl normal-case bg-neutral hover:bg-neutral/80"
          >
            <img src="/google.svg"  alt="G" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
