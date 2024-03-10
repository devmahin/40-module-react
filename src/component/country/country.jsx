import { useEffect } from "react";
import { useState } from "react";
import Countries from "../countries/countries";
import "./country.css"
const Country = () => {
    let [api,setApi] = useState([])

    useEffect(() => {
        const dataAsync = async () => {
            const apiLoad = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await apiLoad.json();
        setApi(data);
        }
        dataAsync()
    }, [])


    let [visitedCountry, setVisitedCountry] = useState([]);

    function visitedCountryHandel(country){
        console.log(country)
        console.log("visited country")
        const setVisit = [...visitedCountry, country];
        setVisitedCountry(setVisit)
    }

    return (
        <div>
            <h1>API LENGTH :{api.length}</h1>

            <div>
                <h1>visited country : {visitedCountry.length}</h1>
                <ul>
                    {visitedCountry.map(val => <li key={visitedCountry.cca3}>{val.name.common}</li>)}
                </ul>
            </div>
            <div className="flexy">
            {
            api.map(countryall => <Countries 
                allData={countryall} 
                visitedCountryHandel={visitedCountryHandel}
                key={countryall.cca3}>
                </Countries>)
            }
            </div>
        </div>
    );
};

export default Country;