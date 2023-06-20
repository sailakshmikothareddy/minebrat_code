import React, { useEffect, useState } from 'react'
import CitiesList from './CitiesList';


const List = () => {
    const [selectedState, setSelectedState] = useState();
    const [states, setStates] = useState([]);
    const [stateName, setStateName] = useState('');
    console.log('sdcvbnrt', stateName)

    console.log('selectedState', selectedState);
    console.log('sss', states)

    useEffect(() => {
        fetchState();
    },[]);

    const fetchState = async () => {
        try {
            const response = await fetch(" http://api.minebrat.com/api/v1/states");
            const data = await response.json();
            setStates(data);
        } catch (error) {
            console.error("error fetching states", error);
        }
    };
    const handleStateChange = (event) => {
        console.log('sree', event.target.value);
        setSelectedState(event.target.value);
        const selectedStateObj = states.find((state) => state.stateId ===event.target.value)
        
        setStateName(selectedStateObj ? selectedStateObj.stateName : "");
        console.log('zxcvbn', selectedStateObj.stateName);
    };

    
  return (
    <div>
      <select value = {selectedState} onChange={handleStateChange}>
      <option value = "">Select a state</option>
      {states.map((state) =>(
        <option key={state.stateId} value = {state.stateId} >
            {state.stateName}
        </option>
      ))}
      </select>
      <CitiesList selectedState = {selectedState} stateName = {stateName} />
      
    </div>
  )
}

export default List
