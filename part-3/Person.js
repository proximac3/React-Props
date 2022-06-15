const Person = (props) => {
    return (
        <div>
            <p> Learn some information about {props.name.length > 8 ?
                props.name.slice(0, 6) : props.name}
            </p>
            
            <h3> {props.age > 18 ? "Please go vote" : "You must be 18"} </h3>

            <ul>
                {props.hobbies.map(item => <li>{ item}</li>)}
            </ul>
        </div>
    )
}






