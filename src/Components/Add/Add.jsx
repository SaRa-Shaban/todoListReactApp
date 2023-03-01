import React, { useState, useEffect, useRef } from 'react'

export default function Add({ todos, setTodos, flatted }) {


    // temporary state
    const [newTaskInput, setNewTaskInput] = useState('')  //input which add task

    // add task
    const addTask = () => {
        if (newTaskInput) {
            let num = todos.length + 1;
            let data = { id: num, title: newTaskInput, complete: false }
            const todoListString = flatted.stringify([...todos, data]);
            localStorage.setItem('todoList', todoListString);
            setTodos([...todos, data])
            setNewTaskInput('')
        }
    }
    
    // focus on input
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // enter keypress
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            console.log(e);
            // Call your function here
            addTask();
        }
    }


    return (
        <>
            {/* (form / add new Task) */}
            <div className='d-flex flex-row justify-content-center  py-3'>
                <div className='position-relative me-3 w-100 holder'>
                    <input value={newTaskInput} onChange={(e) => setNewTaskInput(e.target.value)} onKeyDown={handleKeyPress} ref={inputRef} type="text" placeholder='Add a task' className='form-control' />
                    <i className="text-muted position-absolute icon-list fa-solid fa-list-ol"></i>
                </div>
                <div >
                    <button className='btn btn-success w-100' onClick={addTask}  >Add</button>
                </div>
            </div>
        </>
    )
}
