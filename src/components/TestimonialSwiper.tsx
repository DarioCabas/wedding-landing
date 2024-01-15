
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay, Keyboard } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';


const testimonialItems = [
  {
    image: "/img/testimonials/1.jpg",
    name: "Lorena Jácome y Santiago García ",
    text: '"De parte de Lorena y Mío queremos agradecerles por nuestra boda, todo quedó maravilloso y recibimos los mejores comentarios de nuestros invitados y familia, gracias todo su apoyo, asesoramiento y sugerencias que nos dieron sobre todo la paciencia que nos tuvieron el acople a nuestro tiempo que fue muy corto pero todo estuvo magnífico, superó nuestras expectativas y nos hicieron muy felices, de todos todo corazón Dios les pague."',
  },
  {
    image: "/img/testimonials/2.jpg",
    name: "Paola Santander y Alex Solís",
    text: '"Todo estuvo maravilloso, el lugar perfecto, los arreglos hermosos, las flores divinas, todo estuvo lindo, la comida deliciosa, todo el mundo nos felicitó y agradeció por esa comida riquísima, nosotros les agradecemos a ustedes, pero principalmente a ti Majito que estuviste más pendiente que nosotros en todo, en realidad, todo estuvo muy lindo."',
  },
  {
    image: "/img/testimonials/3.jpg",
    name: "Carlos y Carolina Llerena",
    text: '"La Victoria, mil gracias por toda la colaboración en cada cosa, estuvo espectacular sin duda alguna fue la mejor recepción q pudimos escoger para nuestra boda, muchas bendiciones Don Julio, Doña Vicky y Majo,  gracias por todo estuvo genial. Lo único q me da tristeza es que ya no bajaremos a la quinta, me encariñe muchísimo con ustedes, espero exista otra oportunidad y podamos disfrutar nuevamente con ustedes un abrazo."',
  },
  {
    image: "/img/testimonials/4.jpg",
    name: "Daniela Chiriboga y Daniel Jaramillo",
    text: '"La Victoria muchas gracias por todo!. Que hermoso que quedó todo, la decoración súpero totalmente mis expectativas y la comida estuvo demasiado rica! Gracias por todo tu apoyo durante este último año, definitivamente no pudimos elegir mejor lugar para organizar la boda!"',
  },
  {
    image: "/img/testimonials/5.jpg",
    name: "Belén Tipan y David Chuquimarca",
    text: '"De parte de David у mío, queremos agradecerles por todo, estuvo hermoso y nos encantó. Todos nos dijeron que les gustó mucho todo, en especial la comida, atención, la decoración ni se diga. Gracias infinitas a la Victoria, Don Julio, Sra. Victoria y Majo. Se lucieron!!!"',
  },
  {
    image: "/img/testimonials/6.jpg",
    name: "Aníbal Andrade – Evento Corporativo Pedidos Ya Ecuador",
    text: '"En verdad se lucieron!! Espero seguir trabajando con La Victoria!! Gran trabajo!! Un evento impecable en un lugar hermoso. Todo salió como lo planificamos."',
  },
  {
    image: "/img/testimonials/7.jpg",
    name: "Cristina Swing ",
    text: '"Gracias a todo el maravilloso equipo que hace de La Victoria un lugar tan especial. Nos apoyaron en cada detalle para el bautizo de mi hija, desde escoger una paleta de colores adecuada, la organización y sobretodo la deliciosa comida que nos sirvieron. Por siempre en nuestros corazones."',
  },
  {
    image: "/img/testimonials/8.jpg",
    name: "Ximena Pavón Paz",
    text: '"Estamos muy agradecidos por el gran servicio, decoración, comida y ambiente que tuvimos en la celebración de la Primera Comunión de nuestro hijo. Fue un día mágico para todos nosotros!!!. Que sigan adelante con su hermosa labor, bendiciones y los mejores éxitos. Totalmente recomendable, espectacular!!!!!"',
  },
  {
    image: "/img/testimonials/9.jpg",
    name: "Estefanía Ríos",
    text: '"Querido Don Julio, Doña Victoria y Majo infinitas gracias por la organización del cumpleaños de mi esposo, la decoración fue tal como lo habíamos pensado, la comida fue espectacular, todos los invitados nos comentaron que el servicio estuvo excelente. Mil gracias por todo su trabajo."',
  },
  {
    image: "/img/testimonials/10.jpg",
    name: "Estefanía Villacís ",
    text: '"Queridos amigos de La Victoria, infinitas gracias por hacer de mi fiesta de grado una hermosa ocasión, todo estuvo excelente desde la planificación de donde escogimos cada detalle hasta la puesta en escena el día del evento, la comida fue de otro mundo, gracias por su apoyo en este día tan, pero tan especial. Sin duda los recordamos con mucho cariño."',
  },
  {
    image: "/img/testimonials/11.jpg",
    name: "Mónica Castro y David Borja",
    text: '"La atención cálida y gentil de La Victoria desde el primer contacto generó confianza y la sensación de que era el lugar adecuado para la boda. La locación es acogedora y bien cuidada, con una buena vibra. El apoyo de La Victoria facilitó la organización de la boda y todos los invitados se sintieron a gusto y bien atendidos."',
  },
  {
    image: "/img/testimonials/12.jpg",
    name: "María Gabriela Vaca",
    text: '"Gracias a ustedes. Fue más de lo que esperábamos. Decoración, organización, el menú, el ambiente, la música...Realmente todo fue mágico. Gracias La Victoria. Gracias Doña Victoria, Don Julio y Majo. Son el equipo perfecto"',
  },
];

const TestimonialSwiper = () => {
  return (
    <>
      <div className="max-w-6xl px-5 mx-auto mt-16 mb-10 md:mt-36 md:mb-20 text-center">
        <h2 className="text-4xl font-bold text-center text-darkBlue text-[#556d5f] font-[Georgia]">
          Testimonios
        </h2>
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        centeredSlides={true}
        slidesPerView={1}
        grabCursor={true}
        initialSlide={1}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 4000,
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
        
        style={{//@ts-ignore
          "--swiper-pagination-color": "#556d5f",
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
                  <h3 className="text-lg font-bold text-darkBlue font-[Georgia]">{name}</h3>
                  <p className="text-sm text-center leading-loose text-darkGrayishBlue font-[Georgia]">
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