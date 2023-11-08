import PropTypes from "prop-types";

const ErrorComponent = ({error}) => (
  <div className="flex items-center justify-center h-screen">
    <h1 className="text-5xl font-bold text-red-600 text-center">
      {error.message}
    </h1>
  </div>
);

ErrorComponent.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorComponent;
