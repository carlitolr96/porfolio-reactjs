import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Molestias atque aspernatur odio dolore adipisci Distinctio recusandae odit veniam sapiente ducimus soluta ea unde officia impedit iusto obcaecati a hic similique quibusdam aliquam quae perferendis laudantium ipsam?",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque aspernatur odio dolore adipisci Distinctio recusandae, odit veniam sapiente, ducimus soluta ea unde officia impedit iusto obcaecati a, hic similique quibusdam aliquam quae perferendis laudantium ipsam?",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque aspernatur odio dolore adipisci Distinctio recusandae, odit veniam sapiente, ducimus soluta ea unde officia impedit iusto obcaecati a, hic similique quibusdam aliquam quae perferendis laudantium ipsam?",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque aspernatur odio dolore adipisci Distinctio recusandae, odit veniam sapiente, ducimus soluta ea unde officia impedit iusto obcaecati a, hic similique quibusdam aliquam quae perferendis laudantium ipsam?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
