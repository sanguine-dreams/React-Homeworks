import { useState } from "react";

function Quiz() {

    let [bgClolor,setBgColor]=useState('cadetBlue');

    let answers = [
        {
            ans: "Blue",
            correct: true
        },
        {
            ans: "Black",
            correct: false
        },
        {
            ans: "Red",
            correct: false
        }
    ]

    let myStyle;

    const newAnswers = answers.map(({ ans, correct }) =>
    (<ul>
        <button onClick={(e) =>handleClick(correct,e)} style={{backgroundColor:bgClolor}}> {ans}</button>
    </ul>));

    function handleClick(correct,e) {

        if (correct) {
        e.target.style.backgroundColor = 'green'; }
        else e.target.style.backgroundColor = 'red';
        
    }










    
   
    return (
        <div>
            <h1>What color is the sky?</h1>
            {newAnswers}

        </div>

    );
}

export default Quiz;