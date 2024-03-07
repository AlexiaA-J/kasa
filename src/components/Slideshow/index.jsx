import { useState } from 'react'
import LeftArrow from '../../assets/arrow_left.svg'
import RightArrow from '../../assets/arrow_right.svg'

function Slideshow({slides}) {

    const length = slides.length
    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className="slideshowWrapper">
            {length > 1 && 
            (<div className="arrowsWrapper">
                <img src={LeftArrow} onClick={prevSlide} alt="Precedent" className="arrowLeft" />
                <img src={RightArrow} onClick={nextSlide} alt="Suivante" className="arrowRight" />
            </div>
            )}
            {slides.map((slide, index) => (
				<div
					key={index}
					className={
						current === index
							? "slide active-anim"
							: "slide"
					}
				>
					{index === current && <img src={slide} alt="Salle de l'appartement" />}
					{index === current && (
						<span className="slide__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
        </div>
    )
}

export default Slideshow