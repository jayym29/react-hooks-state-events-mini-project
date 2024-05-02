import React from "react";

function CategoryFilter( {categories, handleClick}) {
  
  
  
  const buttons = categories.map((category) => (
    <button key={category} onClick={handleClick} className="">{category}</button>
  ))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
      <h5>Category filters</h5>
    </div>
  ); 
}

export default CategoryFilter;