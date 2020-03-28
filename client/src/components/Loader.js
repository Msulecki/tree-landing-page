import React from 'react';
import '../styles/Loader.scss';

function Loader(props) {

    return (
        <>
            <div className="loader">Loading...
            <div className="loader__content red"></div>
                <div className="loader__content green"></div>
                <div className="loader__content blue"></div>
            </div>
            <div className="loader__err">{props.err ? 'Cannot connect to server' : ''}</div>
        </>
    );
}
export default Loader;