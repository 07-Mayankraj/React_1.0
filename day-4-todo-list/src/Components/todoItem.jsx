import '../styles/todoItem.css';
function TodoItem(props) {
    const { id, title, status, handleToggleButton, handleDeleteButton } = props;
    // styles 

    const statusStyle = {
        backgroundColor: status ? '#387F39' : '#FFAF00',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    const deleteButtonStyle = {
        backgroundColor: '#921A40',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    };
    
    const paragraphStyle = {
        width: '70%',
        maxHeight: '100px',
        overflow: 'auto',
        fontSize: '16px',
        color: 'var(--main-dark-color)',
    };

    return <div className="todo-list-container">
        <li key={id}>
            <p style={{ ...paragraphStyle }}>{title}</p>
                        
            <div className='Button-of-list'>
                <div onClick={() => handleToggleButton(id)} style={{ ...statusStyle }}>{status ? 'Completed' : 'Pending'}</div>
                <div onClick={() => handleDeleteButton(id)} style={{ ...deleteButtonStyle }} >Delete</div>
            </div>
        </li>
    </div>
}

export default TodoItem;