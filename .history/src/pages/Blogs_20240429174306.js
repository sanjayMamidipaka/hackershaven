import React from "react";
import './Blogs.css'
import arm from '../images/arm.png'
import eyes from '../images/eyes.png'
import zeiss from '../images/zeiss.png'
import skin from "../images/skin.png";

const Blogs = () => {
  const items = [
    {
      id: 1,
      name: "Myoelectric Arm",
      image: arm,
      description:
        "Connects via neural interface and uses impulse signals from neighboring muscle groups for control, built using carbon.",
      cost: "$50000 (15% off)",
      contact:
        "Meet at Finn's place, New York. Show code '23jhfduvdscsdk34PnerJDUF' for verification",
      avail: "13",
    },
    {
      id: 2,
      name: "Sendai Eyes v2.0",
      image: eyes,
      description:
        "Eye replacements built upon v1.0, including fixing the depth-perception defects and warranty issues.",
      cost: "$1200 per eye",
      contact: "Meet at Finn's place, New York (no code required)",
      avail: "15 pairs (30 total)",
    },
    {
      id: 3,
      name: "Zeiss Ikon Eyes",
      image: zeiss,
      description:
        "Used by THE Tally Isham in simstim. A pricier solution, but more than worth it",
      cost: "$5000 per eye",
      contact:
        "Meet at Finn's place, New York. Show code Show code '34kjvdsaJuBy4345#' for verification",
      avail: "2 (hurry!!)",
    },
    {
      id: 3,
      name: "Haptic Feedback Skin:",
      image: skin,
      description:
        "Artificial skin with embedded sensors that allow users to feel textures and temperatures in the Matrix.",
      cost: "$7500",
      contact: "Meet at Centennial Olympic Park, show ice",
      avail: "24",
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
