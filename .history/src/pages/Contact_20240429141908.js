import React from "react";
import "./ContactsPage.css"; // Import CSS for styling

const criminalsData = [
  {
    id: 1,
    name: "Chrome",
    photo: "https://via.placeholder.com/150",
    description:
      "Chrome is not your everyday criminal and she is not to be taken lightly. With a face smoother than steel and the silhouette of a 14 year-old, you wouldn’t think she’s the “big kill”. Despite most hackers' best efforts, her ice has remained resolute to even the best Console Cowboys the matrix has ever set its eyes upon. Rumors swirl about her dark deeds, from genetic tampering to shady financial deals. As long as Chrome's on the loose, evil stands strong. She remains the ultimate prize for hackers everywhere but remains on the loose due to her evasive maneuvering and arcane persona.",
    priority: "High",
  },
  {
    id: 2,
    name: "The Syndicate",
    photo: "https://via.placeholder.com/150",
    description:
      "The Syndicate started as a local drug ring from Sinaloa, Mexico just a few years ago but has now grown to a ruthless cartel operating in the shadows. They control the illicit drug trade between the United States and Mexico with an iron fist and are vying to expand eastwards, towards the Caribbean. Countermeasure efforts by the Mexican government have been less than futile, with their grip on the country growing day by day. Led by Don Julio, they traffic narcotics across borders, corrupting officials and terrorizing rival gangs. Taking down Don Julio and dismantling his empire would strike a major blow against organized crime.


",
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
