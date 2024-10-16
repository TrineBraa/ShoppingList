import './App.css'
import getData from './API'
import NavBar from './Component/navBar';

function App() {
  

  getData();

  return (
    <>
      <NavBar/>
    </>
  )
}

export default App
