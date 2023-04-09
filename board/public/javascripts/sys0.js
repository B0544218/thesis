
fetch('./questionnaire.json').then((response) => {
  return response.json();
}).then((s_json) => {
s_json = s_json.filter(function(obj) {
  return obj.username == 109408533;
});
// s_json = s_json.find(element => element["username"] == 109408533);
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
		tickInterval: 1,
        max: 5,
		min: 1
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
        data: [s_json[0]['Intrinsic Goal Orientation'], s_json[0]['Extrinsic Goal Orientation'],
		s_json[0]['Task Value'], s_json[0]['Control Beliefs'],
		s_json[0]['Self-Efficacy for Learning and Performance'], s_json[0]['Test Anxiety ']],
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
		tickInterval: 1,
		max: 5,
		min:1
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
        data: [s_json[0]['Rehearsal'], s_json[0]['Elaboration'], s_json[0]['Marker Memo quality'],
		s_json[0]['Critical Thinking'], s_json[0]['Metacognitive Self-Regulation'], s_json[0]['Time and Study Environment'],
		s_json[0]['Effort Regulation'], s_json[0]['Peer Learning'], s_json[0]['Help Seeking']],
        pointPlacement: 'off'
    }]

});


  
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});

