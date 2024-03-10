import { useEffect } from "react";
import { useState } from "react";
import Countries from "../countries/countries";

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

    return (
        <div>
            <h1>API LENGTH :{api.length}</h1>
            <div>
            {api.map(countryall => <Countries allData={countryall} key={countryall.cca3}></Countries>)}
            </div>
        </div>
    );
};

export default Country;