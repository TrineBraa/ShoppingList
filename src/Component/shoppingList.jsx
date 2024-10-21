import { useEffect, useState } from 'react'
import getData from '../API';
import '../CSSFiles/shoppingList.css'
import 'bootstrap';
import DeleteButn from './deleteButn';
import EditButn from './editButn';
import AddButn from './addButn';


function ShoppingList () {
    const [shopping,setShopping] = useState([]);

    const fetchShoppingData = async () => {
        const result = await getData();
        setShopping(result);
    };

   
   useEffect (() => {
    fetchShoppingData();
}, []);

   const refreshShoppingData = () => {
    fetchShoppingData();
   }

   const addShoppingItem = async (newItem) => {
    try{
            const response = await fetch('https://localhost:7051/shoppingList', {
                                        method: 'POST',
                                        headers: {'Content-Type': 'application/json',
                                        },
                body: JSON.stringify({Shopping : newItem})
            });
            if(response.ok) {
                const newItemFromDB = await response.json();
                setShopping((prevShopping) => [
                    ...prevShopping,
                    newItemFromDB,
                ], );
                refreshShoppingData();
            } else {
                console.error('Failed to add item to the Database');
            }
        } catch (error) {
            console.error('Error adding item:', error);
        }};

    const deleteShoppingItem = async (id) => {
        try{
            const response = await fetch (`https://localhost:7051/shoppingList/${id}`,{
                method: 'Delete',
            });

            if(response.ok) {
                setShopping((prevShopping) => prevShopping.filter((item) => item.id !== id))
            } else {
                console.error('Failed to delete item from Database');
            }
        }catch (error){
            console.error ('Error deleting item:', error);
        }
    }

    const editShoppingItem = async (id, newName) => {
        try {
            const response = await fetch (`https://localhost:7051/shoppingList?id=${id}`, {
                method: 'PUT',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({Shopping: newName})
            });

            if (response.ok) {
                setShopping((prevShopping) =>
                    prevShopping.map (item => item.id === id ? { ...item, shopping: newName} : item)
            );
            } else {
                console.error('Failed to update item in Database');
            }
        } catch (error){
            console.error('Error updating item:', error);
        }
    };
 

    return (
        <div className="ShoppingListComp">
            <table className="table table-dark  shoppingTable">
                <thead>
                    <tr>
                        <th className="ShoppingTitle">Shopping Item</th>
                    </tr>
                    
                </thead>
                <tbody key="ShoppingTable">
                <tr className="ShoppingRow" key="AddshoppingButton">
                            <td  colSpan="3">
                                <AddButn onAdd={addShoppingItem}/>
                            </td> 
                        </tr>
                    {Array.isArray(shopping) && shopping.length > 0 ?
                        (shopping.map((item) => (
                            <tr className="ShoppingRow" key={item.id}>
                                <td>{item.shopping || 'Unknown item'}</td>
                                <td className ="ShoppingButn"><EditButn id= {item.id} currentName={item.shopping} onEdit = {editShoppingItem}/></td>
                                <td className ="ShoppingButn"><DeleteButn id={item.id} onDelete={deleteShoppingItem} key="deletebtn"/></td>
                            </tr>  
                        ))
                        ) : (
                        <tr>
                            <td colSpan="3">No Items Found</td>
                        </tr>
                        )}
                       
                </tbody>
            </table>
        </div>
    );
}


export default ShoppingList