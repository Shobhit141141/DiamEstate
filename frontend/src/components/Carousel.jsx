import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Optional: for additional styling

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      id: 1,
      image:
        "https://www.wilsonhomes.com.au/sites/default/files/styles/blog_hero_banner/public/My%20project%20-%202023-06-20T095818.329%20%281%29_0.jpg?itok=UbtVbhT0",
      title: "Slide 1",
      description: "This is the description for slide 1",
    },
    {
      id: 2,
      image:
        "https://www.wilsonhomes.com.au/sites/default/files/styles/blog_hero_banner/public/My%20project%20-%202023-06-20T095818.329%20%281%29_0.jpg?itok=UbtVbhT0",
      title: "Slide 2",
      description: "This is the description for slide 2",
    },
    {
      id: 3,
      image:
        "https://images.adsttc.com/media/images/6077/43aa/ebb5/fc01/6543/b86b/newsletter/fi-img-1234.jpg?1618428850",
      title: "Slide 3",
      description: "This is the description for slide 3",
    },
  ];

  return (
    <div className="flex flex-col h-[78vh] w-full md:w-[50vw] bg-gradient-to-r from-slate-200 to-stone-300 overflow-hidden rounded-2xl ">
      <Slider {...settings} className="overflow-y-hidden p-2">
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[50vh] rounded-2xl">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[100%] overflow-y-hidden object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="rounded-3xl m-2 p-4 text-slate-700">
        <h2 className="text-2xl font-bold">BELL AIR MANSION</h2>
        <p className="text-lg font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum
          consequuntur enim molestias error doloremque sapiente temporibus nemo
          est explicabo, maiores accusantium at praesentium magni inventore,
          tenetur similique asperiores unde!
        </p>
      </div>
    </div>
  );
};

export default Carousel;
