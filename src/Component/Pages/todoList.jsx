import '../CSSFiles/shoppingList.css'
import 'bootstrap';
import DeleteButn from '../deleteButn';
import EditButn from '../editButn';
import AddButn from '../addButn';
import { useEffect, useState } from 'react';
import getTodoData from '../../APITodo';


function TodoList() {
    const [todo, setTodo] =useState([]);

    const fetchTodoData = async () => {
        const result = await getTodoData();
        setTodo(result);
    }

useEffect (() => {
    fetchTodoData();
}, []);


const handleaddTodoTask = (newTask) => {
    setTodo((prevTodo) => [... prevTodo, newTask]);
    refreshTodo();
}

const refreshTodo = () => {
    fetchTodoData();
}


// const addTodo = async (newTodo) => {
//     try{
//         const response = await fetch ('https://localhost:7051/Todo',{
//             method: 'POST',
//             headers: {'Content-Type': 'application/json',},
//             body: JSON.stringify({todo : newTodo})
//         });
//         if (response.ok) {
//             const newTodoFromDB = await response.json();
//             setTodo ((prevTodo) => [... prevTodo, newTodoFromDB], );
//             refreshTodo();
//         } else {console.error('Failed to add item from the Database')}
//     } catch (error) {
//         console.error('Error adding a new todo:', error);
//     }
// };




 return (
    <div className="MainContainer">
        <h1>Your Todo List:</h1>
        <br/>
        <br/>
        <table className="table table-dark shoppingTable">
                <thead>
                    <tr>
                        <th>Done</th>
                        <th className="ShoppingTitle">Todo</th>
                        <th></th>
                        <th></th>
                    </tr>
                    
                </thead>
                <tbody key="TodoTable">
                <tr className="ShoppingRow">
                            <td  colSpan="3">
                                <AddButn onAdd={handleaddTodoTask} type = "Todo"/>
                            </td> 
                            <td></td>
                        </tr>
                    {Array.isArray(todo) && todo.length > 0 ?
                        (todo.map((task) => ( 
                            <tr className="ShoppingRow" key = {task.id} >
                                <td><input type="checkbox"/></td>
                                <td>{task.text || 'Unknown item'}</td>
                                <td className ="ShoppingButn"><EditButn /></td>
                                <td className ="ShoppingButn"><DeleteButn /></td>
                            </tr>  
                        ))
                        ) : ( 
                        <tr>
                            <td colSpan="3">No Items Found</td>
                            <td></td>
                        </tr>
                        )} 
                       
                </tbody>
            </table>

    </div>
 )
}

export default TodoList;