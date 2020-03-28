import React from 'react';
import Progressbar from './Prograssbar';
import Content from './Content';
import Footer from './Footer';

function Tree(props) {
    const { data } = props;
    const sections = new Set([...data.map(el => el.section)]);
    return (

        <div className="tree">
            <Progressbar sections={[...sections]} />
            <Content data={data} />
            <Footer />
        </div>

    );
}
export default Tree;