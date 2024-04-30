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
    },
    {
      id: 2,
      name: "Item 2",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cost: "$100",
      contact: "Meet at Finn's place, New York",
    },
    {
      id: 3,
      name: "Item 3",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cost: "$75",
      contact: "Meet at Finn's place, New York",
    },
    {
      id: 3,
      name: "Item 3",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cost: "$75",
      contact: "Meet at Finn's place, New York",
    },
  ];

  return (
    <div>
      <h2>Enhancements Marketplace</h2>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Cost: {item.cost}</p>
            <p>Contact: {item.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
