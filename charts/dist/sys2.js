Highcharts.setOptions({
    colors: [ '#FAA74B','#01BAF2', '#71BF45','#f6fa4b', '#fbb2ea']
}); 
Highcharts.chart('container2', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'VS system'
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
      text: 'Percentage of your behavior in VS'
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
    name: '打字',
    data: [	84,	68,	42,	26,	19,	15,	15]
  }, {
    name: '執行',
    data: [6,	13,	26,	31,	30,	32,	32]
  }, {
    name: '複製貼上',
    data: [4,	11,	16,	21,	22,	24,	24]
  }, {
    name: '開啟檔案',
    data: [6,	8,	16,	22,	29,	29,	29]
  }]
});