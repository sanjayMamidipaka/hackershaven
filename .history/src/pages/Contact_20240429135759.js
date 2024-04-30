import React from "react";
import "./ContactsPage.css"; // Import CSS for styling

const criminalsData = [
  {
    id: 1,
    name: "Chrome",
    photo: "https://via.placeholder.com/150",
    description:
      "Chrome, the elusive queenpin of the underworld, is still out there, slithering through the shadows with a face smoother than steel and a heart colder than ice. Despite most hackers' best efforts, she's managed to evade capture. Rumors swirl about her dark deeds, from genetic tampering to shady financial deals. Her fortress-like database remains impenetrable, guarded by layers of ice that even the most skilled hackers can't crack. As long as Chrome's on the loose, evil stands strong. She remains the ultimate enigma, lurking in the shadows and evading capture at every turn.",
    priority: "High",
  },
  {
    id: 2,
    name: "CyberQueen",
    photo: "https://via.placeholder.com/150",
    description:
      "CyberQueen is a notorious cybercriminal specializing in identity theft and online fraud. She has defrauded thousands of individuals and organizations, causing millions of dollars in losses.",
    priority: "Medium",
  },
  {
    id: 3,
    name: "DarkLord",
    photo: "https://via.placeholder.com/150",
    description:
      "DarkLord is the leader of an underground hacking group responsible for launching large-scale cyber attacks on government and corporate networks. He is a mastermind behind several high-profile security breaches.",
    priority: "High",
  },
  {
    id: 4,
    name: "DarkLord1",
    photo: "https://via.placeholder.com/150",
    description:
      "DarkLord1 is the leader of an underground hacking group responsible for launching large-scale cyber attacks on government and corporate networks. He is a mastermind behind several high-profile security breaches.",
    priority: "Low",
  },
];

const Contact = () => {
  return (
    <div className="contacts-container">
      <h1>Criminals Contact List</h1>
      <div className="cards-container">
        {criminalsData.map((criminal) => (
          <div className="card" key={criminal.id}>
            <img src={criminal.photo} alt={criminal.name} />
            <div className="card-info">
              <h2>{criminal.name}</h2>
              <p>{criminal.description}</p>
              <div className={`priority ${criminal.priority.toLowerCase()}`}>
                {criminal.priority}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
