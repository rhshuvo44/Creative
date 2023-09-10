import banner from "../assets/banner/well-dressed-businesspeople-office-removebg 1.png";
// import banner1 from "../assets/banner/Vector 3.png";
const Banner = () => {
  return (
    <section className="hero banner min-h-screen bg-primary text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="relative banner-img-box">
          <img src={banner} className="max-w-lg banner-img" />
        </div>
        <div className="">
          <h1 className="text-8xl font-bold  uppercase">
            Creative Talent He<span className="text-secondary">re.</span>
          </h1>
          <p className="py-6 w-1/2">
            Every problem have an solution in our company. Its our big our big
            dream project. Lets something big with us. Lets something big with
            us. Its our big our big dream project.
          </p>
          <button className="btn btn-secondary text-white">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
