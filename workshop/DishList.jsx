import React from "react";
import data from "../data";

function DishList(props){
    return ( <section className="dishes">
<h2>Dishes</h2>
<ul className="grid">


  {data.filter(x=>(props.cat==x.category||props.cat=="all") && props.sendmin<x.price && props.sendmax>x.price && x.name.toLowerCase().includes (props.title.toLowerCase()) ).map( x => <li className="card" key={x.id}> 
                      <h5>{x.name}</h5> 
                      <p>{x.description}</p>
                      <p>{"$"+x.price+".00"}</p>
                </li>)}


</ul>
</section>);
}

export default DishList