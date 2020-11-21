import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
// Resolves charts dependancy
charts(FusionCharts);



const PieChart = (props) => {
  const dataSource = {
    chart: {
      caption: "Coin Distribution",
      // subcaption: "MMbbl= One Million barrels",
      enablesmartlabels: "1",
      showlabels: "1",
      numbersuffix: "%",
      usedataplotcolorforlabels: "1",
      plottooltext: "$label, <b>$value</b> MMbbl",
      theme: "candy"
    },
    data: [
      {
        label: props.name1,
        value: props.percent1
      },
      {
        label: props.name2,
        value: props.percent2
      },
      {
        label: props.name3,
        value: props.percent3
      },
      {
        label: props.name4,
        value: props.percent4
      }
      ,
      {
        label: props.name5,
        value: props.percent5
      }
      ,
      {
        label: props.name6,
        value: props.percent6
      }
    ]
  };
    return (
      <ReactFusioncharts
        type="doughnut3d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
}
export default PieChart;