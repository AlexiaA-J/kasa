import PropTypes from 'prop-types'

function Card({id, title, cover}) {
    return (
        <a className='card' href={`logement/${id}`}>
            <h2 className='card__title'>
                {title}
            </h2>
            <img className='card__img' src={cover} alt='Vue du logement' />
        </a>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}

export default Card