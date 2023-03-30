// PlantList.js
import axios from 'axios';

// Import useEffect, useState hooks
import { useEffect, useState } from 'react';

// COMPONENTS
import PlantCard from './PlantCard.js';

// ASSETS
import placeholder from '../assets/placeholder1.png';

const PlantList = (props) => {
    
    // initialize state for the new plant array that will be used to map through in the secondary axios below for more plant info details
    const [newPlants, setNewPlants] = useState([]);

        // utilize useEffect to only map through the plantsId array and run the axios calls ONLY when the plantId from Plant.js is set.
        useEffect(() => {

            setNewPlants([]);
            let newPlantArray = [];

            // map through the idArray from Plant.js to create the new array of detailed plant objects
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
                        setNewPlants([...newPlantArray]);
                }));
            });
        }, [props.plantId]);

        return (
                <ul className="plantCardContainer wrapper">
                    {/* map through each plant of the newPlants array and pass the information down to PlantCard.js via props */}
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