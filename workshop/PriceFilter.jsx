import React from "react";
import data from "./data";

function PriceFilter(props){//props in the function are to bring min and max values from App.jsx

let MX=0
data.forEach (t=>{if(t.price>MX) MX=t.price})//type1 goes to max type 2 in min





return(<feildset>
<legend>Price range</legend>
        <div>
  <input type="range" id="min-price" name="min-price"
         min={data.reduce((MN,x)=>Math.min(MN,x.price),MX)}/*type 2 */ max={MX} value={props.sendmin/*importing sendmin from App.jsx*/ } onChange={(e)=>props.sendsetmin(e.target.value)}/>
  <label htmlFor="min-price">Min Price</label>
  <p>{props.sendmin}</p>
</div>

<div>
  <input type="range" id="max-price" name="max-price" 
         min={data.reduce((MN,x)=>Math.min(MN,x.price),MX)} max={MX} value={props.sendmax} onChange={(e)=>props.sendsetmax(e.target.value)}/>
  <label htmlFor="max-price">Max Price</label>
  <p>{props.sendmax}</p>
</div>



</feildset>)}

export default PriceFilter