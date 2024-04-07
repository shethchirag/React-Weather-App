import { MapPin, Search, Wind } from "react-feather";
import FetchApiData from "./Api/api";
import { useState, useEffect } from "react"; // Import useEffect
import { formatTimezone } from "dateformat";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    // This function will be called after each render if 'city' changes
    const fetchWeatherData = async () => {
      if (city !== "") {
        // Check if city is not empty
        const weatherData = await FetchApiData(city);
        setWeather(weatherData);
      }
    };

    fetchWeatherData(); // Call the function
  }, [city]); // Dependency array, useEffect will re-run if 'city' changes

  return (
    <div className="app" style={{ height: "40rem" }}>
      <h1>Weather App</h1>
      <div className="input-wrapper">
        <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          value={city}
          placeholder="Enter City Name"
        />
        <button onClick={() => setCity(city)}>
          {" "}
          {/* Useless code, replace it with fetchWeatherData() */}
          <Search />
        </button>
      </div>
      {weather?.location ? ( // Check if 'weather.location' is available
        <div className="content">
          <div className="location d-flex ">
            <MapPin />
            <h2>
              {weather.location.name}{" "}
              <span>
                ({`${weather.location.region},${weather.location.country}`})
              </span>
            </h2>
          </div>
          <p className="datetext">
            {formatTimezone(weather.location.localtime)}
          </p>
          <div className="weatherdesc d-flex flex-c">
            <img src={weather.current.condition.icon} alt="" />
            <h3>{weather.current.condition.text}</h3>
          </div>
          <div className="tempstats  d-flex flex-c">
            <h1>
              {weather.current.temp_c} <span>°C</span>
            </h1>
            <h3>Feels like {weather.current.feelslike_c}°C</h3>
          </div>
          <div className="windstats d-flex ">
            <Wind />
            <h3>
              Wind is {weather.current.wind_kph} knots in{" "}
              {weather.current.wind_degree}&deg;
            </h3>
          </div>
        </div>
      ) : (
        <div className="content">
          <h4>No Data Found!</h4>
        </div>
      )}
    </div>
  );
};

export default App;
