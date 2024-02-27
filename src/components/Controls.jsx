import React from 'react'
import {useState, useEffect} from "react";

export const Controls = ({onSearch}) => {

  const [search,setSearch] = useState("");
  const [region,setRegion] = useState("");

  useEffect(()=>{
    onSearch(search, region);
  },[search, region])

  return (
    <section className='controls'>
      <div className="container   flex-sp-b">
        <div className="controls__search">
          <input type="text" placeholder='Search for countries..' onChange={(e) => {setSearch(e.target.value)}}/>
        </div>
        <div className="controls__filter">
          <select name="" id="" onChange={(e)=>{setRegion(e.target.value)}}>
            <option value="">123</option>
            <option value="">321</option>
            <option value="">333</option>
          </select>
        </div>
      </div>
    </section>
  )
}
