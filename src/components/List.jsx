import React from 'react'
import { Card } from "./Card";
import { Navigate, useNavigate } from 'react-router-dom';
import {useProps} from "react";


export const List = ({items}) => {
  console.log(items);

  const navigate = useNavigate();
  const navigateToDetail = (counryName) => {
    navigate('/detail/'+counryName.toLowerCase());
  }

  return (
    <section>
        <div className="container list">
          {
            items.map ((item) => {
              
              return <Card 
                key={item.name.common} 
                name={item.name.common} 
                population={item.population}
                region={item.region}
                flag={item.flags.png}
                capital={item.capital}
                onclick={navigateToDetail}
              />
            })

          }
        </div>
    </section>
  )
}
