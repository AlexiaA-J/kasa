import EmptyStar from '../../assets/emptyStar.svg'
import FullStar from '../../assets/fullStar.svg'

function Rating({rating}) {
    const stars = [1, 2, 3, 4, 5]
    return (
        <div className="ratingWrapper">
            {stars.map((score, index) => (
                rating >= score ? <img key={index} src={FullStar} alt="Full rating star" className="fullStar" />
                : <img key={index} src={EmptyStar} alt='Empty rating star' className='emptyStar' />
            ))}
        </div>
    )
}

export default Rating