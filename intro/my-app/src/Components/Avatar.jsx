function avatar(props){
    const {name , image} = props
    const style = {
        borderRadius : '50%',
        border:'1px solid black',
        width : '200px'
    }

    return <div >
        <img 
            src={image}
            alt = "profile"
            style={style}
        />
        <h3>{name}</h3>
    </div>
}

export default avatar