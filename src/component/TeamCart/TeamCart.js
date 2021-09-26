import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { fasFacebookSquare } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'


import './TeamCart.css'
const TeamCart = (props) => {
    // console.log(props);
    const { name, age, img, role, country, salary } = props.team
    return (
        <div className="team">
            <div className="team-style">
                <img className="img" src={img} alt="" />
                <h2>Name : <small>{name}</small></h2>
                <h3>Age : <small>{age}</small></h3>
                <h3>Role : <small>{role}</small></h3>
                <h3>Country : <small>{country}</small></h3>
                <h3>Salary : $<small>{salary}</small></h3>
                <div className="icon">
                    <h3><i class="fab fa-facebook-square"></i></h3>
                    <h3> <i class="fab fa-twitter-square"></i></h3>
                    <h3><i class="fab fa-github-square"></i></h3>
                </div>
                {/* <h1> <FontAwesomeIcon icon={fasFacebookSquare} /></h1> */}
                <button onClick={() => props.handleAddToTeam(props.team)} className="hire-btn">Hire Developer <FontAwesomeIcon icon={faUserSecret} /></button>
            </div>
        </div>
    );
};

export default TeamCart;