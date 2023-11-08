import {Helmet} from "react-helmet-async";
import Banner from "../components/ui/Banner";
import JobCategories from "../components/ui/JobCategories";
import Subscribe from "../components/ui/Subscribe";
import AboutUs from "../components/ui/AboutUs";
import TrustedBy from "../components/ui/TrustedBy";
import Stats from "../components/ui/Stats";
import Pricing from "../components/ui/Pricing";
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
      <AboutUs />
      <TrustedBy />
      <Stats />
      <Pricing />
      <Subscribe />
    </section>
  );
};

export default Home;
