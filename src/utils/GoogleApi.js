export const GoogleApi = (options) => {
  options = options || {};

  const apiKey = options.apiKey;
  // See https://developers.google.com/maps/documentation/javascript/libraries
  const libraries = options.libraries || [];
  const client = options.client;
  const URL = "https://maps.googleapis.com/maps/api/js";

  const googleVersion = "3.22";
  let channel = null;
  let language = null;
  let region = null;

  const url = () => {
    let url = URL;
    let params = {
      key: apiKey,
      callback: "CALLBACK_NAME",
      libraries: libraries.join(","),
      client: client,
      v: googleVersion,
      channel: channel,
      language: language,
      region: region
    };

    let paramStr = Object.keys(params)
      .filter(k => !!params[k])
      .map(k => `${k}=${params[k]}`)
      .join("&");

    return `${url}?${paramStr}`;
  };

  return url();
};

export default GoogleApi;
