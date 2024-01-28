import React, { useContext, useState } from "react";
import FetchData from "./FetchData";

const AppContext = React.createContext();


// we are getting the children and that is app component in our case
const AppProvider = ({ children }) => {
  const [query, setquery] = useState("Iron Man");
  const { isLoading, isError, movie } = FetchData(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setquery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };