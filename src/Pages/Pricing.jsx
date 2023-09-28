import PricingCard from "../Components/PricingCard";

export default function Pricing(){
    const PRICING_DATA = [
        {
            subHeading: 'Basic Tier',
            price: '10',
            bullet1: 'Unlimited URL Shortening',
            bullet2: 'Customizable Short Links',
            bullet3: 'Basic Analytics:'
        },
        {
            subHeading: 'Pro Tier',
            price: '49',
            bullet1: 'Advanced Analytics',
            bullet2: 'Password Protection',
            bullet3: 'Priority Support:'
        },
        {
            subHeading: 'Business Tier',
            price: '99',
            bullet1: 'Custom Domain Integration',
            bullet2: 'Link Expiration Dates',
            bullet3: 'Dedicated Account Manager:'
        }
    ];

    return(
        <main className="pricing">
            <h1>Pricing</h1>
            <p>Discover Your Ideal Plan. Find the pricing option that best suits your business, whether you&apos;re a startup, growing enterprise, or established industry leader. Benefit from transparent pricing with the flexibility to adapt as your needs change. Explore our tailored plans today.</p>
            <img src="public/pricing.svg" alt="illustration" />
            <section className="pricing__cards">
                {
                    PRICING_DATA.map(tier => {
                        return(
                            <PricingCard 
                                key={tier.price}
                                subHeading={tier.subHeading}
                                price={tier.price}
                                bullet1={tier.bullet1}
                                bullet2={tier.bullet2}
                                bullet3={tier.bullet3}
                            />
                        )
                    }) 
                }
            </section>
        </main>
    )
}