import EmptyStar from '../../assets/emptyStar.svg'
import FullStar from '../../assets/fullStar.svg'

function Rating({rating}) {
    const stars = [1, 2, 3, 4, 5]
    return (
        <div className="ratingWrapper">
            {stars.map((score) => (
                rating >= score ? <img src={FullStar} alt="Full rating star" className="fullStar" />
                : <img src={EmptyStar} alt='Empty rating star' className='emptyStar' />
            ))}
        </div>
    )
}

export default Rating