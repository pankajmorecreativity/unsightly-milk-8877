import React from 'react'

const Search = () => {
  return (
    <div>
        <input type="text"
        value={text}
        onChange={SearchProducts} />
    </div>
  )
}

export default Search