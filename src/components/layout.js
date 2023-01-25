import React,{useState} from "react";
import logo from '../assetes/image/tesla.png'
import "./layout.css";
import Output from "./row";

const Layout = ()=> {
    let [input,setInput] = useState('0')
    let [result,setResult] = useState('')
    const handle = (event) => {
        const val = event.target.value
        if(val === "=")
        {
            if(input !== " ")
            {
                let res = ' '
                try{
                    res = eval(input)
                }
                catch(err){
                    setResult("Match error")
                }
                if(res === undefined)
                {
                    setResult("Match error")
                }
                else
                {
                    setResult(input + "=")
                    setInput(res)
                }
            }
        }
        else if(val === "C")
        {
            
            setInput('0');
            setResult('');
            console.log(input);
        }
        else if(val === "DEL")
        {
            
            let str = input;
            str = str.substring(0,str.length-1)
            setInput(str)
        }
        else if(val === "OFF")
        {
            setInput('');
            setResult('');            
        }
        else if(input === "0")
        {
            console.log("delete")
            setInput(val);
        }
        
        else
        {
            setInput(input+=val)
        }
    };
    return(
        <div className="cal">
           <div className="calcualtor">
                <br></br>
                <Output value={result}/>
                <Output value={input}/>
                <img className="image" src={logo} alt="" width='70px' height='70px'/>
                <div className="keys">
                    <input type="button" value={'C'} className="Clear"     onClick={handle}></input>
                    <input type="button" value={'DEL'} className="Delete"  onClick={handle}></input>
                    <input type="button" value={'OFF'} className="OFF"  onClick={handle}></input>
                    <input type="button" value={'/'} className="Operator"  onClick={handle}></input>

                    <input type="button" value={'7'} className="Number"    onClick={handle}></input>
                    <input type="button" value={'8'} className="Number"    onClick={handle}></input>
                    <input type="button" value={'9'} className="Number"    onClick={handle}></input>
                    <input type="button" value={'*'} className="Operator"  onClick={handle}></input>

                    <input type="button" value={'4'} className="Number"    onClick={handle}></input>
                    <input type="button" value={'5'} className="Number"    onClick={handle}></input>
                    <input type="button" value={'6'} className="Number"    onClick={handle}></input>
                    <input type="button" value={'-'} className="Operator"  onClick={handle}></input>

                    <input type="button" value={'1'} className="Number"    onClick={handle}></input>
                    <input type="button" value={'2'} className="Number"    onClick={handle}></input>
                    <input type="button" value={'3'} className="Number"    onClick={handle}></input>
                    <input type="button" value={'+'} className="Operator"  onClick={handle}></input>
                   
                    <input type="button" value={'0'} className="Number"    onClick={handle}></input>
                    <input type="button" value={'%'} className="Operator"  onClick={handle}></input>
                    <input type="button" value={'='} className="Cals"      onClick={handle}></input>
                </div>
           </div>
        </div>
    )
};
export default Layout;