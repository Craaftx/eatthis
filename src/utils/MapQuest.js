import config from "../config";

const MapQuest = async (mode, queryParameters) => {
  let URL = "";

  switch (mode) {
    case "geocoding":
      URL = "http://www.mapquestapi.com/geocoding/v1/reverse";
      break;
    default:
      break;
  }

  const url = () => {
    const params = {
      key: config.mapQuest.consumer_key,
      ...queryParameters
    };

    const paramStr = Object.keys(params)
      .filter(key => !!params[key])
      .map(key => `${key}=${params[key]}`)
      .join("&");

    return `${URL}?${paramStr}`;
  };

  const fetchedUrl = url();
  if (fetchedUrl) {
    const response = await fetch(fetchedUrl);
    const json = await response.json();
    return json;
  }
  return undefined;
};

export default MapQuest;
