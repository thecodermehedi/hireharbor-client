const Subscribe = () => {
  return (
    <section className=" flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left px-2 py-10 lg:py-20">
      <strong className="my-5 text-xl md:text-3xl lg:text-4xl w-5/6 lg:w-full">
        {/* Subscribe for job updates and notifications */}
        Join our email subscription now to get updates on new jobs and
        notifications.
      </strong>
      <div className="relative w-5/6 lg:w-full">
        <input
          type="email"
          className="input focus:outline-none placeholder:text-whitish placeholder:text-opacity-30 border-none w-full pr-16 rounded-2xl bg-neutral lg:h-16"
          placeholder="Enter your email"
        />
        <button className="text-blackish font-semibold h-full bg-primary hover:bg-opacity-80 transition text-base md:text-xl border-none absolute top-0 right-0 rounded-2xl rounded-l-none px-2 md:px-3 lg:px-5">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;