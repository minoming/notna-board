import Apexcharts from 'react-apexcharts';

export default (props) => {
  const type = "line";
  const series = [
    {
      name: "series-1",
      data: props.data1
    },
  ];
  const options = {
    chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: props.data2
      }
  };

  return (
    <div>
      <h1>sample chart</h1>
      <Apexcharts options={options}
        series={series}
        type="line"
        width="100%"
        height="500"
      ></Apexcharts>
    </div>
  );
};
