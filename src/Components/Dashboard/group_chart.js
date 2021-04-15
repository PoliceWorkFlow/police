import React from "react";
import { Bar } from "react-chartjs-2";
import './stylo.css';
import { Group } from "@material-ui/icons";
import { useForkRef } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      underInvPend:[this.props.ipc[0].underInvPend, this.props.ipc[1].underInvPend, this.props.ipc[2].underInvPend, this.props.ipc[3].underInvPend, this.props.ipc[4].underInvPend, this.props.ipc[5].underInvPend, this.props.ipc[6].underInvPend, this.props.ipc[7].underInvPend, this.props.ipc[8].underInvPend, this.props.ipc[9].underInvPend],
      underInvDisp:[this.props.ipc[0].underInvDisp, this.props.ipc[1].underInvDisp, this.props.ipc[2].underInvDisp, this.props.ipc[3].underInvDisp, this.props.ipc[4].underInvDisp, this.props.ipc[5].underInvDisp, this.props.ipc[6].underInvDisp, this.props.ipc[7].underInvDisp, this.props.ipc[8].underInvDisp, this.props.ipc[9].underInvDisp],
      cancelledPend: [this.props.ipc[0].cancelledPend, this.props.ipc[1].cancelledPend, this.props.ipc[2].cancelledPend, this.props.ipc[3].cancelledPend, this.props.ipc[4].cancelledPend, this.props.ipc[5].cancelledPend, this.props.ipc[6].cancelledPend, this.props.ipc[7].cancelledPend, this.props.ipc[8].cancelledPend, this.props.ipc[9].cancelledPend],
      cancelledDisp: [this.props.ipc[0].cancelledDisp, this.props.ipc[1].cancelledDisp, this.props.ipc[2].cancelledDisp, this.props.ipc[3].cancelledDisp, this.props.ipc[4].cancelledDisp, this.props.ipc[5].cancelledDisp, this.props.ipc[6].cancelledDisp, this.props.ipc[7].cancelledDisp, this.props.ipc[8].cancelledDisp, this.props.ipc[9].cancelledDisp],
      underInv1YrPend: [this.props.ipc[0].underInv1YrPend, this.props.ipc[1].underInv1YrPend, this.props.ipc[2].underInv1YrPend, this.props.ipc[3].underInv1YrPend, this.props.ipc[4].underInv1YrPend, this.props.ipc[5].underInv1YrPend, this.props.ipc[6].underInv1YrPend, this.props.ipc[7].underInv1YrPend, this.props.ipc[8].underInv1YrPend, this.props.ipc[9].underInv1YrPend],
      underInv1YrDisp: [this.props.ipc[0].underInv1YrDisp, this.props.ipc[1].underInv1YrDisp, this.props.ipc[2].underInv1YrDisp, this.props.ipc[3].underInv1YrDisp, this.props.ipc[4].underInv1YrDisp, this.props.ipc[5].underInv1YrDisp, this.props.ipc[6].underInv1YrDisp, this.props.ipc[7].underInv1YrDisp, this.props.ipc[8].underInv1YrDisp, this.props.ipc[9].underInv1YrDisp],
      underInv6monPend: [this.props.ipc[0].underInv6monPend, this.props.ipc[1].underInv6monPend, this.props.ipc[2].underInv6monPend, this.props.ipc[3].underInv6monPend, this.props.ipc[4].underInv6monPend, this.props.ipc[5].underInv6monPend, this.props.ipc[6].underInv6monPend, this.props.ipc[7].underInv6monPend, this.props.ipc[8].underInv6monPend, this.props.ipc[9].underInv6monPend],
      underInv6monDisp: [this.props.ipc[0].underInv6monDisp, this.props.ipc[1].underInv6monDisp, this.props.ipc[2].underInv6monDisp, this.props.ipc[3].underInv6monDisp, this.props.ipc[4].underInv6monDisp, this.props.ipc[5].underInv6monDisp, this.props.ipc[6].underInv6monDisp, this.props.ipc[7].underInv6monDisp, this.props.ipc[8].underInv6monDisp, this.props.ipc[9].underInv6monDisp],
      underInvo3monPend: [this.props.ipc[0].underInvo3monPend, this.props.ipc[1].underInvo3monPend, this.props.ipc[2].underInvo3monPend, this.props.ipc[3].underInvo3monPend, this.props.ipc[4].underInvo3monPend, this.props.ipc[5].underInvo3monPend, this.props.ipc[6].underInvo3monPend, this.props.ipc[7].underInvo3monPend, this.props.ipc[8].underInvo3monPend, this.props.ipc[9].underInvo3monPend],
      underInvo3monDisp: [this.props.ipc[0].underInvo3monDisp, this.props.ipc[1].underInvo3monDisp, this.props.ipc[2].underInvo3monDisp, this.props.ipc[3].underInvo3monDisp, this.props.ipc[4].underInvo3monDisp, this.props.ipc[5].underInvo3monDisp, this.props.ipc[6].underInvo3monDisp, this.props.ipc[7].underInvo3monDisp, this.props.ipc[8].underInvo3monDisp, this.props.ipc[9].underInvo3monDisp],
      underInvl3monPend: [this.props.ipc[0].underInvl3monPend, this.props.ipc[1].underInvl3monPend, this.props.ipc[2].underInvl3monPend, this.props.ipc[3].underInvl3monPend, this.props.ipc[4].underInvl3monPend, this.props.ipc[5].underInvl3monPend, this.props.ipc[6].underInvl3monPend, this.props.ipc[7].underInvl3monPend, this.props.ipc[8].underInvl3monPend, this.props.ipc[9].underInvl3monPend],
      underInvl3monDisp: [this.props.ipc[0].underInvl3monDisp, this.props.ipc[1].underInvl3monDisp, this.props.ipc[2].underInvl3monDisp, this.props.ipc[3].underInvl3monDisp, this.props.ipc[4].underInvl3monDisp, this.props.ipc[5].underInvl3monDisp, this.props.ipc[6].underInvl3monDisp, this.props.ipc[7].underInvl3monDisp, this.props.ipc[8].underInvl3monDisp, this.props.ipc[9].underInvl3monDisp],
      underInvPendL:[this.props.local[0].underInvPend, this.props.local[1].underInvPend, this.props.local[2].underInvPend, this.props.local[3].underInvPend, this.props.local[4].underInvPend, this.props.local[5].underInvPend, this.props.local[6].underInvPend, this.props.local[7].underInvPend, this.props.local[8].underInvPend, this.props.local[9].underInvPend],
      underInvDispL:[this.props.local[0].underInvDisp, this.props.local[1].underInvDisp, this.props.local[2].underInvDisp, this.props.local[3].underInvDisp, this.props.local[4].underInvDisp, this.props.local[5].underInvDisp, this.props.local[6].underInvDisp, this.props.local[7].underInvDisp, this.props.local[8].underInvDisp, this.props.local[9].underInvDisp],
      cancelledPendL: [this.props.local[0].cancelledPend, this.props.local[1].cancelledPend, this.props.local[2].cancelledPend, this.props.local[3].cancelledPend, this.props.local[4].cancelledPend, this.props.local[5].cancelledPend, this.props.local[6].cancelledPend, this.props.local[7].cancelledPend, this.props.local[8].cancelledPend, this.props.local[9].cancelledPend],
      cancelledDispL: [this.props.local[0].cancelledDisp, this.props.local[1].cancelledDisp, this.props.local[2].cancelledDisp, this.props.local[3].cancelledDisp, this.props.local[4].cancelledDisp, this.props.local[5].cancelledDisp, this.props.local[6].cancelledDisp, this.props.local[7].cancelledDisp, this.props.local[8].cancelledDisp, this.props.local[9].cancelledDisp],
      underInv1YrPendL: [this.props.local[0].underInv1YrPend, this.props.local[1].underInv1YrPend, this.props.local[2].underInv1YrPend, this.props.local[3].underInv1YrPend, this.props.local[4].underInv1YrPend, this.props.local[5].underInv1YrPend, this.props.local[6].underInv1YrPend, this.props.local[7].underInv1YrPend, this.props.local[8].underInv1YrPend, this.props.local[9].underInv1YrPend],
      underInv1YrDispL: [this.props.local[0].underInv1YrDisp, this.props.local[1].underInv1YrDisp, this.props.local[2].underInv1YrDisp, this.props.local[3].underInv1YrDisp, this.props.local[4].underInv1YrDisp, this.props.local[5].underInv1YrDisp, this.props.local[6].underInv1YrDisp, this.props.local[7].underInv1YrDisp, this.props.local[8].underInv1YrDisp, this.props.local[9].underInv1YrDisp],
      underInv6monPendL: [this.props.local[0].underInv6monPend, this.props.local[1].underInv6monPend, this.props.local[2].underInv6monPend, this.props.local[3].underInv6monPend, this.props.local[4].underInv6monPend, this.props.local[5].underInv6monPend, this.props.local[6].underInv6monPend, this.props.local[7].underInv6monPend, this.props.local[8].underInv6monPend, this.props.local[9].underInv6monPend],
      underInv6monDispL: [this.props.local[0].underInv6monDisp, this.props.local[1].underInv6monDisp, this.props.local[2].underInv6monDisp, this.props.local[3].underInv6monDisp, this.props.local[4].underInv6monDisp, this.props.local[5].underInv6monDisp, this.props.local[6].underInv6monDisp, this.props.local[7].underInv6monDisp, this.props.local[8].underInv6monDisp, this.props.local[9].underInv6monDisp],
      underInvo3monPendL: [this.props.local[0].underInvo3monPend, this.props.local[1].underInvo3monPend, this.props.local[2].underInvo3monPend, this.props.local[3].underInvo3monPend, this.props.local[4].underInvo3monPend, this.props.local[5].underInvo3monPend, this.props.local[6].underInvo3monPend, this.props.local[7].underInvo3monPend, this.props.local[8].underInvo3monPend, this.props.local[9].underInvo3monPend],
      underInvo3monDispL: [this.props.local[0].underInvo3monDisp, this.props.local[1].underInvo3monDisp, this.props.local[2].underInvo3monDisp, this.props.local[3].underInvo3monDisp, this.props.local[4].underInvo3monDisp, this.props.local[5].underInvo3monDisp, this.props.local[6].underInvo3monDisp, this.props.local[7].underInvo3monDisp, this.props.local[8].underInvo3monDisp, this.props.local[9].underInvo3monDisp],
      underInvl3monPendL: [this.props.local[0].underInvl3monPend, this.props.local[1].underInvl3monPend, this.props.local[2].underInvl3monPend, this.props.local[3].underInvl3monPend, this.props.local[4].underInvl3monPend, this.props.local[5].underInvl3monPend, this.props.local[6].underInvl3monPend, this.props.local[7].underInvl3monPend, this.props.local[8].underInvl3monPend, this.props.local[9].underInvl3monPend],
      underInvl3monDispL: [this.props.local[0].underInvl3monDisp, this.props.local[1].underInvl3monDisp, this.props.local[2].underInvl3monDisp, this.props.local[3].underInvl3monDisp, this.props.local[4].underInvl3monDisp, this.props.local[5].underInvl3monDisp, this.props.local[6].underInvl3monDisp, this.props.local[7].underInvl3monDisp, this.props.local[8].underInvl3monDisp, this.props.local[9].underInvl3monDisp]
      }
    };
      
    OnDataChanged = () => {
      const type = this.props.case_chosen;
      var dataPend = [];
      var dataDisp = [];
      var dataPendLocal = [];
      var dataDispLocal = [];

      if(type === 'Under Investigation'){
          dataDisp = this.state.underInvDisp;
          dataPend = this.state.underInvPend;
          dataDispLocal = this.state.underInvDispL;
          dataPendLocal = this.state.underInvPendL;
        //  console.log(dataDisp, dataPend, dataDispLocal, dataPendLocal);
      }
      else if(type === 'Cancellation/Untraced'){
        dataDisp = this.state.cancelledDisp;
        dataPend = this.state.cancelledPend;
        dataDispLocal = this.state.cancelledDispL;
        dataPendLocal = this.state.cancelledPendL;
       // console.log(dataDisp, dataPend, dataDispLocal, dataPendLocal);
        }
      else if(type === 'Under Investigation Over 1 Year'){
          dataDisp = this.state.underInv1YrDisp;
          dataPend = this.state.underInv1YrPend;
          dataDispLocal = this.state.underInv1YrDispL;
          dataPendLocal = this.state.underInv1YrPendL; 
      }
      else if(type === 'Under Investigation Over 6 Month'){
        dataDisp = this.state.underInv6monDisp;
        dataPend = this.state.underInv6monPend;
        dataDispLocal = this.state.underInv6monDispL;
        dataPendLocal = this.state.underInv6monPendL;
        //console.log(dataDisp, dataPend, dataDispLocal, dataPendLocal);
      }
      else if(type === 'Under Investigation Over 3 Month'){
        dataDisp = this.state.underInvo3monDisp;
        dataPend = this.state.underInvo3monPend;
        dataDispLocal = this.state.underInvo3monDispL;
        dataPendLocal = this.state.underInvo3monPendL;
        //console.log(dataDisp, dataPend, dataDispLocal, dataPendLocal);
      }
      else if(type === 'Under Investigation less than 3 month'){
        dataDisp = this.state.underInvl3monDisp;
        dataPend = this.state.underInvl3monPend;
        dataDispLocal = this.state.underInvl3monDispL;
        dataPendLocal = this.state.underInvl3monPendL;
        //console.log(dataDisp, dataPend, dataDispLocal, dataPendLocal);
      }
     
      const data = {
        labels: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib',
        'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur'
        ],
        datasets: [
          { 
            label: 'Under IPC Law Pending',
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 5.6)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(54, 162, 235, 2.6)",
            hoverBorderColor: "rgba(54, 162, 235, 5.6)",
            data: dataPend
          },
          {
            label: 'Under IPC Law Disposed',
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255,99,132,5.6)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,2.6)",
            hoverBorderColor: "rgba(255,99,132,5.6)",
            data: dataDisp
          },

          {
            label: 'Under Local & Special Law Pending',
            backgroundColor: "rgba(255, 159, 64, 0.6)",
            borderColor: "rgba(255, 159, 64, 5.6)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255, 159, 64, 2.6)",
            hoverBorderColor: "rgba(255, 159, 64, 5.6)",
            data: dataPendLocal
          },

          {
            label: 'Under Local & Special Law Disposed',
            backgroundColor: "rgba(11, 156, 49, 0.5)",
            borderColor: "rgba(11, 156, 49, 5.5)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(11, 156, 49, 2.5)",
            hoverBorderColor: "rgba(11, 156, 49, 5.5)",
            data: dataDispLocal
          },
        ]
      }

      return data;
    };

  render() {
    const options = {
      responsive: true,
      legend: {
        display: true
      },
      type: "bar"
      //   scales: {
      //     xAxes: [{
      //         stacked: true
      //     }],
      //     yAxes: [{
      //         stacked: true
      //     }]
      // }
    };
    return (
      <Bar
        data={this.OnDataChanged}
        width={'450px'}
        height={'500px'}
        options={options}
       
      />
    );
  }
}

export default App;