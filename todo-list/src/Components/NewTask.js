import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const NewTask = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (inputText === "") {
            return;
        }
        
        setTodos([...todos, { text: inputText, complted: false, id: todos.length }])
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div className='new-task'>
            <input type="text" value={inputText} onChange={inputTextHandler} required />
            {/* <span class="place-holder">Enter Task</span> */}
            <button onClick={submitHandler}><FontAwesomeIcon icon={faPlus} /></button>
            <div onChange={statusHandler} className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">✔️</option>
                    <option value="uncompleted">❌</option>
                </select>
            </div>
        </div>
    )
}

export default NewTask;