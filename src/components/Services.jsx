import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <section className="p-20" id="service">
      <SectionTitle
        title="SERVICES"
        subHeading="Every problem have an solution in our company. Its our big project."
        heading="We Do Everything."
        btn="See More"
      />
      <div className="mt-20 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
