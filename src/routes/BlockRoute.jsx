import {Navigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
const BlockRoute = ({children}) => {
  const {user, isLoading} = useAuth();
  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && user?.email) {
    toast.error("Log out first");
    return <Navigate to="/" />;
  }
  return children;
};

BlockRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default BlockRoute;
