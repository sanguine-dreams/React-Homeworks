import child from './child.jpg'

function Child(){
    console.log("I am the child.")
    return(
        <div className='child'>
        <h1>Child</h1>
        <img src={child} alt="Child"/>
      </div>
    
    );
}

export default Child;