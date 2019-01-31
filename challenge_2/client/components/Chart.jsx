import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';


class BPIChart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    let ctx = ReactDOM.findDOMNode(this.refs.bpichart) 
    let bpiChart = new Chart(ctx, this.props.chartOptions); 
  }

  render() {
    return (
      <canvas ref='bpichart'></canvas>
    )
  }
}

export default BPIChart;
