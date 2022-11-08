// import { useState } from "react";
// import "../App.css";

// export function ItemRow() {
//   const [itemName, setItemName] = useState("");

//   const handleItemNameChange = (event) => {
//     setItemName(event.target.value);
//   };

//   const [perUnitPrice, setPerUnitPrice] = useState(0);

//   const handlePerUnitPriceChange = (event) => {
//     setPerUnitPrice(event.target.value);
//   };

//   const [qty, setQty] = useState(0);

//   const handleQtyChange = (event) => {
//     setQty(event.target.value);
//   };

//   const [price, setPrice] = useState(0);
//   const handlePriceChange = (event) => {
//     setPrice(perUnitPrice * qty);
//   };

//   const [addItem, setAddItem] = useState([]);
//   const handleAddItemChange = (event) => {
//     setAddItem(
//       <tr align="center">
//         <td>{itemName}</td>
//         <td>{perUnitPrice}</td>
//         <td>{qty}</td>
//         <td>{price}</td>
//       </tr>
//     );
//     console.log(setAddItem);
//   };

//   return (
//     <>
//       <tr align="center">
//         <td>
//           <input type="text" onChange={handleItemNameChange} value={itemName} />
//         </td>
//         <td>
//           <input
//             type="number"
//             min={0}
//             onChange={handlePerUnitPriceChange}
//             value={perUnitPrice}
//           />
//         </td>
//         <td>
//           <input type="number" min={0} onChange={handleQtyChange} value={qty} />
//         </td>
//         <td value={handlePriceChange}>{price}</td>
//         <td>
//           <button className="btn">Edit</button>
//           <button className="btn">Delete</button>
//         </td>
//       </tr>
//     </>
//   );
// }
