const SectionTitle = ({ title, heading, subHeading, btn }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
      <div>
        <h4 className="text-secondary uppercase font-bold">{title}</h4>
        <h2 className="font-bold capitalize leading-normal text-6xl text-primary">
          {heading}
        </h2>
        <p className="text-lg text-accent w-2/3 font-normal">{subHeading}</p>
      </div>
      <button className="btn btn-secondary text-white capitalize">{btn}</button>
    </div>
  );
};

export default SectionTitle;
