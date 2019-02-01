import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BPIChart from './components/Chart.jsx';
import chartOptions from './chart.config.js';
import DatePicker from './components/DatePicker.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // options: chartOptions,
      labels: [],
      data: [],
      start: '',
      end: '',     
    }
    this.updateChart = this.updateChart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.updateChart({});
  }
  
  updateChart(query) {
    axios.get('/data', query)
      .then(results => {
        this.setState({
          labels: Object.keys(results.data),
          data: Object.values(results.data),
        })
      })
      .catch(err => console.error(err));  
  }
  
  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value  
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = { 
      params: {
        start: this.state.start,
        end: this.state.end
      }
    }
    this.updateChart(query);
  }

  render() {
    return (
      <div>
        <DatePicker handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <BPIChart labels={this.state.labels} data={this.state.data}/>
        <p>Powered by CoinDesk</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))