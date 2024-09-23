import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { useState } from 'react'
import './App.css'
import Additem from './Additem'
import Searchitem from './Searchitem'
import sendSMS from './SendSMS'
import Button from './Button'




function App() {
  const API_URL='http://localhost:3500/items'
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "playing cricket" },
    { id: 2, checked: false, item: "reading books" },
    { id: 3, checked: false, item: "going market" }
]);

const handleChange = (id) => {
    const listitems = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listitems);
};

const handleClick=(id)=>{
    const listitem = items.filter((item) =>
    item.id !== id);
setItems(listitem);
};

const [newitems, setNewitems] = useState("")

const [search, setSearch] = useState("")

const addItems=(item)=>{
  const id=items.length? items[items.length -1].id +1:1;
  const addNewitem={id,checked:false,item}
  const listItems=[...items,addNewitem]
  setItems(listItems)
}

const handleSubmit=(e)=>{
  e.preventDefault() 
  if(!newitems) return;
  console.log(newitems)
  addItems(newitems)
  setNewitems("")
  

}
  return (
    <div className='App'>
    <Header/>
    <Additem
    newitems={newitems}
    setNewitems={setNewitems}
    handleSubmit={handleSubmit}/>
    <Searchitem
    search={search}
    setSearch={setSearch}/>
    <Content
    items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
    handleChange={handleChange}
    handleClick={handleClick}
    />
    <Button/>
    <Footer
    length={items.length}/>
    </div>
  )
}

export default App