import React, { useState } from "react";
import './App.css'

const NewToDo = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            listOfItems();
        }
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1> TOdo List </h1>
                    <br />
                    <input type="text"
                        placeholder="Enter your task here..."
                        value={inputList}
                        onChange={itemEvent}
                        onKeyUp={handleKeyPress}

                    />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {Items.map((item, index) => (<>
                            <div className="todo_style" key={index}>
                                <li key={index}>{item}</li>
                                <button
                                    onClick={() => {
                                        setItems(oldItems => oldItems.filter((arra, i) => i !== index));
                                    }}>cancle</button>
                            </div>
                        </>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default NewToDo; 