const GoogleApi = opts => {
  const options = opts || {};

  const { apiKey, client } = options;
  // See https://developers.google.com/maps/documentation/javascript/libraries
  const libraries = options.libraries || [];
  const URL = "https://maps.googleapis.com/maps/api/js";

  const url = () => {
    const params = {
      key: apiKey,
      libraries: libraries.join(","),
      client,
    };

    const paramStr = Object.keys(params)
      .filter(key => !!params[key])
      .map(key => `${key}=${params[key]}`)
      .join("&");

    return `${URL}?${paramStr}`;
  };

  return url();
};

export default GoogleApi;
