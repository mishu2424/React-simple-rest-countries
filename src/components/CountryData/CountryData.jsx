const CountryData = (props) => {
    const {country} = props;
    return (
        <div>
            <h3>Region: {country?.region}</h3>
        </div>
    );
};

export default CountryData;