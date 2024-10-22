import './CSSFiles/navBar.css';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return(
    <>
        <nav className="NavContainer" data-bs-theme="dark">
            <h1 className="NavWelcome">Welcome</h1>
        <form className="NavButtonContainer ">
            <NavLink to="/shopping-list">
            <button className="btn btn-outline-success me-2" type="button">Shopping List</button>
            </NavLink>
            <NavLink to ="/todo-list">
            <button className="btn btn-sm btn-outline-secondary" type="button">Todo List</button>
            </NavLink>
        </form>
        </nav>
    </>
    )
}

export default NavBar;