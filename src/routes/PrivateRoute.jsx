import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const PrivateRoute = ({children}) => {
  const {user, isLoading} = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && !user?.email) {
    toast.error("You have to log in first to view details");
    return <Navigate state={location.pathname} to="/login" replace />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
