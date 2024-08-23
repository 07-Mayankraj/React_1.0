function Button(props) {
    console.log(props);
    const { text ,handle} = props
    return <button onClick={handle}>{text}</button>
}

export default Button  