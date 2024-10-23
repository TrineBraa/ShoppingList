import { useState } from "react";
import PropTypes from 'prop-types';
import './CSSFiles/shoppingList.css'




function AddButn( {onAdd, type, refresh} )  {
    const [newItem, setNewItem] = useState (" ");
    const handleInputChange = (e) => {
        setNewItem(e.target.value);
    };
    
    // const Testing = (type === 'shoppingList' ? 'Shopping' : 'Text');
    // console.log(Testing)

    const handleAddItem = async () => {
        onAdd(newItem);

        console.log(newItem);

        try {
            const response = await fetch (`https://localhost:7051/${type}`, 
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ [type === 'shoppingList' ? 'Shopping' : 'Task'] : newItem}),
                });

                    if (!response.ok) {
                        throw new Error('Network responses was not ok');
                    }

                    const newItemFromDB = await response.json();
                    
                    onAdd(newItemFromDB);
                    setNewItem("");
                    refresh();
                } catch (error) {
                    console.error('Error adding item:', error)
                }
         

      
    }

   
    return(
        <div className="ShoppingRow">
                            
            <input 
                type="text" 
                value={newItem}
                onChange={handleInputChange}
                placeholder={`Enter a new ${type === 'shoppingList' ? 'item' : 'task'}`}
            />
                           
                           
            <button 
                type="button" 
                className="btn btn-outline-success"
                onClick={handleAddItem} >
                    add {type  === 'shoppingList' ? 'Shopping' : 'Todo'}
            </button>
                           
        </div>
        
    )
}

AddButn.propTypes = {
    onAdd: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['shoppingList', 'Todo']).isRequired,
    refresh: PropTypes.func.isRequired,
}


export default AddButn;