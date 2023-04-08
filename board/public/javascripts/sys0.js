
fetch('./questionnaire.json').then((response) => {
  return response.json();
}).then((s_json) => {
  s_json = s_json.find(element => element["username"] == "std1");
//  console.log(s_json);
  
  Highcharts.chart('t1', {
    chart: {
        polar: true,
        type: 'line'
    },

    title: {
    text: 'Motivation'
    },

    pane: {
        size: '80%'
    },

    xAxis: [
	{
        categories: ['内在目標導向', '外在目標導向', '工作價值', '控制信念',
                '自我效能及期望成功', '測試焦慮'],
        tickmarkPlacement: 'off',
        lineWidth: 0
    }
	],

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },credits: {
      enabled: false
  },
    exporting: { enabled: false },
    menu:false,

    legend: false,

    series: [
	{
		name: ['Motivation'],
        data: [s_json['Intrinsic Goal Orientation'], s_json['Extrinsic Goal Orientation'],
		s_json['Task Value'], s_json['Control Beliefs'],
		s_json['Self-Efficacy for Learning and Performance'], s_json['Test Anxiety ']],
        pointPlacement: 'off'
    }]

});

  
Highcharts.chart('t2', {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
    text: 'Strategy'
    },

    pane: {
        size: '80%'
    },

    xAxis: [
	{
        categories: ['複誦', '精緻化', '組織', '批判性思考', '自我調適', '時間和學習環境', '努力規範', '同儕學習', '尋求協助'],
        tickmarkPlacement: 'off',
        lineWidth: 0
    }
	],

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },credits: {
      enabled: false
  },
    exporting: { enabled: false },
    menu:false,

    legend: false,

    series: [
	{
		name: ['Strategy'],
        data: [s_json['Rehearsal'], s_json['Elaboration'], s_json['Marker Memo quality'],
		s_json['Critical Thinking'], s_json['Metacognitive Self-Regulation'], s_json['Time and Study Environment'],
		s_json['Effort Regulation'], s_json['Peer Learning'], s_json['Help Seeking']],
        pointPlacement: 'off'
    }]

});


  
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});

