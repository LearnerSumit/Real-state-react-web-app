import './searchBar.scss'
import search from "../../assets/search.png"
import { useState } from 'react'

const types = ["Buy","Rent"];
function SearchBar() {
  const [query ,setQuery] = useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0
  })

  const switchType = (val) =>{
    setQuery(()=>{
      return {...query,type:val.toLowerCase()}
    })
  }
  return (
    <div className="searchbar">
      <div className="type">
        {
          types.map((type)=>{
            return <button key={type} onClick={()=>{switchType(type)}} className={query.type === type.toLowerCase()?"active":""}>{type}</button>
          })
        }
      </div>
      <form action="">
        <input type="text" name='location' placeholder='City Location' />
        <input type="number" name='minPrice' min={0} max={100000000} placeholder='Min Price' />
        <input type="number" name='maxPrice' min={0} max={100000000} placeholder='Max Price' />
        <button>
          <img src={search} alt="" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar