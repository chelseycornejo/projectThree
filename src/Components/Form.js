// Form.js


const Form = (props) => {

    // initialize state to track value of the the text input - making it a controlled input
    const [textInput, setTextInput] = useState('');
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="plantGenus">Plant Genus </label>
                <input type="text" id="plantGenus" placeholder="Plant Genus" />
            </div>
            <button>start search</button>
        </form>
    )
}

export default Form;