import React from "react";
import "./ContactsPage.css"; // Import CSS for styling
import chrome from '../images/chrome.png'
import don from '../images/donjulio.png'
import don from "../images/donjulio.png";

const criminalsData = [
  {
    id: 1,
    name: "Chrome",
    photo: chrome,
    description:
      "Chrome is not your everyday criminal and she is not to be taken lightly. With a face smoother than steel and the silhouette of a 14 year-old, you wouldn’t think she’s the “big kill”. Despite most hackers' best efforts, her ice has remained resolute to even the best Console Cowboys the matrix has ever set its eyes upon. Rumors swirl about her dark deeds, from genetic tampering to shady financial deals. As long as Chrome's on the loose, evil stands strong. She remains the ultimate prize for hackers everywhere but remains on the loose due to her evasive maneuvering and arcane persona.",
    priority: "High",
  },
  {
    id: 2,
    name: "The Syndicate",
    photo: don,
    description:
      "The Syndicate started as a local drug ring from Sinaloa, Mexico just a few years ago but has now grown to a ruthless cartel operating in the shadows. They control the illicit drug trade between the United States and Mexico with an iron fist and are vying to expand eastwards, towards the Caribbean. Countermeasure efforts by the Mexican government have been less than futile, with their grip on the country growing day by day. Led by Don Julio, they traffic narcotics across borders, corrupting officials and terrorizing rival gangs.",
    priority: "Medium",
  },
  {
    id: 3,
    name: "Oasis Bank",
    photo: oasis,
    description:
      "With over $40 Bn AUM, Oasis Bank has become a cornerstone in the financial sector. However, looking beneath what meets the eye reveals what has long been hypothesized as money laundering, customer fraud, and funding/profiting world conflicts. With branches around across the globe, Oasis serves as a hub for dirty money and illicit transactions wherever it can. From funding the Nexus Failures to facilitating tax evasion, Oasis Bank's activities have caused misery on an unprecedented scale. Exposing their corruption and holding them accountable would be a major win for the people.",
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
      <h1>Targets Board</h1>
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
