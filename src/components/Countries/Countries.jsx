import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  };
  const handleVisitedCountries = (country) => {
    setVisitedCountries([...visitedCountries, country]);
    console.log(country);
  };

  const deletedVisitedCountry = (country) => {
    if (visitedCountries.length) {
        //One way to remove(even tho we should never directly make any change on the state. It's considered bad practice.)
    //   const index = visitedCountries.indexOf(country);
    //   if (index !== -1) {
    //     visitedCountries.splice(index, 1); // Remove 1 item at found index
    //   }
        // setVisitedCountries([...visitedCountries]);


        //another way to remove.
        // setVisitedCountries(visitedCountries.filter(visitedCountry=> visitedCountry!== country));
        const newArr=visitedCountries.filter(visitedCountry=> visitedCountry?.name?.common!== country?.name?.common);  
        setVisitedCountries(newArr); 
    }
  };
  return (
    <div>
      <h3>Total Countries {countries.length}</h3>
      <div>
        {visitedCountries.length>0 && visitedCountries.map((country, index) => (
          <li key={index}>{country.name?.common}</li>
        ))}
      </div>
      <div className="flag-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handlerVisitedCountries={handleVisitedCountries}
            deletedVisitedCountry={deletedVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
