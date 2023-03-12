import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { products } from "../../assets/data/data"
import { SearchItems } from "./SearchItems"

export const Hero = () => {
  // search
  const [value, setValue] = useState("")
  const onChanage = (e) => {
    setValue(e.target.value)
  }

  const onSearch = (key) => {
    setValue(key)
    console.log("search", key)
  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <h1>
            <label>
              Mas de <span>100</span> productos
            </label>
            <br />
            <label>
              pensados <span>para ustedes</span>
            </label>
          </h1>
          <p>Coral Shop || Tiendo Online</p>
          <div className='search'>
            <span>Todas las categorias</span>
            <hr />
            <input type='text' placeholder='Buscar productos...' onChange={onChanage} value={value} />
            <button onClick={() => onSearch(value)}>
              <BiSearch className='serachIcon heIcon' />
            </button>
          </div>
          <SearchItems products={products} value={value} onSearch={onSearch} />
          <p>Por ejemplo: Vasos, Carteras, Billeteras</p>
        </div>
      </section>
    </>
  )
}
