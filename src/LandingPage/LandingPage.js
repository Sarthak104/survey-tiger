import React from "react";
import {Link} from 'react-router-dom';
import "./landingPage.css";
const LandingPage=(props) => {
    return(
        <div>
            <Link to="/create">
                <div>
                <button className="landing-page-buttons">Create Survey</button>
                </div>
            </Link>
            
            <div>
                <button className="landing-page-buttons">Take Survey</button>
            </div>


        </div>
        
    );
}
export default LandingPage;