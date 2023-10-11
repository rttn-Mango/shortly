import { useState, useEffect, useCallback } from "react";
import StatCard from "../../Components/StatCard";
import Form from "../../Components/Form";

export default function MiddleContents(){
    const [link, setLink] = useState("");
    const [shortLink, setShortLink] = useState({
        originalLink: "",
        shortLink: ''
    })
    const [copyText, setCopyText] = useState(false);

    const STAT_CARD_DATA = [
        {
            path: "/icon-brand-recognition.svg",
            subHeading: "Brand Recognition",
            content: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
        },
        {
            path: "/icon-detailed-records.svg",
            subHeading: "Detailed Records",
            content: "Gain insights on who is clicking your links. Knowing when and where people enggage with your content helps inform better decisions."
        },
        {
            path: "/icon-fully-customizable.svg",
            subHeading: "Fully Customizable",
            content: "Improve brand awareness and content discoverability through customizable links. Supercharging audience with engagement."
        }
    ];

    const setLongLink = (link) => setLink(link);

    const setData = useCallback((data) => {
        setShortLink(() => {
            let tempLink = {...shortLink}
            tempLink.originalLink = data.result.original_link;
            tempLink.shortLink = data.result.full_short_link;
            return tempLink
        })
    }, [shortLink])

    const copyTextToClipboard = () => {
        navigator.clipboard.writeText(shortLink.shortLink)
        .then(() => {
            setCopyText(!copyText);
        })
        .catch(() => {
            alert("Copy Failed.");
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            if(link !== ''){
                //api.shrtco.de is currently down so this is not gonna work
                const response  = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
                console.log(response);
                if (response.status !== 200 || response.status !== 201){
                    throw new Error("Request Failed.")
                }
                const data = await response.json();
                setData(data)
            }
        }

        fetchData();
    }, [link, setData])

    return(
        <section className="middle">

            <div className="middle__shorten | container">
                <Form setLongLink={setLongLink}/>
                {
                    shortLink.shortLink !== '' ? 
                    <div className="middle__shorten--link">
                        <p className="og-link">{shortLink.originalLink}</p>
                        <div className="middle__shorten--link-group">
                            <p>{shortLink.shortLink}</p>
                            <button type="button" onClick={copyTextToClipboard} className={copyText ? "copied" : ""} value={shortLink.shortLink}>{copyText ? "Copied!" : "Copy"}</button>
                        </div>
                    </div>
                    : null
                }
            </div>

            <div className="middle__stats | container">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>

                <div className="middle__stats--cards">
                    {
                        STAT_CARD_DATA.map(card => {
                            return(
                                <StatCard 
                                    key={card.path}
                                    path={card.path}
                                    subHeading={card.subHeading}
                                    content={card.content}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}