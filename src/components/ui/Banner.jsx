import bannerPhoto from "../../assets/banner.png";
const Banner = () => {
  return (
    <section>
      <div className=" bg-primary/5 rounded-3xl md:rounded-[5rem] mt-5 mx-5">
        <div className="lg:grid lg:grid-cols-2">
          <div className="p-8 md:p-12 lg:py-24">
            <div className="mx-auto max-w-lg text-center lg:text-left">
              <h2 className="text-2xl font-medium text-whitish md:text-6xl mb-8">
                Your <span className="text-primary underline">Dream Job</span>{" "}
                in one place
              </h2>

              <p className="mb-8 text-lg">
                Find jobs that match your interests with us.
              </p>

              <div className="relative w-full mt-4 md:mt-8 ">
                <input
                  type="text"
                  className="input focus:outline-none placeholder:text-whitish placeholder:text-opacity-30 border-none w-full pr-16 rounded-2xl bg-blackish lg:h-16 focus:placeholder:text-opacity-0  md:placeholder:text-lg lg:placeholder:text-xl "
                  placeholder="Job title, Keywords or Company"
                />
                <button className="text-blackish font-semibold h-full bg-primary hover:bg-opacity-80 transition text-base md:text-xl border-none absolute top-0 right-0 rounded-2xl rounded-l-none px-2 md:px-3 lg:px-5">
                  Find Job
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-y-hidden">
            <img
              alt="banner"
              loading="lazy"
              src={bannerPhoto}
              className="h-50 w-full object-cover pt-8 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
