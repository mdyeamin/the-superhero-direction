import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header-main">

                <div>
                    <h1> LeechCoder: Hire world class Developers</h1>
                    <p>Our programmer team is always at your service</p>
                    <h2>Team rental budget : 10 million</h2>
                </div>
                <div className="sosial">
                    <h1>Programming team</h1>
                    <h4>  <a href="/facebook">facebook</a></h4>
                    <h4><a href="/facebook/group">facebook/group</a></h4>
                    <h4><a href="/twitter">twitter</a></h4>
                    <input className="search-input" type="text" placeholder="Search Debeloper" />
                    <button className="search-btn">search</button>

                </div>
            </div>
        </div>
    );
};

export default Header;