import {Helmet} from "react-helmet-async";
import Banner from "../components/ui/Banner";
import JobCategories from "../components/ui/JobCategories";
import Subscribe from "../components/ui/Subscribe";
const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Home - HireHarbor</title>
        <meta
          name="description"
          content="Welcome to HireHarbor. Explore job categories and subscribe for updates."
        />
      </Helmet>
      <Banner />
      <JobCategories />
      <Subscribe />
    </section>
  );
};

export default Home;
