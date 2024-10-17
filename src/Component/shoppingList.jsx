// import { UseEffect, UseState } from 'react'
// import getData from '../API';
// import '../CSSFiles/shoppingList.css'

// function shoppingList (){
//     const [shopping,setShopping] = UseState([]);

//     UseEffect(() => {
//         getData().then((result) => {
//             setShopping(result)
//         });
//     }, []);



//     return (
//         <>
//         {shopping.map((shopping) => (
//             <tr className ="ShoppingRow" key= {shopping.id}>
//                 <th scope ="row">{shopping.id}</th>
//                 <td>{shopping.Shoping}</td>
//             </tr>
//         ))}
//         </>
//     )
// }

// export default shoppingList