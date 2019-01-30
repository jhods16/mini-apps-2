import React from 'react';

const Search = (props) => {
  return (
    <form>
      Find Historical Records:
      <input type='text' name='keyword'></input>
      <button type='submit'>Search by Keyword</button>
    </form>
  )
}

export default Search;