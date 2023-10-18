import PropTypes from 'prop-types'
import { useState, useEffect } from "react";

export default function Form({setData}){
    const [input, setInput] = useState("");
    const [longLink, setLongLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(input);
        setInput("");
    }

    const setUrl = link => setLongLink(link)
    

    useEffect(() => {
        if(longLink !== ''){
            const fetchData = async () => {
                const response = await fetch(new URL(`https://t.ly/api/v1/link/shorten`), {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({"long_url": longLink})
                })
                
                const data = await response.json()
                setData(data);
            }
            fetchData()
        }
    },[longLink])

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