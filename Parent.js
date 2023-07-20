import parent from './parent.jpg';

function Header(){
    console.log("I am the Parent.");
    return(
<div className='parent'>
      <h1>Parent</h1>
      <img src={parent} alt="Parent"/>
      </div>);
}

export default Header;