import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    const {country}=props
    return (
        <div>
            <h3>Capital:{country?.capital}</h3>
            <hr />
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;