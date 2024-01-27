// 1. context --> warehouse
// 2. Provider --> delivery
// 3. Consumer --> send karna hai 
// .env file to use hide the data use api keys
// Step 1: Create a context

import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`



// Step 2: Create a provider component
const AppProvider = ({children})=>{

  const [isLoading, setisLoading] = useState(true);
  const [movie,setmovie] = useState([]);
  const [isError,setisError] = useState({show:'false',msg:""})
  const [query,setquery] = useState("Iron Man");

// Function to fetch movie data from the API
  const getMovie = async(url)=>{
    try{
       const res = await fetch(url);
       const data = await res.json();
       console.log(data);

       if(data.Response === 'True'){
        setisLoading(false);
        setmovie(data.Search || data);
       }else{
        setisError({show:true,msg:data.error})
       }

    }catch(error){
      console.log(error);
    }
  }
// useEffect to fetch movie data when the component mounts
  useEffect(()=>{

    setTimeout(()=>{
      getMovie(`${API_URL}&s=${query}`);
    },3000)

  
  },[query])

  // Step 3: Provide the context value to the wrapped components
  return <AppContext.Provider value={{movie,isLoading,isError,query,setquery}}>
  {children}
  </AppContext.Provider>
}

// global custom hook 
const useGlobalContext = () =>{
  return useContext(AppContext);
}

export {AppContext,AppProvider, useGlobalContext}