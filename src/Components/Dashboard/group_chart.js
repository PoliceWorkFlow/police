import React from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";

import './stylo.css';
import { Group } from "@material-ui/icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib',
        'Sri Chamkaru Sahib', 'Sadar Rupanagar', 'Sadar Morinda', 'Nupurbedi', 'Singh Bhagwantpur'
        ],
        datasets: [
          {
            label: "Handling of law and order sitution",
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 5.6)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(54, 162, 235, 2.6)",
            hoverBorderColor: "rgba(54, 162, 235, 5.6)",
            data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
          },
          {
            label: "Disposal of complainsts",
            backgroundColor: "rgba(255, 99, 132, 0.6)",
            borderColor: "rgba(255,99,132,5.6)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,2.6)",
            hoverBorderColor: "rgba(255,99,132,5.6)",
            data:  [6.6, 1.5, 2.5, 3, 3.2, 5, 4.9, 3.5, 3.6, 3.4]
          },

          {
            label: "Property disposal",
            backgroundColor: "rgba(255, 159, 64, 0.6)",
            borderColor: "rgba(255, 159, 64, 5.6)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255, 159, 64, 2.6)",
            hoverBorderColor: "rgba(255, 159, 64, 5.6)",
            data: [5, 10.8, 8.3, 9, 7, 5.1, 7.5, 7.5, 5.2, 6.9, 3]
          },

          {
            label: "Points on arrest",
            backgroundColor: "rgba(11, 156, 49, 0.5)",
            borderColor: "rgba(11, 156, 49, 5.5)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(11, 156, 49, 2.5)",
            hoverBorderColor: "rgba(11, 156, 49, 5.5)",
            data: [16, 2, 10, 2, 8, 4, 4, 6, 2, 2]
          },

          {
            label: "Negligence in duty/public dealing/image in public and feedback",
            backgroundColor: "rgba(255, 100, 64, 0.5)",
            borderColor: "rgba(255, 100, 64, 5.5)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255, 100, 64, 2.5)",
            hoverBorderColor: "rgba(255, 100, 64, 5.5)",
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
          },

          {
            label: "Cleanliness of police station",
            backgroundColor: "rgba(121, 7, 242, 0.4)",
            borderColor: "rgba(121, 7, 242, 5.4)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(121, 7, 242, 2.4)",
            hoverBorderColor:"rgba(121, 7, 242, 5.4)",
            data: [2, 2, 2, 2, 4, 2, 2, 2, 2, 4]
          },

          {
            label: "Untraced court cases",
            backgroundColor: "rgba(14, 147, 167, 0.5)",
            borderColor: "rgba(14, 147, 167, 5.5)",
            borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(14, 147, 167, 2.5)",
            hoverBorderColor: "rgba(14, 147, 167, 5.5)",
            data: [12.4, 12.2, 8.4, 3.6, 2.6, 7, 5.8, 6, 5, 2.8]
          }
        ]
      }
    };
  }

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
        data={this.state.data}
        width={null}
        height={null}
        options={options}
       
      />
    );
  }
}


export default App;