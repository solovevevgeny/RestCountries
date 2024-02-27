import React from 'react'

export const Controls = () => {
  return (
    <section className='controls'>
      <div className="container   flex-sp-b">
        <div className="controls__search">
          <input type="text" placeholder='Search for countries..'/>
        </div>
        <div className="controls__filter">
          <select name="" id="">
            <option value="">123</option>
            <option value="">321</option>
            <option value="">333</option>
          </select>
        </div>
      </div>
    </section>
  )
}
