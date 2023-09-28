import PropTypes from 'prop-types'

export default function StatCard({path, subHeading, content}){
    return(
        <article>
            <div>
                <img src={path} alt="icon"/>
            </div>
            <h3>{subHeading}</h3>
            <p>{content}</p>
        </article>
    )
}

StatCard.propTypes = {
    path: PropTypes.string,
    subHeading: PropTypes.string,
    content: PropTypes.string
}