import LeftArrow from '../../assets/arrow_left.svg'
import RightArrow from '../../assets/arrow_right.svg'

function Slideshow() {
    return (
        <div className="slideshowWrapper">
            <div className="arrowsWrapper">
                <img src={LeftArrow} alt="Precedent" className="arrowLeft" />
                <img src={RightArrow} alt="Suivante" className="arrowRight" />
            </div>
        </div>
    )
}

export default Slideshow