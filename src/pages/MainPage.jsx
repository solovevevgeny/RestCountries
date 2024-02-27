import React from 'react'

import { Header } from "../components/Header";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import {useEffect, useState} from "react";
import axios from "axios";

const MainPage = () => {

  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  
  const [search, setSearch] = useState("");

  const [loaded, setLoaded] = useState(false);

  useEffect( () => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,population,capital,flags,region')
    .then ((response) => {
      setCountries(response.data);
      setLoaded(true);
    })
  },[]);

  
  
  if (loaded) {
    const handleSearch = (search, region)=> {
      let data = [...countries];

      if (search) {
        data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()));
        setFilterCountries(data);
      }
      else {
        setFilterCountries(countries);
      }
    }

    return (
      <>
          <Header />
          <Controls onSearch={handleSearch} />
          <List items={filterCountries}/>
      </>
    )

  }

}
export default MainPage;