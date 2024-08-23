import React from "react"
import AddTodo from "./addTodo";
import TodoItem from "./todoItem";


function Todo() {
    // functional component
    const [todoList, setTodoList] = React.useState([
        {
            "title": "Demo Todo", 
            "status": false,
            "id": 1722691834987
        }
    ]);


    const handleAddButton = (text) => {
        const newTodo = {
            title: text,
            status: false,
            id: Date.now()
        }
        // update todolist
        const updatedTodoList = [...todoList, newTodo];
        setTodoList(updatedTodoList)

    }

    const handleToggleButton = (id) => {
        const updateTodoList = todoList.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : todo)

        setTodoList(updateTodoList)
    }

    const handleDeleteButton = (id) => {
        const afterDelet = todoList.filter(todo => todo.id !== id)
        setTodoList(afterDelet)
    }
    console.log(todoList);
    // react component
    return <div className="container">
        <h1>Todo list </h1>
        <AddTodo handleAddButton={handleAddButton} />
        <div className="todo-list-container-app">
            {
                todoList.map(todo => <TodoItem key={
                    todo.id}
                    title={todo.title}
                    status={todo.status}
                    id={todo.id}
                    handleToggleButton={handleToggleButton}
                    handleDeleteButton={handleDeleteButton}

                />)
            }
        </div>
    </div>
}

export default Todo