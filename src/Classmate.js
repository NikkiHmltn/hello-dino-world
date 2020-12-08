function Classmate(props) {
    return (
        <div>
            <h3>Hello {props.name}!</h3>
            <h2>You are in {props.location}.</h2>
        </div>
    )
}

export default Classmate;