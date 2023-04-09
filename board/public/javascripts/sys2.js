Highcharts.setOptions({
    colors: [ '#FAA74B','#01BAF2', '#71BF45','#f6fa4b', '#fbb2ea']
}); 

fetch('./input_data_VS.json').then((response) => {
  return response.json();
}).then((s_json) => {
const output = s_json.filter(function(obj) {
  return obj.username == 108208505;
});
for (let index in output) {
	if (output[index]["class"] == 0)
		output[index]["class"] = "長時間coding";
    else if (output[index]["class"] == 1)
		output[index]["class"] = "短時間coding";
	else if (output[index]["class"] == -1)
		output[index]["class"] = "沒有策略";
}

Highcharts.chart('container2', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'VisCode'
  },
  xAxis: [
  {
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
    name: '打字',
    data: [	output[0]["code_speed"], output[1]["code_speed"], output[2]["code_speed"], 
	output[3]["code_speed"], output[4]["code_speed"], 
	output[5]["code_speed"], output[6]["code_speed"] ]
  }, {
    name: '執行',
    data: [output[0]["Execution"], output[1]["Execution"], output[2]["Execution"], 
	output[3]["Execution"], output[4]["Execution"], 
	output[5]["Execution"], output[6]["Execution"]]
  }, {
    name: '複製貼上',
    data: [ output[0]["copy_paste"], output[1]["copy_paste"], output[2]["copy_paste"], 
	output[3]["copy_paste"], output[4]["copy_paste"], 
	output[5]["copy_paste"], output[6]["copy_paste"] ]
  }, {
    name: '開啟檔案',
    data: [ output[0]["notebook_open"], output[1]["notebook_open"], output[2]["notebook_open"], 
	output[3]["notebook_open"], output[4]["notebook_open"], 
	output[5]["notebook_open"], output[6]["notebook_open"] ]
  },
  {
	// 加這段是為了顯示x axis上面的文字
	name: '空的',
    data: [0, 0, 0, 0, 0,0,0],
    xAxis: 1
  }
  ]
});
  
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});
