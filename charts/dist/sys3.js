Highcharts.setOptions({
    colors: [ '#FAA74B','#01BAF2', '#71BF45','#f6fa4b', '#fbb2ea']
}); 
Highcharts.chart('container3', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'EBook system'
  },
  subtitle:{
    text:'Behavior'
  },
  xAxis: {
    categories: ['week1' + '<br/>行為長度:', 'week2' + '<br/>行為長度:', 'week3' + '<br/>行為長度:', 'week4' + '<br/>行為長度:', 'week5' + '<br/>行為長度:', 'week6' + '<br/>行為長度:', 'week7' + '<br/>行為長度:']
  },
  yAxis: {
    min: 0,
    max: 100,
    
    title: {
      text: 'Percentage of your behavior in EBook'
    },
    labels: {
      format:'{value} %'
    }
  },
  credits: {
      enabled: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}%'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        formatter:function(){return this.y + '%'}
      }
    }
  },
  series: [{
    name: '閱讀',
    data: [	84,	68,	42,	26,	19,	15,	15]
  }, {
    name: '劃記重點',
    data: [12,	21,	42,	53,	59,	61,	61]
  }, {
    name: '筆記',
    data: [4,	11,	16,	21,	22,	24,	24]
  }]
});