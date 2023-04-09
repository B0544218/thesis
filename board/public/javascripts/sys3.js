Highcharts.setOptions({
    colors: [ '#FAA74B','#01BAF2', '#71BF45','#f6fa4b', '#fbb2ea']
}); 

fetch('./input_data_BR.json').then((response) => {
  return response.json();
}).then((s_json) => {
const output = s_json.filter(function(obj) {
  return obj.username == 108208505;
});
for (let index in output) {
	if (output[index]["class"] == 0)
		output[index]["class"] = "閱讀&重點整理";
    else if (output[index]["class"] == 1)
		output[index]["class"] = "閱讀";
	else if (output[index]["class"] == -1)
		output[index]["class"] = "沒有策略";
}

Highcharts.chart('container3', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'BookRoll'
  },
  xAxis: [{
    categories: ['week1' + '<br/>行為長度: ' + output[0]["length"], 
	'week2' + '<br/>行為長度: ' + output[1]["length"], 'week3' + '<br/>行為長度: ' + output[2]["length"],
	'week4' + '<br/>行為長度: ' + output[3]["length"], 'week5' + '<br/>行為長度: ' + output[4]["length"], 
	'week6' + '<br/>行為長度: ' + output[5]["length"], 'week7' + '<br/>行為長度: ' + output[6]["length"]]
  },
  {
    categories: [output[0]["class"], output[1]["class"], output[2]["class"], output[3]["class"],
	output[4]["class"], output[5]["class"], output[6]["class"]],
    opposite: true
  }],
  yAxis: {
    min: 0,
    max: 100,
    
    title: {
      text: 'Percentage of your behavior'
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
    data: [	output[0]["Reading"], output[1]["Reading"], output[2]["Reading"], 
	output[3]["Reading"], output[4]["Reading"], 
	output[5]["Reading"], output[6]["Reading"] ]
  }, {
    name: '劃記重點',
    data: [	output[0]["Highligt"], output[1]["Highligt"], output[2]["Highligt"], 
	output[3]["Highligt"], output[4]["Highligt"], 
	output[5]["Highligt"], output[6]["Highligt"] ]
  }, {
    name: '筆記',
    data: [	output[0]["Notetaking"], output[1]["Notetaking"], output[2]["Notetaking"], 
	output[3]["Notetaking"], output[4]["Notetaking"], 
	output[5]["Notetaking"], output[6]["Notetaking"] ]
  },
  {
	// 加這段是為了顯示x axis上面的文字
	name: '空的',
    data: [0, 0, 0, 0, 0,0,0],
    xAxis: 1
  }]
});

  
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});

