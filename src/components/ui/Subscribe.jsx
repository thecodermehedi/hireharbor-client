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

/* 

<div className="relative max-w-lg">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none"
            id="email"
            type="email"
            placeholder="Enter your email"
          />

          <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full px-5 py-3 text-sm font-medium text-black transition bg-primary hover:bg-opacity-80">
            Subscribe
          </button>
        </div>
*/
