import React from "react";
import "./ContactsPage.css"; // Import CSS for styling

const criminalsData = [
  {
    id: 1,
    name: "Hacker123",
    photo: "https://via.placeholder.com/150",
    description:
      "Hacker123 is known for hacking into government databases and stealing sensitive information. He is highly skilled in exploiting vulnerabilities and poses a significant threat to national security.",
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

export default ContactsPage;
