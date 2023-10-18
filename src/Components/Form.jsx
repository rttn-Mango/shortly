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

    //Fetch request to t.ly api
    const sendData = useCallback( async () => {
        try{
            if(longLink !== ''){
                const response = await fetch(new URL(`https://t.ly/api/v1/link/shorten`), {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({"long_url": longLink})
            })

            if(!response.ok) throw new Error(`Request Failed`)

            const data = await response.json()
            setData(data);
            }
        }catch(e){ 
            throw new Error(`Something went wrong. ${e}`)
        }
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