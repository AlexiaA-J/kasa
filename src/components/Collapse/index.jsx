import {useState, useEffect, useRef} from 'react'
import Arrow from '../../assets/arrow.svg'
import PropTypes from 'prop-types'

function Collapse({title, text}) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState()
    const refHeight = useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <div className='collapseWrapper'>
            <button className='collapseWrapper__visible'
            onClick={toggleState}>
                <h2>
                    {title}
                </h2>
                <img className={toggle && 'active'} src={Arrow} alt='Collapse arrow' />
            </button>
            <div className={toggle ? 'collapseWrapper__toggle animated' : 'collapseWrapper__toggle'}
            style={{height: toggle ? `${heightEl}` : '0px'}}
            ref={refHeight}>
                <p aria-hidden={toggle ? 'true' : 'false'}>
                    {text}
                </p>
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Collapse

