// PlantInfo.js
import axios from 'axios';

// COMPONENTS
import Form from './Form.js';
import PlantList from './PlantList.js';

// Import useState hook
import { useState } from 'react';

const Plant = () => {
    
    // initialize state to keep track of the API call - this will be used for input error handling.
    const [plants, setPlants] = useState(false);

    // initialize state to keep track of the plant genus input - this will be used for the 'q' param
    const [plantGenus, setPlantGenus] = useState('');

    // initialize state to keep track of the plant id - this will be for the secondary API call in PlantList.js to create the new detailed array of plants
    const [plantId, setPlantId] = useState([]);

    // initialize state for error handling, if any errors occur, it will display error message (i.e., 404, 429 etc.)
    const [error, setError] = useState('');

    // Create a function to get the user Plant Genus input from Form.js by passing it down via props. 
    const handleChange = (e) => {
        setPlantGenus(e.target.value);
    }
    
    // Create a function to run axios call when form is submitted 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setError('');
        setPlants(false);
        axios({
            url: 'https://perenual.com/api/species-list',
            params: {
                key: process.env.REACT_APP_API_KEY,
                q: plantGenus,
                indoor: 1
            }
        }).then((apiData) => {
            
            // utilize a conditional - if the length of the array is less than 1, then set state to 'true'. If plants is true, then the error message will be shown
            if (apiData.data.data.length < 1) {
                setPlants(true);
            } 

            let idArray = [];
            const plantArray = apiData.data.data;

            // clear Plant Genus so that the input is cleared after searching
            setPlantGenus('');
            
            // map through plantArray and push it to the idArray - this will be used in the secondary axios call in PlantList.js
            plantArray.map((plant) => {
                return idArray.push(plant.id);
            })

            // setPlantId to the idArray from above
            setPlantId(idArray);
        }).catch((error) => {
            // If there is an error, we want to set the error so we can pass down to Form.js and render the error message
            setError(error.message);
        }) 
    };
    

    return(
        <div className="plants">

            <Form handleSubmit={handleSubmit} handleChange={handleChange} typedValue={plantGenus} error={error}/>

            {/* error handling - if initial axios call returns an array.length < 1, we want to notify user to enter a valid pant genus because the input they entered is not valid */}
            {plants&&<h4>Please enter a valid Plant Genus!</h4>}
            <PlantList plantId={plantId} />
        </div>
    )
}

export default Plant;
