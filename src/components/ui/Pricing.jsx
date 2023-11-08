const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: 90,
      isMostPop: false,
      features: [
        "1 job posting",
        "0 featured job",
        "Sed posuere nisi",
        "job displayed fo 20 days",
        "Premium support 24/7",
      ],
    },
    {
      name: "Standard",
      price: 248,
      isMostPop: true,
      features: [
        "1 job posting",
        "0 featured job",
        "Sed posuere nisi",
        "job displayed fo 20 days",
        "Premium support 24/7",
      ],
    },
    {
      name: "Extended",
      price: 499,
      isMostPop: false,
      features: [
        "1 job posting",
        "0 featured job",
        "Sed posuere nisi",
        "job displayed fo 20 days",
        "Premium support 24/7",
      ],
    },
  ];

  return (
    <section className="py-14">
      <div className="container mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative container mx-auto ">
          <h3 className="text-secondary mb-8 text-lg">Choose Your Plan</h3>

          <div className="mt-3 max-w-xl">
            <h1 className="text-whitish mb-8 text-3xl md:text-4xl lg:text-5xl font-medium">
              Save up to 10%
            </h1>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-3xl border-2 border-primary/20 mt-6 sm:mt-0 hover:shadow-md hover:shadow-primary ${
                item.isMostPop ? "mt-10" : ""
              }`}
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full shadow-md bg-primary text-center text-black text-sm font-semibold">
                  Recommended
                </span>
              ) : (
                ""
              )}
              <div className="p-8 space-y-4 ">
                <span className="text-primary font-medium">{item.name}</span>
                <div className="text-white text-3xl font-semibold">
                  ${item.price}{" "}
                  <span className="text-xl text-white/50 font-normal">/mo</span>
                </div>
                <p>{item.desc}</p>
              </div>
              <ul className="p-8 space-y-3 text-white/75">
                <li className="pb-2 text-primary font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
              <div className="text-center mb-10">
                <button className="px-3 py-3 rounded-lg w-fit font-semibold text-sm duration-150 text-white bg-primary/60 hover:bg-primary/80">
                  Purchase Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
