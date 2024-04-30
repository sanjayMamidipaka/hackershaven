import React from "react";
import './Blogs.css'
import arm from '../images/arm.png'

const Blogs = () => {
  const items = [
    {
      id: 1,
      name: "Myoelectric Arm",
      image: arm,
      description: "Connects via neural interface and uses impulse signals from neighboring muscle groups for control, built using carbon.",
      cost: "$50",
      contact: "Meet at Finn's place, New York. Show code '23jhfduvdscsdk34PnerJDUF'",
      avail: "13"
    },
    {
      id: 2,
      name: "Sendai Eyes v2.0",
      image: "https://via.placeholder.com/150",
      description: "Eye replacements built upon v1.0. Built to withstand the depth-perception defects and warranty issues ",
      cost: "$100",
      contact: "Meet at Finn's place, New York",
      avail: "15"
    },
    {
      id: 3,
      name: "Item 3",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cost: "$75",
      contact: "Meet at Finn's place, New York",
      avail: "2 (hurry!!)"
    },
    {
      id: 3,
      name: "Item 3",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cost: "$75",
      contact: "Meet at Finn's place, New York",
      avail: "24"
    },
  ];

  return (
    <div>
      <h2 className='head2'>Enhancements Marketplace</h2>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Cost: {item.cost}</p>
            <p>Contact: {item.contact}</p>
            <p>Availability: {item.avail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
