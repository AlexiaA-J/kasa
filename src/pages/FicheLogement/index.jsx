import logementsData from '../../datas/logements.json'
import Collapse from '../../components/Collapse'
import { useState, useEffect } from 'react'
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
            {/* SLIDESHOW ?? */}
            <div>
                <h1>

                </h1>
                <h2>

                </h2>
                <div>
                    {/* TAG COMPONENT ?? */}
                </div>
            </div>
            <div>
                {/* RATING COMPONENT ?? */}
                {/* AUTEUR COMPONENT ?? */}
            </div>
            <div className='collapsesWrapper'>
                <div className='collapses collapseDescription'>
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