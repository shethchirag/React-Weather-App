const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8d235ebbdfmsh1163fd5b1bb752dp19530fjsn8e0d3c2d3790",
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
