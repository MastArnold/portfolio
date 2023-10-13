const ctx = document.getElementById('myChart');
const ctx_log = document.getElementById('logChart');
const ctx_mobile = document.getElementById('mobileChart');

const dataRadar = {
    labels: [
      'HTML / CSS',
      'Bootstrap',
      'JS',
      'JQuery',
      'NodeJS',
      'Angular',
      'PHP',
      'Laravel',
      'MySQL',
      'MongoDB',
      'Django'
    ],
    datasets: [{
      label: '',
      data: [95, 95, 90, 70, 50, 90, 90, 60, 80, 75, 70],
      fill: true,
      backgroundColor: 'rgba(28, 42, 67, 0.2)',
      borderColor: 'rgb(255, 255, 255)',
      pointBackgroundColor: 'rgb(28, 42, 67)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
      label: '',
      data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
      fill: true,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0)',
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      fill: true,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0)',
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: 'rgba(255, 255, 255, 0)',
      pointHoverBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointHoverBorderColor: 'rgb(255, 99, 132, 0)'
    }]
  };

const dataRadarMobile = {
  labels: [
    'Kotlin',
    'Flutter',
    'IONIC'
  ],
  datasets: [{
    label: '',
    data: [60, 55, 65],
    fill: true,
    backgroundColor: 'rgba(28, 42, 67, 0.2)',
    borderColor: 'rgb(255, 255, 255)',
    pointBackgroundColor: 'rgb(28, 42, 67)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  },
  {
    label: '',
    data: [100, 100, 100],
    fill: true,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor: 'rgba(255, 255, 255, 0)',
    pointBackgroundColor: 'rgba(255, 255, 255, 0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  },
  {
    label: '',
    data: [0, 0, 0],
    fill: true,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor: 'rgba(255, 255, 255, 0)',
    pointBackgroundColor: 'rgba(255, 255, 255, 0)',
    pointBorderColor: 'rgba(255, 255, 255, 0)',
    pointHoverBackgroundColor: 'rgba(255, 255, 255, 0)',
    pointHoverBorderColor: 'rgb(255, 99, 132, 0)'
  }]
};

const dataRadarLog = {
    labels: [
      'C',
      'C#',
      'C++',
      'Java',
      'Java FX',
      'Python'
    ],
    datasets: [{
      label: '',
      data: [45, 70, 55, 76, 80, 70],
      fill: true,
      backgroundColor: 'rgba(28, 42, 67, 0.2)',
      borderColor: 'rgb(255, 255, 255)',
      pointBackgroundColor: 'rgb(28, 42, 67)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
      label: '',
      data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
      fill: true,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0)',
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      fill: true,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0)',
      pointBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointBorderColor: 'rgba(255, 255, 255, 0)',
      pointHoverBackgroundColor: 'rgba(255, 255, 255, 0)',
      pointHoverBorderColor: 'rgb(255, 99, 132, 0)'
    }]
  };

const dataBar = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1
  }]
};