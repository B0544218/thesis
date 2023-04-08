Highcharts.setOptions({
    colors: [ '#FAA74B','#01BAF2', '#71BF45','#f6fa4b', '#fbb2ea']
}); 
Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Percentage of the foreign-born population in the US'
  },
  subtitle:{
    text:'Source:<a href="https://en.Wikipedia.org/wiki/Immigration_to_the_United_States"> wikipedia</a>'
  },
  xAxis: {
    categories: ['1960', '1970', '1980', '1990', '2000', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
  },
  yAxis: {
    min: 0,
    max: 100,
    
    title: {
      text: 'Percentage of the foreign-born population'
    },
    labels: {
      format:'{value} %'
    }
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
    name: 'Europe-Canada',
    data: [	84,	68,	42,	26,	19,	15,	15,	14,	14,	14,	14,	13]
  }, {
    name: 'Asia',
    data: [4,	7,	15,	22,	23,	25,	25,	26,	26,	26,	27,	27]
  }, {
    name: 'Latin America',
    data: [4,	11,	16,	21,	22,	24,	24,	24,	24,	24,	24,	25]
  }, {
    name: 'Mexico',
    data: [6,	8,	16,	22,	29,	29,	29,	28,	28,	28,	27,	26]
  }, {
    name: 'Other',
    data: [2,	6,	11,	9,	7,	7,	7,	8,	8,	8,	8,	9]
  }]
});