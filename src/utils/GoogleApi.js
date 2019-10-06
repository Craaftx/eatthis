export const GoogleApi = options => {
  options = options || {};

  const apiKey = options.apiKey;
  // See https://developers.google.com/maps/documentation/javascript/libraries
  const libraries = options.libraries || [];
  const client = options.client;
  const URL = "https://maps.googleapis.com/maps/api/js";

  const url = () => {
    let url = URL;
    let params = {
      key: apiKey,
      libraries: libraries.join(","),
      client: client,
    };

    let paramStr = Object.keys(params)
      .filter(key => !!params[key])
      .map(key => `${key}=${params[key]}`)
      .join("&");

    return `${url}?${paramStr}`;
  };

  return url();
};

export default GoogleApi;
