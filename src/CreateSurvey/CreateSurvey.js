import React,{useState} from "react";
import Survey from "./Survey";
import "./_Create_Survey.css";

const CreateSurvey = (props) => {
    
    
    return(
        <div className="create-survey-container">
           <Survey></Survey>
        </div>
    )
}

export default CreateSurvey;