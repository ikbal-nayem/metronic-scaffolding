type IChart = {
  series: any
  options: any
  colors?: any[]
}

export const colorSet = ['#00ABB3', '#85929E', '#3C4048']

export const chartInitState: IChart = {
  series: [0],
  options: {
    chart: {type: 'donut'},
    colors: colorSet,
    labels: ['Paid', 'Free'],
    legend: {
      show: true,
      fontSize: '11px',
      position: 'bottom',
      labels: {
        useSeriesColors: true,
      },
      markers: {width: 8, height: 8},
      formatter: (seriesName, opts) => {
        return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {vertical: 3},
    },
    // plotOptions: {
    //   pie: {
    //     donut: {
    //       labels: {
    //         show: true,
    //         total: {
    //           show: true,
    //           showAlways: true,
    //           label: 'Total store',
    //           fontSize: 12,
    //         },
    //         value: {
    //           show: true,
    //           fontWeight: 'bold',
    //         },
    //       },
    //     },
    //   },
    // },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {height: 180, width: '100%'},
          legend: {
            fontSize: '9px',
            itemMargin: {vertical: 1},
            markers: {width: 5, height: 5},
          },
        },
      },
      {
        breakpoint: 440,
        options: {
          chart: {width: '100%', height: 190},
          legend: {
            fontSize: '9px',
            itemMargin: {vertical: 1},
            markers: {width: 5, height: 5},
          },
        },
      },
    ],
  },
}

export const lineChartInit: IChart = {
  series: [{data: []}],
  options: {
    chart: {
      group: 'social',
      toolbar: {show: false},
      type: 'area',
      height: 150,
      width: '100%',
    },
    colors: ['#1ABC9C'],
    xaxis: {
      convertedCatToNumeric: true,
      categories: [],
    },
  },
}
