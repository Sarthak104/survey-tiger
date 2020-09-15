import React,{useState, Fragment} from "react";

const Survey = (props) => {

    const[surveyType, setSurveyType] = useState('default');
    const[options,setOptions] = useState([{value: "",id:Date.now()}]);
    const[question, setQuestion] = useState(''); 
    // const addQuestion = () =>{
    //     var newSurveys=[...surveys];
    //     var obj={questions: question, options:options, surveyType:surveyType}
    //     //console.log("abc");
    //     //console.log(obj);
    //     setSurveys(surveys => surveys.concat(obj))
    //     // newSurveys.concat(obj)
    //     var temp=surveys;
    //      console.log(temp);
    // }

    
    // add options
    const addItem = () =>{
        if(surveyType==="single" && options.length===2) return;
        else if(surveyType==="multi" && options.length===4) return;
        setOptions([...options, {value: '', id:Date.now()}]);
    }
    
    //add answer
    const addAnswer = (text,id) => {
        const  optionsCopy=[...options];
        const newOptions= optionsCopy.map((option) => {
            if(option.id===id){
                return{...option, value:text}   
            }
            else{
                return option;
            }
        });
        setOptions(newOptions);
    }
    //Delete options
    const removeOption = (id) =>{
        const updateOptions = options.filter(option => option.id !== id);
        setOptions(updateOptions);
    }

    return(
        <Fragment>
            <div>
            <div className="question-type-container">
            <select name="survey" 
            value={surveyType} 
            onChange={(evnt) => {
                setSurveyType(evnt.target.value) 
                setOptions([{value: '',id:Date.now()}])
                }}>
                <option value="default">Choose an Option</option>
                <option value="multi">Multi-select</option>
                <option value="single">Single-select</option>
            </select>
        </div>

        {/* Conditional Rendering only render when the question type is single or multi*/}
        {surveyType==="multi" || surveyType==="single" ? 
            <div className="survey-container">
            <div>Enter the Question</div>
            <input placeholder="Enter your question" type="text" value={question} onChange={(evt) => {setQuestion(evt.target.value)}}></input>
            <p>Options</p>
            {options.map(option => (
                <div className="answer-container" key={option.id}>
                <input type="text" placeholder="Enter options" value={option.value} onChange={(evt) => {
                    addAnswer(evt.target.value,option.id)
                }}></input>
                <p onClick={addItem}>➕</p>
                <p onClick={() => {
                    removeOption(option.id)
                }}>➖</p>
                </div>
            ))}
            {(surveyType==="multi" && options.length>=4) ||  (surveyType==="single" && options.length>=2)?(<div>
                <button>Add Question</button>
                <button>Publish</button>
            </div>) 
            : null}
        </div>
        : null}

            </div>
        </Fragment>
        
    )
}
export default Survey;