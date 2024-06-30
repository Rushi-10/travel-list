import "../index.css";
import{useState} from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./Packinglist.js";

import Stats from "./Stats.js";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export default function App() {
  const[items,setItems]=useState(initialItems);
//adding item in travel list.
  function handleAddItems(item){
    setItems((items)=>[...items,item]);
  }
//to delete item from list
  function handleDeleteItem(id){
    setItems((items)=>items.filter((item)=>item.id!==id));
  }
//To pack or unpack item.
  function handleToggleItem(id){
setItems((items)=>items.map((item)=>item.id===id?{...item,packed:!item.packed}:item));
  }

//To clear list
function handleClearList(){
  if(items.length>0){
  const confirmed=window.confirm("Are you sure to clear list?");
  if (confirmed) setItems([]);
  }
}
  return (
    <div className="app">
   <Logo/>
   <Form onAddItem={handleAddItems}/>
   <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
   <Stats items={items}/> 
   </div>
  );
}







