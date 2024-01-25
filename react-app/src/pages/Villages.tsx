import { useState, useEffect } from "react";
import { BrowserRouter,Router, Route, Link } from "react-router-dom";
import { useParams } from "next/navigation";
import {AMIA_VILLAGES} from '../constants/enums/villages.enum';

export default function Villages() {

    let provinces = AMIA_VILLAGES;
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [villages,setVillages] = useState([]);
    useEffect(() => {
    },[]);

    function provinceClick(e) {
        console.log( e)
    }
  return (
    <>
        <div className="row">
            <div className="col col-lg-3">
            <ul className="list-group">
                { provinces.map((province,index) => 
                (
                    <li 
                    className= {
                        selectedIndex === index 
                        ? "list-group-item active"
                        : "list-group-item"
                    }  
                    key={index}  onClick={() => {setSelectedIndex (index); }}>
                       <a onClick={ () => {provinceClick(province)}}>{province}</a>
                    </li>
                ))}
                
            </ul>
            </div>
            <div className="col col-lg-9">
            </div>
        </div>
    </>
  )
}

