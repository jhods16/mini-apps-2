import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={props.searchByKeyword}>
      Find Historical Records:
      <input type='text' name='keyword' onChange={props.handleSearchInput.bind(this)}></input>
      <button type='submit'>Search by Keyword</button>
    </form>
  )
}

export default Search;