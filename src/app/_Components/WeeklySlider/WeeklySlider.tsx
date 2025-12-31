import React from "react";
import Slider from "react-slick";

export default function WeeklySlider({ dailyWeather }: any) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-10  slider-container w-[70vw]">
      <Slider
        {...settings}
        className="flex h-64 justify-center justify-items-center items-center ps-10 md:ps-0 bg-transparent mx-auto"
      >
        {dailyWeather?.map((day: any, index: number) => {
          return (
            <div
              key={index}
              className="max-w-[200px] h-fit bg-blue-500 flex justify-center mx-auto justify-items-center items-center rounded-3xl p-5 my-1 text-white text-2xl"
            >
              <div>
                <p>{new Date(day.date).toLocaleDateString()}</p>
                <p>{day.temp}°C</p>
                <p>{day.description}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                  alt="weather icon"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
