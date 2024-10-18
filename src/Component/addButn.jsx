import { useState } from "react";
import PropTypes from 'prop-types';
import '../CSSFiles/shoppingList.css'



function AddButn( {onAdd} )  {
    const [newShoppingItem, setNewShoppingItem] = useState (" ");

    const handleInputChange = (e) => {
        setNewShoppingItem(e.target.value);
    };

    const handleAddItem = () => {
        onAdd(newShoppingItem);
        setNewShoppingItem("");
    }


    return(
        <div className="ShoppingRow">
                            
            <input 
                type="text" 
                value={newShoppingItem}
                onChange={handleInputChange}
                placeholder="Enter a new item"
            />
                           
                           
            <button 
                type="button" 
                className="btn btn-outline-success"
                onClick={handleAddItem} >
                    Add Shopping
            </button>
                           
        </div>
        
    )
}

AddButn.propTypes = {
    onAdd: PropTypes.func.isRequired,
}


export default AddButn;