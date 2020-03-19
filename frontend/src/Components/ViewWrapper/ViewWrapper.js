import React from 'react';
import './ViewWrapper.css';

const ViewWrapper = (props) => {
    return(
        <section id="viewWrapper">
            {props.children}
        </section>
    )
};

export default ViewWrapper;