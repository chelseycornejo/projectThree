// Form.js

// Create Form.js
const Form = (props) => {

    return (
        <section>
            <h5>Need help with plant care?</h5>
            <h5>Search up the Plant Genus<span>and find your plant!</span></h5>
            <form action="" onSubmit={props.handleSubmit}>
                <label htmlFor="plantGenus" className="sr-only">Enter Plant Genus</label>
                    {/* ensure inputs are controlled using typedValue from plant to pass down "plantGenus" state. */}
                    <input type="text" id="plantGenus" placeholder="Monstera, Hoya etc." value={props.typedValue} onChange={props.handleChange}/>
                <button type="submit">start search</button>
            </form>
                {/* conditional render the error message below if props.error exists  */}
                {props.error && <h4 className="errorMsg">Uh oh! {props.error}</h4>}
        </section>
)}

export default Form;