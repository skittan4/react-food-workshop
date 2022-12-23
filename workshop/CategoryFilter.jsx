import React from "react";

function CategoryFilter(props){

return (props.categories.map(x=> <div>
<input type="radio" name="cat" value={x} checked={x===props.cat} onChange={(e)=>props.setcat(e.target.value)} />
<label>{x}</label>
</div>)



)
}

export default CategoryFilter