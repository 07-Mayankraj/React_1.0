import React from "react"

function AddTodo(props) {

    const [text, setText] = React.useState('');
    const { handleAddButton } = props;
    const handleChange = (e) => setText(e.target.value);
    const handleClick = () =>{
        handleAddButton(text)
        setText('')
    }
    return <div className="inputBox"> 
        <span>{}</span>
        <input type="text"  value={text} onChange={handleChange} placeholder={`Add new todo on ${ new Date().toLocaleDateString()} `} />
        <button className="Submit-button" disabled={text.length === 0}
            onClick={handleClick}>Add</button>
    </div>
}


export default AddTodo;