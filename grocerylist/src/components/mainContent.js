import {useEffect, useState} from 'react';
import axios from 'axios';
import {GrocerySection} from './addGrocery';
export function Grocery() {
const API_BASE_URL = "https://vast-castle-96324.herokuapp.com";
const [groceryItems, updateGroceryItems] = useState([]);


async function fetchGroceryItmes(){
  const groceryData = await axios.get(`${API_BASE_URL}/grocery/getAll`);
  console.log(groceryData.data);
  const datafromAPI = groceryData.data;
  updateGroceryItems(datafromAPI);
}

useEffect(()=>{fetchGroceryItmes();},[]);


async function handlepurchaseUpdate(item){
  console.log(item);

  const updateData = await axios.put(`${API_BASE_URL}/grocery/updatePurchase`,{
    "_id": item._id,
    "isPurchased":true
  });

  alert("Item purchased");
  fetchGroceryItmes();
}

async function deleteItem(item){
  const deleteData = await axios.delete(`${API_BASE_URL}/grocery/deleteGrocery`,{
    data:{
      _id: item._id
    }
  });
  alert("item removed from list");
  fetchGroceryItmes();
} 

function renderItems(){
  return groceryItems.map((item) =>{
    return <div className="list-itmes d-dlex" 
    style={{textDecoration: item.isPurchased ? "Line-through" : "none"}}
    key={item._id}
    >
    {item.groceryItems}
     {
     item.isPurchased === false ? (
     <button className="btn btn-warning btn1"
     onClick={() =>handlepurchaseUpdate(item)}
      >
      Mark Purchased
    </button>
     ) :null
     }
     <button className="btn btn-danger btn1"
     onClick={() => deleteItem(item)}
     >
      Delete
     </button>

    </div>
  });
  
 
}
const date = new Date();
const monthNumber = date.getMonth();
const monthArray = ['January', 'Fedruary', 'March', 'April', 'May', 'June', 'july', 'August', 'September', 'October', 'November', 'December'];
const monthdata = monthArray[monthNumber];


  return (
    <div className="bodyContent">
      <p className="month-text">
        <b>Plan for the month of {monthdata}</b>
      </p>
      <div >
        <GrocerySection 
        baseUrl={API_BASE_URL}
        fetchGroceryItmes={fetchGroceryItmes}  
        />
        {renderItems()}
      </div>
    </div>
   
  );
}
