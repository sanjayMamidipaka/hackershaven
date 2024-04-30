import React from "react";
import "./ContactsPage.css"; // Import CSS for styling
import chrome from '../images/chrome.png'
import don from '../images/donjulio.png'
import oasis from "../images/oasis.png";

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
    name: "Apex Systems",
    photo: "https://via.placeholder.com/150",
    description:
      "Apex Systems, once a beacon of hope, has turned into a former shell of itself. As a global defense contractor, Apex develops next-gen weapons and surveillance technology to carry out confidential black ops on foreign soil without regard for human life. Just recently, sources discovered their failed plot in bringing down the Long Hums of Macao on behalf of the US govt. They act as muscle-for-hire, working for governments looking to squash their rivals abroad. From drone strikes to cyber warfare, Apex can single handedly shape world politics to spark conflict. Infiltrating Apex’s ice would greatly limit governments' a.",
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
