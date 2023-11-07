import PropTypes from "prop-types";

const BannerComponent = ({title, subTitle}) => {
  return (
    <div className="hero md:h-64 lg:h-96">
      <div className="hero-content text-center">
        <div className="max-w-md md:max-w-xl lg:max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <p className="py-6 text-lg md:text-xl lg:text-2xl">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

BannerComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
export default BannerComponent;
