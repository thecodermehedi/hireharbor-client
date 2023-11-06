import TabContainer from "../ReactTab/TabContainer";

const JobCategories = () => {
  return (
    <section className="container mx-5 lg:mx-auto my-20">
      <h3 className="text-secondary mb-8 text-lg">Jobs by Categories</h3>
      <h1 className="text-whitish mb-8 text-3xl md:text-4xl lg:text-5xl font-medium">
        Choose Your Desire Category
      </h1>
      <TabContainer />
    </section>
  );
};

export default JobCategories;
