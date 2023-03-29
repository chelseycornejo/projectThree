// PlantInfo.js
import axios from 'axios';

// COMPONENTS
import Form from './Form.js';
import PlantList from './PlantList.js';

// Import useState hook
import { useState } from 'react';

// Create Plants.js 
const Plant = () => {
    
    // initialize state to keep track of the API call - NO LONGER NEEDED DUE TO 2ND AXIOS IN PLANTLIST
    // const [plants, setPlants] = useState([]);
    // initialize state to keep track of the plant genus input
    const [plantGenus, setPlantGenus] = useState('');

    // initialize state to keep track of the plant id - this will be for the next API call
    const [plantId, setPlantId] = useState([]);
    // Create a function to get the user Plant Family input from Form.js
        // Utilize useState to save the Plant Family input and pass it down to PlantList via props
    const handleChange = (e) => {

        setPlantGenus(e.target.value);
    }
    
    const handleSubmit = (e) => {

        e.preventDefault(); 
        axios({
            url: 'https://perenual.com/api/species-list',
            params: {
                key: process.env.REACT_APP_API_KEY,
                q: plantGenus,
                indoor: 1
            }
        }).then((apiData) => {
            let idArray = [];
            const plantArray = apiData.data.data;

            setPlantGenus('');
            
            plantArray.map((plant) => {
                return idArray.push(plant.id);
            })

            setPlantId(idArray);
        })
    }
    

    return(
        <div>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} typedValue={plantGenus}/>
            <PlantList plantId={plantId}/>
        </div>
    )
}

export default Plant;
