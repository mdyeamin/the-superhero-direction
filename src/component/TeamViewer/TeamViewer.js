import React from 'react';
import './TeamViewer.css'
const TeamViewer = (props) => {
    console.log(props.teamSet);

    const { name, img, salary } = props.teamSet

    return (
        <div className='teamViewerArea'>
            <h3>{name}</h3>
            <img className="viwerImg" src={img} alt="" />
            <p>${salary}</p>
        </div>
    );
};

export default TeamViewer;