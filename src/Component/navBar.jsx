import '../CSSFiles/navBar.css';

function NavBar(){
    return(
    <>
        <nav className="NavContainer" data-bs-theme="dark">
            <h1 className="NavWelcome">Welcome</h1>
        <form className="NavButtonContainer ">
            <button className="btn btn-outline-success me-2" type="button">Shopping List</button>
            <button className="btn btn-sm btn-outline-secondary" type="button" disabled={true}>disabled</button>
        </form>
        </nav>
    </>
    )
}

export default NavBar;