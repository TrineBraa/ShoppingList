import './App.css'
import './CSSFiles/navBar.css'
import getData from './API'
import NavBar from './Component/navBar';
import MainContainer from './Component/mainContainer';

function App() {
  

  getData();

  return (
    <>
      <NavBar/>
      <MainContainer/>
    </>
  )
}

export default App
