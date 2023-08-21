import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Item = (props) => (
 <tr>
   <td>{props.item.name}</td>
   <td>{props.item.position}</td>
   <td>{props.item.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.item._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteItem(props.item._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function ItemList() {
 const [items, setItems] = useState([]);
 
 // This method fetches the records from the database.
 // test test
 useEffect(() => {
   async function getItems() {
     const response = await fetch(`http://localhost:5050/item/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setItems(records);
   }
 
   getItems();
 
   return;
 }, [items.length]);
 
 // This method will delete a record
 async function deleteItem(id) {
   await fetch(`http://localhost:5050/item/${id}`, {
     method: "DELETE"
   });
 
   const newItems = items.filter((el) => el._id !== id);
   setItems(newItems);
 }
 
 // This method will map out the records on the table
 function itemList() {
   return items.map((item) => {
     return (
       <Item
         item={item}
         deleteRecord={() => deleteItem(item._id)}
         key={item._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{itemList()}</tbody>
     </table>
   </div>
 );
}