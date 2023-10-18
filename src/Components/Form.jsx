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
    
    //Fetch request to t.ly
    const fetchData = useCallback( async () => {
        try{
            if(longLink !== ''){
                const url = new URL(`https://t.ly/api/v1/link/shorten`);
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer W8GSCRwQ2DTTBK1TcS3OAQWaz7rJaSMNh6Hm9xkQYzuSfk8xNR7TlDrEYc2x`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({"long_url": longLink})
                })

                if(!response.ok) throw new Error(`Request Failed.`)
                
                const data = await response.json()
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