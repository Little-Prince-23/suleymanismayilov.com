import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/portfolio2.webp";
import IMG3 from "../../assets/portfolio3.webp";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.webp"
import IMG6 from "../../assets/portfolio6.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Weather App (JS, Fetch API)",
    github: "https://github.com/Little-Prince-23/Weather-App-Version-1.0",
    demo: "https://little-prince-23.github.io/Weather-App-Version-1.0/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Euro to USD Exchanger (React, Fetch API)",
    github: "https://github.com/Little-Prince-23/react-exchanger",
    demo: "https://little-prince-23.github.io/react-exchanger/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Contacts App (React, Module CSS)",
    github: "https://github.com/Little-Prince-23/contacts",
    demo: "https://little-prince-23.github.io/contacts/",
  },
  {
    id: 4,
    image: IMG4,
    title: "ArchBaku MMC (React, Tailwind)",
    github: "https://github.com/Little-Prince-23/ArchBaku",
    demo: "https://little-prince-23.github.io/ArchBaku/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Simple Todo List (JS, Bootstrap)",
    github: "https://github.com/Little-Prince-23/TO-DO-LIST-V.2",
    demo: "https://little-prince-23.github.io/TO-DO-LIST-V.2/",
  },
  {
    id: 6,
    image: IMG6,
    title: "FAB Boya MMC (JS, Bootstrap)",
    github: "https://github.com/Suleyman23/fabboya",
    demo: "https://suleyman23.github.io/fabboya/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
