"use client"
// import Slider from "react-slick"
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div
      className="w-[90vw] mx-auto rounded-3xl
                    xl:rounded-[1.8rem] lg:w-[95vw] lg:rounded-2xl
                    md:w-[90vw] md:rounded-[1.2rem]
                    sm:rounded-[1rem] xs:rounded-[0.8rem]"
    >
      <Slider {...settings}>
        {[1, 2, 3].map((index) => (
          <div key={index}>
            <Image
              className="w-[90vw] block rounded-3xl
                         xl:rounded-[1.8rem] lg:rounded-2xl
                         md:rounded-[1.2rem] sm:rounded-[1rem]
                         mx-auto"
              src={"/Assets/team.png"}
              alt={`Slide ${index}`}
              width={1000}
              height={500}
              layout="responsive"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel

