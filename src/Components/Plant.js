// PlantInfo.js
import axios from 'axios';
import {useState} from 'react';

// COMPONENTS
import Form from './Form.js';

// Import useState hook
import { useState } from 'react';

// Create Plants.js 
const Plant = () => {
    
    // initialize state to keep track of the API call
    const [plants, setPlants] = useState([]);
    // initialize state to keep track of the plant genus input
    const [plantGenus, setPlantGenus] = useState(null);
    

    // 2 Define a submit event handler which will be passed down via props to the Form component 
    // when this event handler function is called (i.e., when the form is submitted) it will trigger a call to the weather API

    const handleSubmit = () => {
        e.preventDefault(); 
        
        setPlantGenus(e.target.value);

        axios({
            url: 'https://perenual.com/api/species-list',
            params: {
                key: process.env.REACT_APP_API_KEY,
                q: plantGenus,
                indoor: 1
            }
        }).then((apiData) => {
            setPlants(apiData.data.data);
        }) 

    }


    return(
        <Form handleSubmit={handleSubmit} />
    )
}

export default Plant;



    // Utilize useEffect to make an API call when the Plant Family input is changed
        // Create Form.js 
        // Utilize the function from Plant.js (via props) to set the user input state
        // Utilize useState to ensure input is a controlled input
    // Create a function to get the user Plant Family input from Form.js
    // Utilize useState to save the Plant Family input and pass it down to PlantList via props
// Create PlantList.js
    // PlantList.js will receive the array from plants via props
    // Map through the array in PlantList
    // Include attributes for img, alt, watering, sunlight, scientific name, key for the PlantCard to pass down to PlantCard.js
// Create PlantCard.js 
    // Once info is received from PlantList.js we will render te img
    // Render an overlay (on hover/focus) or modal (on click) with the plant info

// STRETCH GOALS:
    // Utilize another API call for specific details (new url, specific ID of plant)
    // Give the user the ability to filter down by watering needs, sunlight needs, pet friendly 



    