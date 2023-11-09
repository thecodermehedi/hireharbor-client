import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {useState} from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import {Helmet} from "react-helmet-async";
import registerPhoto from "../assets/signup.svg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [photoURL, setPhotoURL] = useState("https://i.pravatar.cc/300");
  const {register, updateUser, loginWithGoogle, setIsLoading} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      toast.error("Passwords do not match");
      return;
    }
    const toastId = toast.loading("Creating account...");
    try {
      await register(email, password);
      await updateUser(name, photoURL);
      location?.state ? navigate(location.state) : navigate("/");
      toast.success(`Welcome ${name}`, {id: toastId});
    } catch (error) {
      toast.error(
        error.message === "Firebase: Error (auth/email-already-in-use)."
          ? "Email is already in use"
          : error.message,
        {id: toastId}
      );
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in ...");
    try {
      await loginWithGoogle();
      location?.state ? navigate(location.state) : navigate("/");
      toast.success("Logged in", {id: toastId});
    } catch (error) {
      toast.error(error.message, {id: toastId});
    }
  };

  return (
    <section className="container h-full px-6 py-10">
      <Helmet>
        <title>Register - HireHarbor</title>
      </Helmet>
      <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div className="mb-12 md:mb-0 hidden lg:block md:w-8/12 lg:w-6/12">
          <img
            src={registerPhoto}
            loading="lazy"
            className="w-full"
            alt="login-image"
          />
        </div>
        <div className="md:w-8/12 lg:ml-6 lg:w-5/12 pb-10">
          <h1 className="text-center text-4xl font-bold text-main mb-6">
            Create Your Account
          </h1>
          <form onSubmit={handleRegister} className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="input bg-neutral  rounded-2xl border-none focus:outline-none mb-2 text-lg w-full placeholder:text-whitish placeholder:text-opacity-30 focus:placeholder:text-opacity-0"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="input bg-neutral  rounded-2xl border-none focus:outline-none mb-2 text-lg w-full placeholder:text-whitish placeholder:text-opacity-30 focus:placeholder:text-opacity-0"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="flex flex-col relative">
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
            <div className="flex flex-col relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirm"
                id="confirm"
                placeholder="Confirm Password"
                className="input bg-neutral  rounded-2xl border-none focus:outline-none mb-2 text-lg w-full pr-10  placeholder:text-whitish placeholder:text-opacity-30 focus:placeholder:text-opacity-0"
                onChange={(e) => setConfirmPass(e.target.value)}
                required
              />
              {showConfirm ? (
                <FaEyeSlash
                  className="absolute right-4 top-4 cursor-pointer text-lg"
                  onClick={() => setShowConfirm(false)}
                />
              ) : (
                <FaEye
                  className="absolute right-4 top-4 cursor-pointer text-lg"
                  onClick={() => setShowConfirm(true)}
                />
              )}
            </div>
            <input
              type="url"
              name="photoURL"
              id="photoURL"
              placeholder="Photo URL: https://i.pravatar.cc/300"
              className="input bg-neutral  rounded-2xl border-none focus:outline-none mb-2 text-lg w-full placeholder:text-whitish placeholder:text-opacity-30 focus:placeholder:text-opacity-0"
              onChange={(e) => setPhotoURL(e.target.value)}
              defaultValue={`https://i.pravatar.cc/300`}
              required
              readOnly
            />
            <button
              type="submit"
              className=" text-blackish font-semibold py-2 rounded-2xl bg-primary hover:bg-opacity-80 transition text-base md:text-xl normal-case"
            >
              Register
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <span className="text-secondary">
                <Link to="/login">Log in</Link>
              </span>
            </p>
          </form>
          <div className="divider">Or</div>
          <button
            onClick={handleGoogleLogin}
            type="submit"
            className="flex justify-center items-center gap-4 py-2 rounded-2xl transition w-full text-lg md:text-xl normal-case bg-neutral hover:bg-neutral/80"
          >
            <img src="/google.svg" alt="G" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
