const Button = (props) => {
    console.log(props)
    return(
        <>
        <button style={{backgroundColor : 'green', color : 'white'}}>{props.text}</button>
        </>
    )
}

export default Button