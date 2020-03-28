import React, { useState, useEffect } from 'react';
import '../styles/Progressbar.scss'

function Progressbar(props) {

    const { sections } = props;
    const [active, setActive] = useState('intro');

    useEffect(() => {
        const calcScroll = () => {
            const elements = [...document.querySelector('.content').children];
            let currentActive = null;
            elements.forEach((el, i) => {
                const offset = el.getBoundingClientRect().top
                if ((offset < 100)) currentActive = el.id
            });
            setActive(currentActive);
        }
        window.addEventListener('scroll', calcScroll);
        window.addEventListener('resize', calcScroll);

        return () => {
            window.removeEventListener('scroll', calcScroll);
            window.addEventListener('resize', calcScroll);
        }
    }, [active]);

    useEffect(() => {
        window.history.pushState(null, null, '#' + active);
    }, [active]);

    return (

        <nav className='progressbar'>
            <ul>
                <li className={active === 'intro' ? 'active' : ''}><a href={'#intro'}>Introduction</a></li>
                {sections.map((el, i) => <li key={i} className={active === el ? 'active' : ''}><a href={`#${el}`}>{el}</a></li>)}
                <li className={active === 'outro' ? 'active' : ''}><a href={'#outro'}>Thanks!</a></li>
            </ul>
        </nav>

    );
}
export default Progressbar;