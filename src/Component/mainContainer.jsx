import '../CSSFiles/MainContain.css'
import ShoppingList from './shoppingList'

function mainContainer (){
return (
    <div className="MainContainer">
        
        <h1>Your Shopping List:</h1>
        <br/>
        <br/>
        <ShoppingList/>

    </div>
)
}

export default mainContainer;