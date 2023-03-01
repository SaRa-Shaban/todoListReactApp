import React from 'react'
import './TodoList.css'


export default function TodoList({ todos, deleteTask, handleComplete, setUpdateTask }) {

    return (
        <>
            <div className='container shadow rounded-3 my-2 py-2 todolist'>
                <div className=' w-100 my-3   rounded-2'>

                    {/* tasks */}

                    {todos.length == 0 ? <h5 className='text-center py-2'>No tasks ...</h5> : ''}

                    {todos
                        .sort((a, b) => a.id > b.id ? 1 : -1)
                        .map((todo, index) => {
                            return (
                                <div key={index}>
                                    <div className='task d-flex flex-row justify-content-between align-items-center p-2 rounded-2 my-3'>
                                        <span className={`border border-1 px-1 number ${todo.complete ? 'done' : ''}`}>
                                            {index + 1}
                                        </span>
                                        <div className={`px-2 w-100 mx-1 ${todo.complete ? 'done' : ''}`}>

                                            {todo.title}</div>

                                        <div className='d-flex'>
                                            <i className={`fa-solid fa-circle-check me-2 ${todo.complete ? 'text-info' : ''}`}
                                                onClick={() => { handleComplete(todo.id) }}
                                            ></i>
                                            {todo.complete ? null :
                                                <i className="fa-solid fa-pen mx-2" onClick={() =>
                                                    // get data from map 
                                                    setUpdateTask({
                                                        id: todo.id,
                                                        title: todo.title,
                                                        complete: todo.complete ? true : false
                                                    })
                                                }></i>
                                            }
                                            <i className="fa-solid fa-trash-can ms-2" onClick={() => { deleteTask(todo.id) }}></i>
                                        </div>

                                    </div>

                                </div>
                            )
                        })}

                </div>
            </div>
        </>
    )
}
