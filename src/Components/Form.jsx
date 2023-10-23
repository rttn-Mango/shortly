import PropTypes from 'prop-types'
import { useState, useEffect, useCallback } from "react";

export default function Form({setData}){
    const [input, setInput] = useState("");
    const [longLink, setLongLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(input);
        setInput("");
    }

    const setUrl = link => setLongLink(link)
    
    //Fetch request to bit.ly api
    const fetchData = useCallback( async () => {
        try{
            if(longLink !== ''){
                const url = new URL(`https://api-ssl.bitly.com/v4/shorten`);
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({"long_url": longLink})
                })      
                const data = await response.json()
                console.log(data);
                setData(data);
            }
        }catch (e) {
            throw new Error(`Something went wrong. ${e}`)
        }
    },[longLink]);

    useEffect(() => {fetchData()},[fetchData])

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