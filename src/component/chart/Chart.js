import Apexcharts from 'react-apexcharts'

export default (props) => {
  const series = [
    {
      name: '2018년',
      data: [0.98],
    },
    {
      name: '2019년',
      data: [0.92],
    },
    {
      name: '2020년',
      data: [0.84],
    },
    {
      name: '2021년',
      data: [0.81],
    },
    {
      name: '2022년',
      data: [0.78],
    },
  ]
  const options = {
    title: {
      text: '최근 5년간 합계 출산율',
    },
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['합계 출산율'],
    },
    annotations: {},
  }

  return (
    <div>
      <Apexcharts
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="500"
      ></Apexcharts>
    </div>
  )
}
