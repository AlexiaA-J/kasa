import PropTypes from 'prop-types'

function Banner({ title, className }) {
    return (
        <div className={`bannerWrapper ${className}`}>
            <div className='bannerWrapper__overlay' />
            <h1 className="bannerWrapper__title">
                {title}
            </h1>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string.isRequired,
  };

export default Banner