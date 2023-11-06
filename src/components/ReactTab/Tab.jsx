import PropTypes from "prop-types";

const Tab = ({name, activeTab, setActiveTab, index}) => {
  return (
    <button
      className={`px-5 py-3 ${
        activeTab === index
          ? "bg-primary/70 rounded-2xl"
          : "bg-blackish rounded-2xl"
      } text-whitish cursor-pointer`}
      onClick={() => setActiveTab(index)}
    >
      {name}
    </button>
  );
};

Tab.propTypes = {
  name: PropTypes.string,
  activeTab: PropTypes.number,
  setActiveTab: PropTypes.func,
  index: PropTypes.number,
};

export default Tab;
