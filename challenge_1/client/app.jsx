import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import DataViewer from './components/DataViewer.jsx';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      data: [],
      page: 0,
      pageCount: 0,
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.searchByKeyword = this.searchByKeyword.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleSearchInput(e) {
    this.setState({
      keyword: e.target.value
    })
  }

  searchByKeyword(e) {
    e.preventDefault();
    fetch(`/events?q=${this.state.keyword}&_page=1`)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(err => console.error(err));
  }

  handlePageClick() {
    console.log('click')
    this.setState({
      page: 1
    })
  }
  
  render() {
    return (
      <div>
        <h2>Historical Data Viewer</h2>
        <Search handleSearchInput={this.handleSearchInput} searchByKeyword={this.searchByKeyword}/>
        <DataViewer data={this.state.data}/>
        <ReactPaginate 
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app'))