import PropTypes from 'prop-types'
import { useState, useEffect, useCallback } from "react";
import axios from 'axios';

export default function Form({setData}){
    const [input, setInput] = useState("");
    const [longLink, setLongLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(input);
        setInput("");
    }

    const setUrl = link => setLongLink(link)

    //Fetch request to backend
    const sendData = useCallback(() => {
        try{
            axios({
                method: 'GET',
                url: `http://localhost:3000/short`,
                params: {long_url: longLink},
            }).then(response => {
                setData(response.data);
            }).catch(e => console.error(e))
        }catch(e){console.log(e);}
    },[longLink]);


    useEffect(() => {sendData()},[sendData])

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
    setData: PropTypes.func
}