import React, { useEffect, useState } from 'react'
import Result from './Result';

const CitiesList = ({selectedState, stateName}) => {
    console.log('selectState', stateName);
  const [cities, setCities] = useState([]);
  const [showResult, setShowresult] = useState(false);
  const [selectedCity, setselectedCity] = useState('');
  console.log('cities', cities)
  useEffect(() => {
    if(selectedState){
        fetchCities(selectedState);
    }else {
        setCities([]);
    }
  },[selectedState]);

  const handleCityChange = (event) => {
    console.log('srrrrrrr', event.target.value);
    setselectedCity(event.target.value);
    
};

   const fetchCities = async (stateId) => {
    console.log('lakshmi', stateId);
    try {

        const response = await fetch(
            `http://api.minebrat.com/api/v1/states/cities/${stateId}`
        );
        const data = await response.json();
        console.log('sai', data);
        setCities(data);
   }
   catch(error) {
        console.error("Error fetching cities", error);
       };
   };

   const handleSubmit = () => {
    setShowresult(true);
}
  return (
    <>
   <select value = {selectedCity} onChange={handleCityChange}>
    <option value= "">Select a city</option>
    {cities.map ((city) => (
        <option key = {city.cityId} value = {city.cityName}>
            {city.cityName}
        </option>
    ))}
    
     
   </select>
   <button onClick={handleSubmit}>Submit</button>
      {showResult && <Result selectedCity= {selectedCity} stateName = {stateName} />}
   </>
  )
}

export default CitiesList
