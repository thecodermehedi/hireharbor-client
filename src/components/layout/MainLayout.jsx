import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Toaster} from "react-hot-toast";

const MainLayout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Toaster
        toastOptions={{
          className: "rounded-2xl bg-[#000] text-[#fff]",
          duration: 2000,
        }}
      />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
