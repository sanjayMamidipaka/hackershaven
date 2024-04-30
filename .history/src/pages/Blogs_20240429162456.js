import React from "react";
import './Blogs.css'

const Blogs = () => {
  const items = [
    {
      id: 1,
      name: "Item 1",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cost: "$50",
      contact: "Meet at Finn's place, New York",
      avail: "3"
    },
    {
      id: 2,
      name: "Item 2",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      avail
    },
  ];

  return (
    <div>
      <h2 className='head2'>Marketplace</h2>
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
