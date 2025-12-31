import axios from "axios";
import { WeatherData } from "./WeatherData"; // optional if you move the interface to a separate file
import { DailyWeatherData } from "./DailyWeatherData";

export async function fetchWeather(
  city: string
): Promise<WeatherData | undefined> {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;

    const response = await axios.get(url);

    // let { temp, feels_like, humidity, pressure, temp_min, temp_max } =
    //   response.data.main;
    const temp = Math.floor(response.data.main.temp);
    const feels_like = Math.floor(response.data.main.feels_like);
    const humidity = Math.floor(response.data.main.humidity);
    const pressure = Math.floor(response.data.main.pressure);
    const speed = Math.floor(response.data.wind.speed);
    // const temp_min = Math.floor(response.data.main.temp_min);
    // const temp_max = Math.floor(response.data.main.temp_max);
    const { description, main, icon } = response.data.weather[0];
    const { name } = response.data;
    const { lat, lon } = response.data.coord;
    console.log(
      temp,
      feels_like,
      humidity,
      pressure,
      description,
      main,
      lat,
      lon,
      icon,
      speed
    );
    console.log(city);
    console.log(response.data);
    return {
      temp,
      feels_like,
      humidity,
      pressure,
      name,
      main,
      description,
      lat,
      lon,
      icon,
      speed,
    };
  } catch (error: any) {
    console.error(
      "Weather fetch failed:",
      error.response?.data || error.message
    );
    return undefined;
  }
}
export async function dailyFetchWeather(
  lat: number,
  lon: number
): Promise<DailyWeatherData | undefined> {
  try {
    console.log("Calling dailyFetchWeather with:", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;

    const response = await axios.get(url);
    const forecasts = response.data.list;
    const dailyForecasts = forecasts.filter((entry: any) =>
      entry.dt_txt.includes("12:00:00")
    );

    console.log("Full response from One Call API:", response.data);
    console.log(response.data);

    return dailyForecasts.map((entry: any) => ({
      date: entry.dt_txt,
      temp: Math.floor(entry.main.temp),
      description: entry.weather[0].description,
      icon: entry.weather[0].icon,
    }));
  } catch (error: any) {
    console.error(
      "Forecast fetch failed:",
      error.response?.data || error.message
    );
    return undefined;
  }
}
