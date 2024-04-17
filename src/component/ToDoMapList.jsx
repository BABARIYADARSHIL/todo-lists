import React from "react";
const ToDoMapList = (props) => {

    return (
        <>
            <div className="todo_style">
                <button onClick={() => {
                    props.onSelect(props.id);
                }}>cancel</button>
                <li> {props.text} </li>
            </div>
        </>
    )
}
export default ToDoMapList; 