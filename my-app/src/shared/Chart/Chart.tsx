import ReactECharts from 'echarts-for-react';

export const Chart = () => {
  const getOptions = () => ({
    title: {
      text: 'JS Front End Frameworks',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      bottom: 'bottom',

      data: ['React', 'Angular', 'Vue'],
    },
    series: [
      {
        name: 'JS FrontEnd',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          {
            value: 50,
            name: 'React',
          },
          {
            value: 22,
            name: 'Angular',
          },
          {
            value: 28,
            name: 'Vue',
          },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  });
  return (
    <ReactECharts
      option={getOptions()}
      notMerge={true}
      lazyUpdate={true}
      theme={'theme_name'}
      //   onChartReady={this.onChartReadyCallback}
      //   onEvents={EventsDict}
    //   opts={option}
    />
  );
};
