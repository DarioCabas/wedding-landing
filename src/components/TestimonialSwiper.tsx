
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const testimonialItems = [
  {
    image: "https://img.freepik.com/foto-gratis/animada-entusiasta-decidida-sonriente-confiada-asiatica-lista-abordar-cualquier-tarea-cruzar-dedos-sobre-pecho-asertiva-segura-si-misma-sonriente-satisfecha-parece-profesional-fondo-blanco_176420-51110.jpg?w=1380&t=st=1699915525~exp=1699916125~hmac=12e0bbd79b2ffe6e5c59267fc1d1360db74dc7af522dde9a26e26f664d924ead",
    name: "Anisha Li",
    text: '"Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."',
  },
  {
    image: "https://img.freepik.com/foto-gratis/animada-entusiasta-decidida-sonriente-confiada-asiatica-lista-abordar-cualquier-tarea-cruzar-dedos-sobre-pecho-asertiva-segura-si-misma-sonriente-satisfecha-parece-profesional-fondo-blanco_176420-51110.jpg?w=1380&t=st=1699915525~exp=1699916125~hmac=12e0bbd79b2ffe6e5c59267fc1d1360db74dc7af522dde9a26e26f664d924ead",
    name: "Ali Bravo",
    text: '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."',
  },
  {
    image: "https://img.freepik.com/foto-gratis/animada-entusiasta-decidida-sonriente-confiada-asiatica-lista-abordar-cualquier-tarea-cruzar-dedos-sobre-pecho-asertiva-segura-si-misma-sonriente-satisfecha-parece-profesional-fondo-blanco_176420-51110.jpg?w=1380&t=st=1699915525~exp=1699916125~hmac=12e0bbd79b2ffe6e5c59267fc1d1360db74dc7af522dde9a26e26f664d924ead",
    name: "Richard Watts",
    text: '"Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"',
  },
  {
    image: "https://img.freepik.com/foto-gratis/animada-entusiasta-decidida-sonriente-confiada-asiatica-lista-abordar-cualquier-tarea-cruzar-dedos-sobre-pecho-asertiva-segura-si-misma-sonriente-satisfecha-parece-profesional-fondo-blanco_176420-51110.jpg?w=1380&t=st=1699915525~exp=1699916125~hmac=12e0bbd79b2ffe6e5c59267fc1d1360db74dc7af522dde9a26e26f664d924ead",
    name: "Shanai Gough",
    text: '"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."',
  },
];

const TestimonialSwiper = () => {
  return (
    <>
      <div className="max-w-6xl px-5 mx-auto mt-16 mb-10 md:mt-36 md:mb-20 text-center">
        <h2 className="text-4xl font-bold text-center text-darkBlue">
          Que dicen de nosotros
        </h2>
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        slidesPerView={1}
        grabCursor={true}
        initialSlide={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          560: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
        }}
      >
        {testimonialItems.map(({ image, name, text }, index) => {
          return (
            <SwiperSlide key={index} className="container p-4 py-12">
              <div className="flex">
                <div className="container pt-5 p-10 flex flex-col self-stretch items-center space-y-6 rounded-lg bg-veryLightGray">
                  <img
                    src={image}
                    className="-mt-16 testimonial-image rounded-full object-cover h-48 w-48"
                    alt="testimonial image"
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "1",
                      maxWidth: "80px",
                    }}
                  />
                  <h3 className="text-lg font-bold text-darkBlue">{name}</h3>
                  <p className="text-sm text-center leading-loose text-darkGrayishBlue">
                    {text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSwiper;