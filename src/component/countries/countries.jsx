import { useState } from 'react';
import './countries.css';
const Countries = ({allData,visitedCountryHandel}) => {
    const {name , flags, area, population,cca3} = allData;
    const [visited,setVisited]= useState(false);
    function handelclick(){
        setVisited(!visited)
    }
    
    return (
        <div className={`box ${visited && 'visite_country'}`}>
            <img src={flags.png} alt="" />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
            <h5>Name : {name.common}</h5>
            <h5>area : {area}</h5>
            <h5>cca3 : {cca3}</h5>
            </div>
            <button className={`${visited && 'button_color'}`} onClick={handelclick}>Visited</button>
            {visited ? "I have visited this country" : "I want to visited"}
            <br />
            <button onClick={() => visitedCountryHandel(allData)}>Mark visit</button>
        </div>
    );
};

export default Countries;