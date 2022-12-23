import React from "react";

import {useState} from "react";
import DishList from "./DishList";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";

const categories = [
  "all",
  "burger",
  "hot dog",
  "sandwich",
  "fries",
  "topping",
  "drink",
  "extra",
];



function App() {
 
  const [max,setmax]=useState(10)
  const [min,setmin]=useState(0)
const [cat,setcat]=useState("all")
const [title,settitle]=useState("")



  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>
<PriceFilter sendmax={max} sendmin={min} sendsetmax={setmax} sendsetmin={setmin} ></PriceFilter> 
<CategoryFilter cat={cat} setcat={setcat} categories={categories}></CategoryFilter>

<div>
  <input type="text" id="search"  
         value={title}  onChange={(e)=> settitle(e.target.value)}/>
  <label htmlFor="search">Search By Title</label>
  
</div>



        </form>
      </section>
    
      <DishList cat={cat} sendmax={max} sendmin={min} title={title} settitle={settitle}></DishList>
    </main>
  );
}

export default App;
