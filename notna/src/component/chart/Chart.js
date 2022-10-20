import Apexcharts from 'react-apexcharts';

export default () => {
  const type = "line";
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];
  const options = {
    chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
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
