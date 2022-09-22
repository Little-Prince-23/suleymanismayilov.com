import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/* SEO */}
        <article className="service">
          <div className="service_head">
            <h3>SEO</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Developing optimization strategies that increase the company's
                website search engine result ranking
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                When running paid search campaigns, testing, collecting and
                analyzing data and results, identifying trends and insights to
                achieve maximum ROI
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Managing the expenses of SEO campaigns, maintaining the budget,
                estimating monthly costs and reconciling differences
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Taking responsibility for on-page optimization for search engine
                marketing
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Performing continuous keyword research, discovery and
                optimization for new relevant keywords to be used on the company
                website and marketing materials
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Creating and executing a link building strategy</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Coding of responsive, fast, semantic and SEO compatible websites
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Using modern development tools like React, Typescript</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                To make the site more secure with different npm packages and 2nd
                party technologies
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Recompilation of previously written code</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Coding designs designed in programs such as Adobe XD, Figma</p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION*/}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              Researching competitors to find content gaps and keyword gaps that
              your company has not yet covered
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Creating a new content strategy that can help your company
                achieve its traffic goals
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Promote a consistent brand identity through the company's social
                media profiles
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Creating a long-term and short-term content publishing calendar
                and social media calendar
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Monitoring the performance of content through online tools such
                as Google Analytics, Ahrefs, and Google Search Console
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
