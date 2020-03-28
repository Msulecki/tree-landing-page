import React from 'react';
import '../styles/InfoBox.scss';

function InfoBox(props) {
    const { title, text, img } = props.data;

    return (

        <div className={`box ${props.place}`}>
            <div className="box__dot"></div>
            <div className="box__line"></div>
            <div className="box__text">
                <div>
                    {title && <h3>{title}</h3>}
                    {text}
                </div>
            </div>
            {img.src && <div className="box__img"><img src={`http://localhost:5000/static/${img.src}`} alt={img.alt} /></div>}
        </div>

    );
}
export default InfoBox;