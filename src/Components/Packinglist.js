import { useState } from "react";
import Item from "./Item";
import {items} from "./App";
export default function PackingList({items,onDeleteItem,onToggleItem,onClearList}){
    const[sortBy,setSortBy]=useState("input");
    let sortedItems=items;
    if(sortBy==="description") sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description));
    if(sortBy==="packed") sortedItems=items.slice().sort((a,b)=>a.packed-b.packed);
    return(
  <div className="list">
  <ul>
  {sortedItems.map((item)=>(<Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>))}
  </ul>
  <div className="actions">
  <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
  <option value="input">Sort By input</option>
  <option value="description">Sort By description</option>
  <option value="packed">Sort By packed</option>
  </select>
  <button onClick={onClearList}>Clear List</button>
  </div>
  
  </div>
    );
}