// PlantCard.js

import { Fragment } from 'react';

// ASSETS (placeholder image, icons...)
import placeholder from '../assets/placeholder1.png';
import { BsSun } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';
import { BiDonateHeart } from 'react-icons/bi';
import { BsPinMap } from 'react-icons/bs';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import { GiPlantRoots } from 'react-icons/gi';
import { GiPlantSeed } from 'react-icons/gi';
import { RxHeight } from 'react-icons/rx';

const PlantCard = (props) => {
    return (
        <li className="card">
            <img src={props.photos === 'https://perenual.com/storage/species_image/2_abies_alba_pyramidalis/small/49255769768_df55596553_b.jpg' ? placeholder : props.photos} alt={props.scienceName} />
            <div className="overlay">
                <h3>{props.scienceName}</h3>   
                <p><strong>{props.commonName}</strong></p>    
                <p>{props.plantFamily && <Fragment><MdOutlineFamilyRestroom /> <span className="sr-only">Family</span> {props.plantFamily}</Fragment>}</p>    
                <p>{props.origin.length > 1 && <Fragment><BsPinMap /> <span className="sr-only">Pin on Map</span>{props.origin}</Fragment>}</p>    
                <p>{props.care && <Fragment><BiDonateHeart /> <span className="sr-only">Heart in Hand</span> {props.careLevel}</Fragment>}</p>    
                <p>{props.sunlight.length > 1 && <Fragment><BsSun /> <span className="sr-only">Sun</span> {props.sunlight}</Fragment>}</p>    
                <p>{props.watering !== '' && <Fragment><IoWaterOutline /> <span className="sr-only">Water Droplet</span> {props.watering}</Fragment>}</p>     
                <p>{props.soil.length > 1 && <Fragment><GiPlantRoots /><span className="sr-only">Baby plant with roots in soil</span>{props.soil}</Fragment>}</p>    
                <p>{props.propagation.length > 1 && <Fragment><GiPlantSeed /> <span className="sr-only">Seed with sprout</span>{props.propagation}</Fragment>}</p>    
                <p>{props.dimensions !== '' && <Fragment><RxHeight /> <span className="sr-only">arrows point up and down</span>{props.dimensions}</Fragment>}</p>    
            </div>
        </li>
    )
}

export default PlantCard;