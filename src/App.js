import { useState } from 'react';
import './App.css';
import ToDoMapList from './component/ToDoMapList';
import { Link } from "react-router-dom";

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);


  const itemEvent = (event) => {
    setInputList(event.target.value);

  };


  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };


  const deleteItems = (id) => {
    console.log("delete");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type='text'
            placeholder='Add a Items'
            value={inputList}
            onChange={itemEvent} />

          <button onClick={listOfItems}> + </button>

          <ol>
            {Items.map((itemval, index) => {
              return <ToDoMapList
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              />;
            })}
          </ol>
          <Link to='/NewToDo'>
            <button>Got to NewToDO List</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;