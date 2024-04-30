// Home.js

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="welcome-page">
      <section className="section">
        <h2 className="section-title green">FAQs/About us:</h2>
        <div className="section-content">
          <p>
            <span className="green">Who we are:</span>{" "}
            <span className="white">
              Hackers Haven is a cyberpunk haven for skilled hackers who band
              together to take down the biggest and baddest corporations,
              individuals, and criminals in the digital underworld, inspired by
              the cyberpunk novel "Burning Chrome".
            </span>
          </p>
          <p>
            <span className="green">Why we exist:</span>{" "}
            <span className="white">
              We exist to provide a safe and collaborative space for hackers to
              hone their skills, share knowledge, and strategize on how to
              disrupt the status quo, empowering individuals to be their very
              best in the pursuit of breaking the ice and challenging digital
              dominance.
            </span>
          </p>
          <p>
            <span className="green">Our goal:</span>{" "}
            <span className="white">
              Our goal is to unite hackers from all walks of life and
              backgrounds, fostering a community-driven ethos where collective
              action can make a difference. Together, we strive to push the
              boundaries of technology and dismantle oppressive systems in the
              digital realm.
            </span>
          </p>
          <p>
            <span className="green">How we protect ourselves:</span>{" "}
            <span className="white">
              We prioritize security and anonymity, utilizing cutting-edge
              encryption, secure communication channels, and decentralized
              networks to safeguard our identities and operations from prying
              eyes and malicious actors.
            </span>
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title green">How to connect:</h2>
        <div className="section-content">
          <p>
            To connect with our community, hackers can access our forums through
            encrypted channels and private networks, ensuring their privacy and
            security are maintained. Whether through Tor, private matrix
            networks, or other secure means, our doors are open to all who share
            our mission.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title green">
          Consider donating to our community/supporting us:
        </h2>
        <div className="section-content">
          <p>
            If you believe in our cause and want to support our efforts,
            consider donating to Hackers Haven. Your contributions help us
            maintain our infrastructure, organize events, and further our
            mission of challenging digital dominance and empowering hackers
            worldwide.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title green">Thank you!</h2>
        <div className="section-content">
          <p>
            We extend our deepest gratitude to all members, contributors, and
            supporters who make Hackers Haven a vibrant and thriving community.
            Together, we stand united in our pursuit of freedom, knowledge, and
            justice in the cyberpunk universe. Let's continue to break the ice
            and shape the future together!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
