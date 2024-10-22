import './App.css'
import './Component/CSSFiles/navBar.css'
import getData from './API'
import NavBar from './Component/navBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingList from './Component/Pages/shoppingList';
import TodoList from './Component/Pages/todoList';
import getTodoData from './APITodo';


function App() {
  

  getData();
  getTodoData();

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<ShoppingList/>}/>
        <Route path="/shopping-list" element={<ShoppingList/>}/>
        <Route path="/todo-list" element={<TodoList/>}/>
        {/* <Route path="*" element = {<h2>Page not Found</h2>}/> */}
        
      </Routes>
    </Router>
  )
}

export default App
