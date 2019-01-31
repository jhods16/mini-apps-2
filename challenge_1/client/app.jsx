import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import DataViewer from './components/DataViewer.jsx';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      data: [],
      page: 1,
      pageCount: 0,
      editing: {},
      edit: {},
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.searchByKeyword = this.searchByKeyword.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSearchInput(e) {
    this.setState({
      keyword: e.target.value
    })
  }

  searchByKeyword(e) {
    // if there is an event related to this function call, prevent the default,
    // else do nothing (it is called from handlePageClick as well)
    e ? e.preventDefault() : null;

    axios.get(`/events?q=${this.state.keyword}&_page=${this.state.page}`)
      .then(response => {
        this.setState({ 
          data: response.data,
          pageCount: Number(response.headers['x-total-count']) / 10, 
        })
      })
      .catch(err => console.error(err));
  }

  handlePageClick(e) {
    this.setState({
      page: e.selected + 1  
    }, () => {
      this.searchByKeyword();
    })
  }

  handleEdit(entry) {
    this.setState({
      editing: entry,
    })
  }

  handleInput(property, e) {
    this.setState({
      edit: {
        [property]: e.currentTarget.innerText
      }
    })
  }

  handleSave() {
    axios.patch(`/events/${this.state.editing.id}`, this.state.edit)
      .then(result => console.log(result))
      .catch(err => console.error(err));
    console.log('editing:', this.state.editing, 'edit:', this.state.edit)
  }
  
  render() {
    return (
      <div>
        <h2>Historical Data Viewer</h2>
        <Search handleSearchInput={this.handleSearchInput} searchByKeyword={this.searchByKeyword}/>
        <DataViewer 
          keyword={this.state.keyword} 
          data={this.state.data} 
          editing={this.state.editing}
          handleEdit={this.handleEdit} 
          handleInput={this.handleInput} 
          handleSave={this.handleSave}
        />
        <ReactPaginate 
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))