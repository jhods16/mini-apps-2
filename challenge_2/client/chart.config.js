module.exports = {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Historical BPI',
      data: [],
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
      borderColor: 'purple',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Closing Price ($)'
        },
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        // type: 'date',
        distribution: 'series',
        scaleLabel: {
          display: true,
          labelString: 'Date'
        },
        ticks: {
          source: 'labels'
        }
      }],
    }
  }
}