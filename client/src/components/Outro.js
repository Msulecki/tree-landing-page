import React, { useState, useEffect } from 'react';

function Outro() {

    const [episodes, setEpisodes] = useState(null);

    const url = '/api/episodes';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setEpisodes(data))
            .catch(err => console.error(err))
    }, []);

    return (

        <section id='outro' className='outro'>
            <div className="content__info">
                <h3>The Waves</h3>
                <p>Everything can be described as a wave, if you look close enough. In this series, you'll find out that radiation isn't always that bad, and basically, we couldn't live without it.</p>
            </div>
            <div className="content__info">
                <h3>All episodes:</h3>
            </div>
            <div className="outro__episodes">
                {episodes && episodes.map(episode => <div
                    key={episode.id}
                    className="outro__episode-wrap">
                    <div className="outro__episode">
                        <img src={`http://localhost:5000/static/thumbs/${episode.thumb}`} alt={episode.desc} />
                    </div>
                    {episode.name}
                </div>)}
            </div>
        </section>

    );
}
export default Outro;