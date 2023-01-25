import React from "react";
import './result.css'

const Result = props =>{
    return(
        <div className="result">
            <input type="text" readOnly className="screen" value={props.value}></input>
        </div>
    );
}
export default Result;