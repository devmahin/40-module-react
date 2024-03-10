import { useEffect } from "react";
import { useState } from "react";

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
        </div>
    );
};

export default Country;