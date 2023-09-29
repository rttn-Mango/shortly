import PropTypes from 'prop-types'
import { useState } from "react";

export default function Form({setLongLink}){
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLongLink(input);
        setInput("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="url">Enter a URL</label>
            <input
                onChange={e => {setInput(e.target.value)}}
                value={input}
                type="url" 
                name="url" 
                id="url" 
                required 
                placeholder="Shorten a link here..."
            />
            <button type="submit">Shorten It!</button>
        </form>
    )
}

Form.propTypes = {
    setLongLink: PropTypes.func
}