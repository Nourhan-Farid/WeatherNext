"use client";
import React from "react";
import Image from "next/image";
import {
  dailyFetchWeather,
  fetchWeather,
} from "../../../Interfaces/fetchWeather";
import styles from "./page.module.css";
import Celsius from "../../../assets/Images/celsius(2).png";
import Fahrenheit from "../../../assets/Images/fahrenheit(1).png";
import { useState } from "react";
import { WeatherData } from "@/Interfaces/WeatherData";
import { DailyWeatherData } from "@/Interfaces/DailyWeatherData";
import Loader from "@/app/_Components/Loader/Loader";
import WeeklySlider from "@/app/_Components/WeeklySlider/WeeklySlider";

export default function WeatherHomePage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData>();
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherData | []>();
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (!city) return;
    const weatherDetails = await fetchWeather(city);
    setWeather(weatherDetails);
    console.log(weatherDetails?.lat);
    if (weatherDetails?.lat && weatherDetails?.lon) {
      const dailyWeatherDetails = await dailyFetchWeather(
        weatherDetails.lat,
        weatherDetails.lon
      );
      console.log(dailyWeatherDetails);
      console.log(weatherDetails.lat);
      console.log(city);
      setDailyWeather(dailyWeatherDetails);
      console.log("Daily weather details:", dailyWeatherDetails);
    } else {
      console.log(city);
    }
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <div className={styles.page}>
          <div className="absolute  inset-0 bg-black/30" />
          <div className="relative font-sans px-0.5 font-medium z-[200]">
            <div className="relative top-0 w-full text-gray-800 bg-cyan-950   z-[50] shadow">
              <nav
                aria-label="top bar"
                aria-orientation="horizontal"
                className="grid bg-transparent w-full h-20"
              >
                <ul
                  aria-label="top bar"
                  aria-orientation="horizontal"
                  className="grid grid-cols-10 md:grid-cols-12 grid-rows-1 gap-2 relative w-full"
                >
                  <li className="relative col-span-6 md:col-span-8 md:px-5 pt-4 ms-24 md:ms-20">
                    <div className={styles.groupI}>
                      <button
                        onClick={handleSearch}
                        className="btn btn-ghost group w-9 h-9 left-2 absolute flex justify-center items-center bg-transparent rounded-lg cursor-pointer transition-all border-none hover:shadow hover:shadow-blue-600"
                      >
                        <i className="fa-solid fa-magnifying-glass text-white" />
                      </button>
                      <input
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Search city"
                        type="text"
                        className={styles.input}
                      />
                    </div>
                  </li>
                  <li className="col-span-4 md:col-span-4 md:col-start-11 items-center bg-blue-0">
                    <div className="relative p-5 flex items-center justify-items-center justify-end w-full">
                      <label className="swap swap-rotate text-white border-none outline-none hover:border-2 me-2">
                        <input
                          type="checkbox"
                          className="theme-controller"
                          value="cupcake"
                        />
                        {/* sun icon */}
                        <svg
                          className="swap-off h-10 w-10 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                        {/* moon icon */}
                        <svg
                          className="swap-on h-10 w-10 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                      </label>

                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultValue=""
                          className="sr-only peer"
                        />
                        <div className="group peer ms-auto ring-0 bg-[#d1d5dc5d] rounded-full outline-none duration-300 after:duration-300 w-22 h-11  shadow-md peer-checked:bg-[#d1d5dc5d]  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-8 after:w-10 after:top-1.5 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-10 peer-hover:after:scale-95">
                          <Image
                            className="absolute top-2 right-2  w-7 h-7"
                            src={Celsius}
                            alt="Celsius"
                          />
                          <Image
                            className="absolute top-2 left-1.5  w-7 h-7"
                            src={Fahrenheit}
                            alt="Fahrenheit"
                          />
                        </div>
                      </label>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="ms-26 mt-2 flex flex-col justify-between justify-items-center">
              <div className="max-w-[500px] bg-white/35 h-80 rounded-3xl mb-2.5 p-5 me-2 text-white text-2xl">
                {weather && (
                  <div className="flex flex-col justify-center justify-items-center items-center">
                    <div className="flex justify-around justify-items-center">
                      <p className="text-4xl my-2">
                        <i className="fa-solid fa-location-dot" />
                        {weather.name}
                      </p>
                      <p className="my-2 text-4xl">
                        <i className="fa-solid fa-temperature-high" />{" "}
                        {weather.temp}°C
                      </p>
                      <p> {weather.description}</p>
                      <img
                        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        alt="weather icon"
                      />
                    </div>

                    <div className="flex justify-around justify-items-center items-center text-xl">
                      <div className="">
                        <p className="mb-4">
                          Feels Like: {weather.feels_like}°C
                        </p>
                        <p className="mt-4">
                          <i className="fa-solid fa-droplet" />{" "}
                          {weather.humidity}%
                        </p>
                      </div>
                      <div className="">
                        <p className="mb-4">pressure:{weather.pressure} hPa</p>
                        <p className="mt-4">Wind:{weather.speed} Km/h</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className=" bg-white/35 rounded-3xl py-2  w-[70vw] px-5 text-white text-2xl flex justify-center items-center justify-items-center">
                <WeeklySlider dailyWeather={dailyWeather} />

                {/* {dailyWeather?.map((day: any, index: number) => (
                  <div
                    key={index}
                    className="max-w-[500px] bg-white/35  rounded-3xl p-5 my-1 text-white text-2xl"
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
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
