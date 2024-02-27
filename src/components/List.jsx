import React from 'react'
import { Card } from "./Card";
import {useEffect, useState} from "react";

import axios from "axios";

export const List = () => {
  const [countries, setCountries] = useState([]);

  useEffect( () => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,population,capital,flags,region')
    .then ((response) => {
      setCountries(response.data);
    })
  },[]);

  return (
    <section>
        <div className="container list">
          {
            countries.map ((item) => {
              
              console.log(item);
              return <Card 
                key={item.name.common} 
                name={item.name.common} 
                population={item.population}
                region={item.region}
                flag={item.flags.png}
                capital={item.capital}
              />
            })

          }
        </div>
    </section>
  )
}
