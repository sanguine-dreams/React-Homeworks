function Attendence() {


    let nameList = [{
        name: 'Rusul',
        attn: false
    },
    {
        name: 'Yasmin',
        attn: true
    },
    {
        name: 'Zahraa',
        attn: false
    }, { name: 'Mays', attn: true }]

    const red = { color: "red" };
    const green = { color: "green" };


    const newNameList = nameList.map(({ name, attn }) => (
        <ul> <li style={attn ? green : red}> {[name]}</li>
            <p>{attn ? "She is here" : "She is not here"}</p>
        </ul>));


    return (
        <div>
            <h1>Student List</h1>
            {newNameList}
        </div>

    );
}
export default Attendence;