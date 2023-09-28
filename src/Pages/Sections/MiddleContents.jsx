import StatCard from "../../Components/StatCard";

export default function MiddleContents(){
    const STAT_CARD_DATA = [
        {
            path: "src/assets/icon-brand-recognition.svg",
            subHeading: "Brand Recognition",
            content: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
        },
        {
            path: "src/assets/icon-detailed-records.svg",
            subHeading: "Detailed Records",
            content: "Gain insights on who is clicking your links. Knowing when and where people enggage with your content helps inform better decisions."
        },
        {
            path: "src/assets/icon-fully-customizable.svg",
            subHeading: "Fully Customizable",
            content: "Improve brand awareness and content discoverability through customizable links. Supercharging audience with engagement."
        }
    ];

    return(
        <section className="middle">
            <div className="middle__shorten">
                <form>
                    <div className="form-group">
                        <label htmlFor="url">Enter a URL</label>
                        <input type="url" name="url" id="url" required placeholder="Shorten a link here..."/>
                    </div>
                    <button type="submit">Shorten It!</button>
                </form>
            </div>

            <div className="middle__stats">
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