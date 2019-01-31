import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BPIChart from './components/Chart.jsx';
import chartOptions from './chart.config.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: chartOptions
    }
  }

  componentDidMount() {
    axios.get('/data')
      .then(results => {
        this.setState({ 
          options: {
            type: this.state.options.type,
            data: {
              labels: Object.keys(results.data),
              datasets: [{
                label: this.state.options.data.datasets[0].label,
                data: Object.values(results.data),
                backgroundColor: this.state.options.data.datasets[0].backgroundColor,
                borderColor: this.state.options.data.datasets[0].borderColor,
              }]
            },
            options: this.state.options.options,
          }
        })
      })
      .catch(err => console.error(err));
  }
  
  render() {
    return (
      <div>
        <BPIChart chartOptions={this.state.options}/>
        <p>Powered by CoinDesk</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))