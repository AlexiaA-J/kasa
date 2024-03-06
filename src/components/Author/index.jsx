

function Author({picture, name}) {
    return (
        <div className="authorWrapper">
            <h3 className="authorWrapper__title">
                {name}
            </h3>
            <img src={picture} alt={`${name}'s picure`} className="authorWrapper__picture" />
        </div>
    )
}

export default Author