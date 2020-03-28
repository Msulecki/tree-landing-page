import React from 'react';
import InfoBox from './InfoBox';
import Intro from './Intro';
import Outro from './Outro';
import '../styles/Content.scss';

function Content(props) {

    const { data } = props;

    const items = [];
    let i = 0;
    new Set([...data.map(el => el.section)]).forEach(section => {
        items.push(<section key={section} id={section}>{(data.filter(el => el.section === section)).map(el => <InfoBox key={el.id} place={i++ % 2 === 0 ? 'left' : 'right'} data={el} />)}</section>);
    })

    return (

        <div className="content">
            <div className="line">
                <div className="line__top"></div>
                <div className="line__bottom"></div>
            </div>
            <Intro />
            {items}
            <Outro />
        </div>

    );
}
export default Content;