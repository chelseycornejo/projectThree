// Form.js

import { BsSun } from 'react-icons/bs'

// Create Form.js
// Utilize the functions from Plant.js (via props) to set the user input state
const Form = (props) => {

    return (
        // ensure inputs are controlled using typedValue from plant to pass down "plantGenus" state.
        <form action="" onSubmit={props.handleSubmit}>
            <label htmlFor="plantGenus" className="sr-only">Enter Plant Genus</label>
                <input type="text" id="plantGenus" placeholder="Plant Genus" value={props.typedValue} onChange={props.handleChange}/>
            
            <button type="submit">start search</button>
        </form>
    )
}

export default Form;