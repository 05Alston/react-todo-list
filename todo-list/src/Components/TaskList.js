import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from 'react-tooltip';


const TaskList = ({ todos, todo, setTodos }) => {
    let xd="";
    const deleteHandler = () => {
        setTodos(todos.filter((e) => e.id !== todo.id));
    };
    const setText = () =>{
        xd =(todo.text.length > 18)? todo.text.substring(0, 15) + "...":todo.text;
        return xd;
    };
    const completeHandler = () => {
        setTodos(todos.map((e) => {
            if (e.id === todo.id) {
                return {
                    ...e, completed: !e.completed
                }
            }
            return e;
        }))
    };
    return (
        <span className="task-list">
            <li className={`list-item${todo.completed ? " completed" : ""}`} data-tip={todo.text}>{setText()}</li>
            <ReactTooltip />
            <button onClick={completeHandler} className="completed-btn">
                <FontAwesomeIcon icon={faCheck} /></button>
            <button onClick={deleteHandler} className="trash-btn">
                <FontAwesomeIcon icon={faTrash} /></button>
        </span>
    );
}

export default TaskList;