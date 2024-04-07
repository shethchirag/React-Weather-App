const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};
const FetchApiData = async (city) => {
  try {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default FetchApiData;
