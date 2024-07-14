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
      <div className="rounded-3xl m-2 p-4 text-slate-700  overflow-hidden h-[40vh]">
        <h2 className="text-2xl font-bold">BELL AIR MANSION</h2>
        <div className="overflow-scroll p-2 h-[30vh] ">
        <p className="text-lg font-light h-[90%] p-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum
          consequuntur enim molestias error doloremque sapiente temporibus nemo
          est explicabo, maiores accusantium at praesentium magni inventore,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          deleniti architecto mollitia quia omnis ad eveniet. Quam neque sequi
          accusantium natus ipsam itaque ea sit quidem recusandae vitae tenetur
          assumenda, tempora magni explicabo quo hic? Quo hic voluptatum
          similique veritatis sed porro recusandae cupiditate magni commodi
          corporis necessitatibus, itaque, harum laboriosam dolorem aperiam
          repellendus voluptate corrupti omnis neque facere repudiandae sint
          optio. Commodi nostrum voluptatibus repellat hic reprehenderit sed,
          omnis sint obcaecati, voluptate officiis esse rem id inventore quidem
          quibusdam corrupti cupiditate unde voluptates aperiam architecto
          ullam. Vero distinctio ullam eos ut voluptatum. Nemo odit praesentium
          debitis voluptatibus enim nobis ex necessitatibus illo tenetur dolorum
          quas minus unde ut perspiciatis rerum laborum quia eaque magnam
          labore, tempore aliquid saepe, quaerat illum temporibus. Quas quae
          dolore qui minima at accusamus repudiandae modi voluptatum unde dicta
          quo, ullam tempore molestiae saepe commodi praesentium sequi. Eum
          vitae ipsum eos aperiam animi ipsam, sequi iure veritatis alias dicta
          consequatur quos voluptate pariatur porro nobis. Repudiandae aliquid
          eos molestias iusto quasi doloremque sequi incidunt soluta temporibus!
          Dolorem nulla natus tempora unde iusto voluptates distinctio minima
          blanditiis perferendis aut, voluptatibus animi beatae repudiandae quia
          expedita, ratione incidunt nobis quisquam ipsa? Illo exercitationem
          hic amet debitis nesci ratione incidunt nobis quisquam ipsa? Illo exercitationem
        </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
