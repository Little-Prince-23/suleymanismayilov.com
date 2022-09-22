import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/Avatar1.jpeg";
import AVTR2 from "../../assets/Avatar2.jpeg";
import AVTR3 from "../../assets/Avatar3.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Ali (JED Academy)",
    review:
      "- Excellent student and successful frontend developer of the future -",
  },
  {
    avatar: AVTR2,
    name: "Ilkin Guluzada (JED Academy)",
    review: "- A good teammate and solution oriented developer -",
  },
  {
    avatar: AVTR3,
    name: "Siraj Seyidov (WebCoder Agency)",
    review: "- A confident and playful colleague who loves his job -",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="avatar1" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
