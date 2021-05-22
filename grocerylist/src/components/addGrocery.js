import {useState} from "react";
import axios from 'axios';
export function GrocerySection({baseUrl, fetchGroceryItmes}){
    const [groceryInput, updateGroceryInput] = useState("");
    async function handleItems(){
        const createTask = await axios.post(`${baseUrl}/grocery/add`, {
        
            "groceryItems" : groceryInput
        
        });
        alert("Item added successfully");
        updateGroceryInput("");
        fetchGroceryItmes();
    }
    return(
        <div>
            <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add Shopping items"
            aria-label="Grocery Item"
            value={groceryInput}
            onChange = {(e) =>updateGroceryInput(e.target.value) }
          />
          <button className="input-group-text btn btn-primary" 
          id="basic-addon2"
          onClick={()=>handleItems()}
          >
            Add grocery Item
          </button>
        </div>
        </div>
    );
}