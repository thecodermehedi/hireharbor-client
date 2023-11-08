import {Navigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
const BlockRoute = ({children}) => {
  const {user, isLoading} = useAuth();
  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && user?.email) {
    return <Navigate to="/" />;
  }
  return children;
};

BlockRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default BlockRoute;
