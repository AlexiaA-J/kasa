import logementsData from '../../datas/logements.json'
import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Author from '../../components/Author'
import Slideshow from '../../components/Slideshow'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function FicheLogement() {

    const { id } = useParams();
    const logementData = logementsData.find(data => data.id === id)
    const navigate = useNavigate()

    useEffect(() => {
        if (!logementData) {
            navigate('*')
        }
    }, [id, logementData, navigate])

    return (
        logementData && <div className="contentWrapper">
            <Slideshow slides={logementData.pictures} />
            <div className='authorInfoWrapper'>
                <div className='titlesTagsWrapper'>
                    <div className='titlesWrapper'>
                        <h1>
                            {logementData.title}
                        </h1>
                        <h2>
                            {logementData.location}
                        </h2>
                    </div>
                    <div className='tagsWrapper'>
                        {logementData.tags.map((tag, index)=> (
                            <Tag
                            key={index}
                            tag={tag}
                            />
                        ))}
                    </div>
                </div>
                <div className='ratingAuthorWrapper'>
                    <Rating 
                    rating={logementData.rating}
                    />
                    <Author
                        name={logementData.host.name}
                        picture={logementData.host.picture}
                    />
                </div>
            </div>
            <div className='collapsesWrapper'>
                <div className='collapses'>
                    <Collapse 
                    title='Description'
                    text={logementData.description}
                    />
                </div>
                <div className='collapses'>
                    <Collapse 
                    title='Equipements'
                    text={
                        <ul>
                            {logementData.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    }
                    />
                </div>
            </div>
        </div>
    )
}

export default FicheLogement