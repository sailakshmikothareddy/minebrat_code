import React from 'react'

const Result = ({selectedCity, stateName}) => {
  return (
    <div>
     <h1>You have selected the State : {stateName} </h1> 
     <h1>You have selected the city : {selectedCity}</h1>
    </div>
  )
}
export default Result
