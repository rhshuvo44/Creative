const ServiceCard = ({ image, name, descripation }) => {
  return (
    <div className="card bg-base-100 shadow-2xl ">
      <figure className="px-10 ">
        <img
          src={image}
          alt={name}
          className="w-[104px] h-[95px] absolute bg-white p-2 shadow-2xl"
        />
      </figure>
      <div className="card-body items-center text-center my-20">
        <h2 className="card-title text-primary">{name}</h2>
        <p className="text-accent">{descripation}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
