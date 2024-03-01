import React, { useState } from 'react'
import Card from '../../components/Card'
import logementsData from '../../datas/logements.json'
import Banner from '../../components/Banner'

function Home() {
    const [logements] = useState(logementsData);

    return (
        <div className='contentWrapper'>
            <Banner 
                className='home-banner'
                title='Chez vous, partout et ailleurs'
            />
            <div className='gallery'>
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;