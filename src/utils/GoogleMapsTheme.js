const googleMapsTheme = [
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#444444"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#a69aba"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#d4d1d5"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#d4cae3"
      },
      {
        visibility: "on"
      }
    ]
  }
];

export default googleMapsTheme;