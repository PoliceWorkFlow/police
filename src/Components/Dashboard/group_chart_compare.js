import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { MenuItem, FormControl, Select, Paper, Grid } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policeStation: ['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur'],
      caseType: ['Feedback', 'Cleaniness', 'Handling'],
      case: 'Feedback'
    }
  };

  onCaseTypeChange = (event) => {
    this.setState({ case: event.target.value });
  }

  OnDataChanged = (report1, report2) => {
    const name1 = this.state.policeStation[report1[0].id - 1];
    const name2 = this.state.policeStation[report2[0].id - 1];

    var data1 = [(report1[0].caseincourt) / 10, report1[0].propDisp / 10, report1[0].propCrime / 10, 2 * report1[0].heniusCrime, 2 * report1[0].POarrested, report1[0].untraceInCourt / 5, report1[0].compDisp / 10, 2 * report1[0].ndps / 5, 1 * report1[0].arm, report1[0].excise / 5, report1[0].gambling / 5, 2 * report1[0].commercial];
    var data2 = [(report2[0].caseincourt) / 10, report2[0].propDisp / 10, 2 * report2[0].heniusCrime, 2 * report2[0].POarrested, report2[0].propCrime / 10, report2[0].untraceInCourt / 5, report2[0].compDisp / 10, 2 * report2[0].ndps / 5, 1 * report2[0].arm, report2[0].excise / 5, report2[0].gambling / 5, 2 * report2[0].commercial];

    const data = {
      labels: ['Cases Submitted in Court', 'Property Disposal', 'Untraced cases of crime against property', 'Heinous Crime', 'PO arrested', 'Untraced Cases put in court',
        'Disposal of Complaints', 'NDPS Act', 'Arm Act', 'Excise Act', 'Gambling Act', 'Commercial Recovery'
      ],
      datasets: [
        {
          label: name1,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 5.6)",
          borderWidth: 1,
          //stack: 1,
          hoverBackgroundColor: "rgba(54, 162, 235, 2.6)",
          hoverBorderColor: "rgba(54, 162, 235, 5.6)",
          data: data1
        },
        {
          label: name2,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255,99,132,5.6)",
          borderWidth: 1,
          //stack: 1,
          hoverBackgroundColor: "rgba(255,99,132,2.6)",
          hoverBorderColor: "rgba(255,99,132,5.6)",
          data: data2
        }
      ]
    }

    return data;
  };

  PieGraphChanged = (report1, report2) => {
    const labels = [this.state.policeStation[report1[0].id - 1], this.state.policeStation[report2[0].id - 1]];

    const case_chosen = this.state.case;
    var data = [];

    if (case_chosen === 'Feedback') {
      const feedback = [1 * report1[0].feedback, 1 * report2[0].feedback]
      data = feedback
    }
    else if (case_chosen === 'Cleaniness') {
      const clean = [1 * report1[0].cleaniness, 1 * report2[0].cleaniness];
      data = clean
    }
    else if (case_chosen === 'Handling') {
      const handling = [1 * report1[0].handling, 1 * report2[0].handling];
      data = handling
    }

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: case_chosen,
          data: data,

          backgroundColor: [
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 15, 86, 0.5)',
            'rgba(255, 206, 236, 0.5)',
            'rgba(135, 206, 86, 0.5)',
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 15, 86, 1)',
            'rgba(255, 206, 236, 1)',
            'rgba(135, 206, 86, 1)',
          ],
          borderWidth: 1,
        }
      ]
    }

    return chartData

  }

  render() {
    const options = {
      responsive: true,
      legend: {
        display: true
      },
      type: "bar"
    };

    return (
      <Grid container>
        <Grid item xs={8}>
    
        <Paper>
          <Bar
            data={this.OnDataChanged(this.props.data1, this.props.data2)}
            width={'300px'}
            height={'150px'}
            options={options}
          />
          </Paper>
        </Grid>
         <Grid item xs={4}>
          <Paper >
          <FormControl className="dash_dropdown" style={{ padding: '10px' , minWidth: 100 }}>
            <Select variant="outlined" onChange={this.onCaseTypeChange} value={this.state.case} >
              {this.state.caseType.map((cases) => (
                <MenuItem value={cases}> {cases} </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Pie
            data={this.PieGraphChanged(this.props.data1, this.props.data2)}
            height={240}
            options={{
              title: {
                display: this.state.case,
                text: this.state.case,
                fontSize: 15
              }
            }}
          />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;