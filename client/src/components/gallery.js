import React, { useEffect, useState } from "react";

const Gallery = () => {
    const [items, setItems] = useState([])
   
    
  const fetchItemData = () => {
    fetch(`http://localhost:5050/item/`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setItems(data)
      })
  }

  useEffect(() => {
    fetchItemData()
  }, [])


    return ( <div className="galerry">
    {console.log(items.length+" dbg dbg dbg") }
         {items.length > 0 && (
        <ul>
          {items.map(item => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div> );
}
 

export default Gallery;