import React from "react";
import { Bar } from "react-chartjs-2";
import './stylo.css';

function setData(data, type) {
    const result = [];
    var i;
    if(type === 'underInvPend'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInvPend);
    }

    else if(type === 'underInvDisp'){
        for(i=0; i<data.length; i++)
        result.push(data[i].underInvDisp);
    }

    else if(type === 'cancelledPend'){
        for(i=0; i<data.length; i++)
         result.push(data[i].cancelledPend);
    }

    else if(type === 'cancelledDisp'){
        for(i=0; i<data.length; i++)
         result.push(data[i].cancelledDisp);
    }

    else if(type === 'underInv1YrPend'){
        for(i=0; i<data.length; i++)
        result.push(data[i].underInv1YrPend);
    }

    else if(type === 'underInv1YrDisp'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInv1YrDisp);
    }

    else if(type === 'underInv6monPend'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInv6monPend);
    }

    else if(type === 'underInv6monDisp'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInv6monDisp);
    }

    else if(type === 'underInvo3monPend'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInvo3monPend);
    }

    else if(type === 'underInvo3monDisp'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInvo3monDisp);
    }

    else if(type === 'underInvl3monPend'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInvl3monPend);
    }

    else if(type === 'underInvl3monDisp'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInvl3monDisp);
    }

    else if(type === 'underInvPendL'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInvPend);
    }

    else if(type === 'underInvDispL'){
        for(i=0; i<data.length; i++)
        result.push(data[i].underInvDisp);
    }

    else if(type === 'cancelledPendL'){
        for(i=0; i<data.length; i++)
         result.push(data[i].cancelledPend);
    }

    else if(type === 'cancelledDispL'){
        for(i=0; i<data.length; i++)
         result.push(data[i].cancelledDisp);
    }

    else if(type === 'underInv1YrPendL'){
        for(i=0; i<data.length; i++)
        result.push(data[i].underInv1YrPend);
    }

    else if(type === 'underInv1YrDispL'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInv1YrDisp);
    }

    else if(type === 'underInv6monPendL'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInv6monPend);
    }

    else if(type === 'underInv6monDispL'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInv6monDisp);
    }

    else if(type === 'underInvo3monPendL'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInvo3monPend);
    }

    else if(type === 'underInvo3monDispL'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInvo3monDisp);
    }

    else if(type === 'underInvl3monPendL'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInvl3monPend);
    }

    else if(type === 'underInvl3monDispL'){
        for(i=0; i<data.length; i++)
         result.push(data[i].underInvl3monDisp);
    }

    else{
        for(i=0; i<data.length; i++){
          var d = data[i].monYear.split(' ')[0].slice(0,3) + ' ' + data[i].monYear.split(' ')[1];
           result.push(d);
        }
    }
   
    return result;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      underInvPend: setData(this.props.ipc, 'underInvPend'),
      underInvDisp: setData(this.props.ipc, 'underInvDisp'),
      cancelledPend: setData(this.props.ipc, 'cancelledPend'),
      cancelledDisp: setData(this.props.ipc, 'cancelledDisp'),
      underInv1YrPend: setData(this.props.ipc, 'underInv1YrPend'),
      underInv1YrDisp: setData(this.props.ipc, 'underInv1YrDisp'),
      underInv6monPend: setData(this.props.ipc, 'underInv6monPend'),
      underInv6monDisp: setData(this.props.ipc, 'underInv6monDisp'),
      underInvo3monPend: setData(this.props.ipc, 'underInvo3monPend'),
      underInvo3monDisp: setData(this.props.ipc, 'underInvo3monDisp'),
      underInvl3monPend: setData(this.props.ipc, 'underInvl3monPend'),
      underInvl3monDisp: setData(this.props.ipc, 'underInvl3monDisp'),
      underInvPendL: setData(this.props.local, 'underInvPendL'),
      underInvDispL: setData(this.props.local, 'underInvDispL'),
      cancelledPendL: setData(this.props.local, 'cancelledPendL'),
      cancelledDispL: setData(this.props.local, 'cancelledDispL'),
      underInv1YrPendL: setData(this.props.local, 'underInv1YrPendL'),
      underInv1YrDispL: setData(this.props.local, 'underInv1YrDispL'),
      underInv6monPendL: setData(this.props.local, 'underInv6monPendL'),
      underInv6monDispL: setData(this.props.local, 'underInv6monDispL'),
      underInvo3monPendL: setData(this.props.local, 'underInvo3monPendL'),
      underInvo3monDispL: setData(this.props.local, 'underInvo3monDispL'),
      underInvl3monPendL: setData(this.props.local, 'underInvl3monPendL'),
      underInvl3monDispL: setData(this.props.local, 'underInvl3monDispL'),
      labels: setData(this.props.ipc, 'month')
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
        labels: this.state.labels,
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
          width={'300px'}
          height={'100px'}
          options={options}
        
        />
      );
  }
}

export default App;