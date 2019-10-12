import React from "react";

const MyContext = React.createContext({
  map: null,
  updateMap: () => {}
});

export default MyContext;
