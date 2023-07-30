import React from "react";
import { useState } from "react";

let qq = ["The most stable elements, Clarice, appear in the middle of the periodic table, roughly between iron and silver.",
"Life Needs Things to Live",
"I do not want to die who I am",
"I am your god! Long may I reign!",
"Sleep Well with your bad decisions"]

let num = 2;

function Quotes() {
    let [quotes, setQuotes] = useState(qq[num]);

    function handleClick(){
        num = Math.floor(Math.random()*(qq.length-1));
        console.log(num);
        setQuotes(qq[num]);
        
    }

    return (<div className="quotes">
        <h1>{quotes}</h1>
        <button onClick={handleClick}>Generate Quote</button>
    </div>);
}

export default Quotes;