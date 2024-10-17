import { useEffect, useState } from 'react'
import getData from '../API';
import '../CSSFiles/shoppingList.css'
import 'bootstrap';
import DeleteButn from './deleteButn';
import EditButn from './editButn';
import AddButn from './addButn';

function ShoppingList () {
    const [shopping,setShopping] = useState([]);

   useEffect (() => {
    const fetchShoppingData = async () => {
        const result = await getData();
        setShopping(result);
    };

    fetchShoppingData();
   }, []);



    return (
        <div className="ShoppingListComp">
         <table className="table table-dark  shoppingTable">
            <thead>
                <tr className="ShoppingRow">
                    <th className="ShoppingTitle">Shopping Item</th>
                </tr>
                
            </thead>
            <tbody>
                {Array.isArray(shopping) && shopping.length > 0 ?
                    (shopping.map((item) => (
                       <>
                        <tr className="ShoppingRow" key={item.id}>
                            <td>{item.shopping || 'Unknown item'}</td>
                            <EditButn/>
                            <DeleteButn/>
                        </tr>
                        
                        </>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="2">No Items Found</td>
                    </tr>
                    )}
                <tr className="ShoppingRow">
                            <td>
                                <input/>
                            </td>
                            <AddButn/>
                        </tr>
               </tbody>
        </table>
        </div>
    );
}

export default ShoppingList