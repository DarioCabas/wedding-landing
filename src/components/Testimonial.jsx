import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver asdasdasdasdasdasdasdasdasdas",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: "https://i.imgur.com/Dn0qoCG.png",
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: "https://i.imgur.com/fk8eEvW.png",
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: "https://i.imgur.com/dLxxRDy.png",
  },
];
const Testimonials = () => {

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {feedback.map((card) => (
        <div class="flex flex-col px-4 py-12 rounded-lg max-w-md mx-auto my-0 feedback-card" key={card?.id}>

        <p class="font-poppins font-normal text-2xl leading-8 text-white mb-6">
          {card?.content}
        </p>
    
        <div class="flex items-center">
          <img src={card?.img} alt={card?.name} class="rounded-full " />
          <div class="ml-4">
            <h4 class="font-poppins font-semibold text-xl  text-white">
              {card?.name}
            </h4>
            <p class="font-poppins font-normal text-base text-dimWhite">
              {card?.title}
            </p>
          </div>
        </div>
      </div>
      ))}
    </Carousel>
  );

}

export default Testimonials