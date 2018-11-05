import React from 'react';
import {Link} from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="home-hero">
            <h1>What is Happening?</h1>
            <h4>New to Warbler?</h4>
            <Link to="/signup" className="btn btn-primary">
                Sign Up
            </Link>
        </div>
    );
}

export default Homepage;
