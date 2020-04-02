import React from 'react';
import './ViewWrapper.css';

const ViewWrapper = (props) => {
    return(
        <section className="viewWrapper">
            {props.children}
        </section>
    )
};

export default ViewWrapper;