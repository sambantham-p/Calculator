import React from "react";
import Result from "./result";

const Output = props =>{
    return(
        <div className="output">
            <Result value={props.value} ></Result>
           
        </div>
    );
}

export default Output;