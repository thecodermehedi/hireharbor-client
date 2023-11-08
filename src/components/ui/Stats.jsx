const Stats = () => {
  const stats = [
    {
      data: "35K",
      desc: "Job For Countries",
    },
    {
      data: "10K+",
      desc: "Jobs Done",
    },
    {
      data: "40+",
      desc: "Companies Jobs",
    },
    {
      data: "30M+",
      desc: "Total Users",
    },
  ];

  return (
    <section className="py-10 bg-primary/5 rounded-3xl md:rounded-[5rem]">
      <div className="px-4 md:px-8">
        <div className="mt-12">
          <ul className="grid grid-cols-2 md:grid-cols-4 container mx-auto h-fit place-items-center gap-4 md:max-w-2xl lg:max-w-4xl">
            {stats.map((item, idx) => (
              <li key={idx} className="sm:max-w-[15rem]">
                <h4 className="text-4xl text-white font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 text-gray-400 font-medium">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Stats;
