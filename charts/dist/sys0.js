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
         data: [43, 80, 80, 35, 17, 10],
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
         data: [3, 2, 5, 5, 1, 1, 4, 3, 4],
        pointPlacement: 'off'
    }]

});

