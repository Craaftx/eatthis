const sleep = m => new Promise(r => setTimeout(r, m));

const requestFields = [
  "address_component",
  "adr_address",
  "formatted_address",
  "geometry",
  "icon",
  "name",
  "permanently_closed",
  "photo",
  "type",
  "url",
  "utc_offset",
  "vicinity"
];

// Get data for Basic Plan only
// See https://developers.google.com/maps/billing/gmp-billing#basic-data
const GooglePlace = async request => {
  const service = new window.google.maps.places.PlacesService(request.map);
  console.log("Start Google Place Script");
  const requests = await new Promise((firstResolve, firstReject) => {
    const requestsPromises = [];
    service.nearbySearch(request, async (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < 2 /* results.length */; i += 1) {
          console.log(`for iteration ${i}`);
          const detailsRequest = {
            placeId: results[i].place_id,
            fields: requestFields
          };
          requestsPromises.push(
            new Promise((resolve, reject) => {
              service.getDetails(detailsRequest, (place, statusDetails) => {
                const result = results[i];
                if (
                  statusDetails ===
                  window.google.maps.places.PlacesServiceStatus.OK
                ) {
                  resolve({
                    ...place,
                    place_id: result.place_id,
                    rating: result.rating,
                    price_level: result.price_level,
                    user_ratings_total: result.user_ratings_total
                  });
                }
                reject(new Error(`Request can't be made : ${statusDetails}`));
              });
            })
          );
          // eslint-disable-next-line no-await-in-loop
          await sleep(300);
        }
        firstResolve(requestsPromises);
      } else {
        firstReject(new Error(`Request can't be made : ${status}`));
      }
    });
  });

  console.log(`GooglePlace request count ${requests.length} values`);
  return Promise.all(requests).then(
    values => {
      console.log(`GooglePlace promise end with ${values.length} values`);
      return values;
    },
    reason => {
      return reason;
    }
  );
};

export default GooglePlace;
