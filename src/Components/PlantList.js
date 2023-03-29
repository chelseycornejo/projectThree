// PlantList.js

// Create PlantList.js
    // PlantList.js will receive the array from plants via props
    // Map through the array in PlantList
    // Include attributes for img, alt, watering, sunlight, scientific name, key for the PlantCard to pass down to PlantCard.js
// Create PlantCard.js 
    // Once info is received from PlantList.js we will render te img
    // Render an overlay (on hover/focus) or modal (on click) with the plant info
import axios from 'axios';
import { useEffect, useState } from 'react';
import PlantCard from './PlantCard.js';
import placeholder from '../assets/placeholder1.png';

const PlantList = (props) => {
    
    const [newPlants, setNewPlants] = useState([]);
    
        useEffect(() => {
            let newPlantArray = [];

            props.plantId.map((plantNum) => {
                return (
                axios({
                    url: 'https://perenual.com/api/species/details/' + plantNum,
                    params: {
                        key: process.env.REACT_APP_API_KEY,
                    }
                }).then((plantData) => {

                    let plantObj = plantData.data;
                    newPlantArray.push(plantObj);
                    // spread operator is making it a new array - safer.
                    setNewPlants([...newPlantArray]);
                }))
            })
        }, [props.plantId]);

        return (
                <ul className="plantCardContainer wrapper">
                    
                    {newPlants.map((plants) => {
                        return (
                            <PlantCard 
                                key={plants.id} 
                                photos={plants.default_image == null ? placeholder : plants.default_image.small_url} 
                                commonName={plants.common_name} 
                                scienceName={plants.scientific_name[0]} 
                                sunlight={plants.sunlight.join(', ')} 
                                careLevel={plants.care_level} 
                                watering={plants.watering} 
                                dimensions={plants.dimension}
                                plantFamily={plants.family}
                                origin={plants.origin.join(', ')}
                                propagation={plants.propagation.join(', ')}
                                soil={plants.soil.join(', ')}
                            />
                            )
                        })}
                </ul>
        )

    }   



    export default PlantList;