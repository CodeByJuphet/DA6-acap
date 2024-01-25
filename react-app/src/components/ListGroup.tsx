import { useState } from "react";

function ListGroup() {
    let items = [
        'JOHN DOE',
        'JUAN DELA CRUZ',
        'APO LAKAY'
    ];
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
  return (
    <div className="col col-lg-2">
    <ul className="list-group">
      { items.map((item, index)=> (
        <li 
        className= {
            selectedIndex === index 
            ? "list-group-item active"
            : "list-group-item"
        } 
        key={item}
        onClick={() => {setSelectedIndex (index); }}
        >
        {item}
        </li>
        )) }
    </ul>
    </div>
  );
}
export default ListGroup;
