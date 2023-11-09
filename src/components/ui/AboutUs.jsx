import aboutus from "../../assets/aboutus.svg";
import {BsFillCheckCircleFill} from "react-icons/bs";
const AboutUs = () => {
  return (
    <section>
      <div className=" bg-primary/5 rounded-3xl md:rounded-[5rem] mt-5 mx-5">
        <div className="lg:grid lg:grid-cols-2">
          <div className="overflow-y-hidden">
            <img
              alt="banner"
              loading="lazy"
              src={aboutus}
              className="h-50 w-full object-cover pt-8 "
            />
          </div>
          <div className="p-8 md:p-12 lg:py-24">
            <div className="mx-auto max-w-lg text-center lg:text-left">
              <h3 className="text-secondary mb-8 text-lg">About</h3>
              <h1 className="text-whitish mb-8 text-3xl md:text-4xl lg:text-5xl font-medium">
                Millions of jobs. Find the one that’s right for you.
              </h1>
              <div className="space-y-3">
                <div className="flex items-center gap-6">
                  <span className="text-2xl text-primary fill-white">
                    <BsFillCheckCircleFill />
                  </span>{" "}
                  <p>Full lifetime access</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-2xl text-primary fill-white">
                    <BsFillCheckCircleFill />
                  </span>{" "}
                  <p>20+ downloadable resources</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-2xl text-primary fill-white">
                    <BsFillCheckCircleFill />
                  </span>{" "}
                  <p>Certificate of completion</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-2xl text-primary fill-white">
                    <BsFillCheckCircleFill />
                  </span>{" "}
                  <p>Free Trial 7 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
