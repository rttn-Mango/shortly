export default function Features(){
    return(
        <main className="features">
            <h1>Powerful Features to Enhance Your Link Management Experience</h1>
            <img src="public/features-hero.svg" alt="illustration" />
            <section className="features__cards">
                <div className="features__cards--card">
                    <img src="public/link.svg" alt="illustration" />
                    <h2>Custom Short URLs</h2>
                    <ul role="list">
                        <li>Allow users to create custom short URLs with meaningful keywords or names.</li>
                        <li>This feature provides a personal touch and makes it easier for users to remember and share their shortened links.</li>
                    </ul>
                </div>
                <div className="features__cards--card">
                    <img src="public/analytics.svg" alt="illustration" />
                    <h2>Link Analytics</h2>
                    <ul role="list">
                        <li>Provide detailed analytics for each shortened URL.</li>
                        <li>Track metrics like the number of clicks, geographic location of users, referral sources, and more.</li>
                        <li>This feature helps users understand the performance of their links and optimize their strategies.</li>
                    </ul>
                </div>
                <div className="features__cards--card">
                    <img src="public/date.svg" alt="illustration" />
                    <h2>Expiration Dates</h2>
                    <ul role="list">
                        <li>Enable users to set expiration dates for their shortened URLs.</li>
                        <li>The link will automatically expire after the specified date, making it no longer accessible.</li>
                        <li>This feature can be useful for time-sensitive promotions or events, ensuring that the link is only valid for a specific period.</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}