import { useState } from "react";
import "./Country.css"
import CountryDetails from "../CountryDetails/CountryDetails";
const Country = ({country, handlerVisitedCountries, deletedVisitedCountry}) => {
    // console.log(country);
    // console.log(handlerVisitedCountries)
    const {name, flags, population}=country;
    const [visited, setVisited] = useState(false);
    const handleVisit=()=>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited-country'}`}>
            <h3 style={{color:visited?'purple':'black'}}>Name: {name?.common}</h3>
            <img className="flag" src={flags?.png} alt=""/>
            <h5>Population: {population}</h5>
            <button onClick={()=>{
                handleVisit();
                if (!visited) {
                    handlerVisitedCountries(country);  // If it's not visited, add it
                } else {
                    deletedVisitedCountry(country);   // If it's already visited, remove it
                }
            }}> {visited?'visited':'visit'}</button>
            <hr />
            <CountryDetails country={country} handlerVisitedCountries={handlerVisitedCountries} deletedVisitedCountry={deletedVisitedCountry}></CountryDetails>
        </div>
    );
};

export default Country;