import React from 'react'

const BsxSearchBar = () => {
  return (
    <div>
         <form style={{ marginRight: 20 }} class="d-flex container-fluid">
                <input
                  class="form-control rounded-0"
                  type="search"
                  placeholder="Search by Address / Txn Hash / Block / Holder"
                  aria-label="Search"
                  size="130"
                />
                <button class="btn rounded-1" type="submit">
                  <i class="fa fa-search color:white"></i>
                </button>
              </form>
    </div>
  )
}

export default BsxSearchBar