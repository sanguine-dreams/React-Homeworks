
function MakeList() {

    let nameList = ['Rusul', 'Yasmin', 'Zahraa', 'Mays'];
      
    let newNameList = nameList.map((takeOne) => (
    <ul> <li>{takeOne} <button onClick={() => callStudent(takeOne)}> Shout out </button>  </li> 
    
    </ul>)
    );


    function callStudent(name) {
        alert(`Hello, ${name}!`);
    }

    return (
        <div>
            <h1>Students List</h1>

            {newNameList}

        </div>
    );
}

export default MakeList;