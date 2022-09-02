import React, { useContext } from 'react'
import {ThemeContext} from '../Context/theme'
const BsxSearchBar = () => {
  const [{theme,isDark}] = useContext(ThemeContext);
  
  return (
    <div>
         <form style={{ marginRight: 20 }} className="d-flex container-fluid">
                <button className={`shadow-lg rounded-1 ${isDark ? "btn-dark" : "btn-light"}`} style={{width:"100px"}} type="submit">
                  All Filters
                </button>
                <input
                  style={{backgroundColor : theme.backgroundColor,border:"none"}}
                  className="form-control rounded-0"
                  type="search"
                  placeholder="Search by Address / Txn Hash / Block / Holder"
                  aria-label="Search"
                  size="130"
                />
                <button className="shadow-lg btn rounded-1" type="submit">
                  <i className="fa fa-search color:white"></i>
                </button>
              </form>
    </div>
  )
}

export default BsxSearchBar