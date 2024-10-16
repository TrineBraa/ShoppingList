
function NavBar(){
    return(
    <>
   <nav className="navbar bg-body-tertiary">
  <form className="container-fluid justify-content-start">
    <button className="btn btn-outline-success me-2" type="button">Shopping List</button>
    <button className="btn btn-sm btn-outline-secondary" type="button" disabled="true">disabled</button>
  </form>
</nav>
</>
    )
}

export default NavBar;