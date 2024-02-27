import React from 'react'
import { useState, useEffect } from 'react';
import { IoMoon, IoMoonOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';

export const Header = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  },[theme]);

  const switchTheme = () => {
    setTheme( theme === "light"? "dark" : "light");
  }

  return (
    <section className="shadow header ">
        <div className="container flex-sp-b">
                    <div className="header__name">
                       <Link to="/"> Where is world?</Link>
                    </div>
                    <div className="header__switch" onClick={switchTheme}>
                    <IoMoon /> {theme}
                    </div>
        </div>
    </section>
  )
}
