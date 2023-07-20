let count = 0;
function Button(){
    return (
    <button onClick={counter}>Click me</button>
    );
}

function counter(){
    console.log(count);
    return count = count + 1;
}

export default Button;