import React, {useState} from "react";
import { Bar, Pie } from "react-chartjs-2";
import { MenuItem, FormControl, Select, Paper, Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
	pageContent : {
		margin: theme.spacing(2),
		padding: theme.spacing(2)
	}
}))

function Graph(props) {
     const policeStation = useState(['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']);
     const caseType= useState(['Feedback', 'Cleaniness', 'Handling']);
     const [cases, setCase]= useState('Feedback');
    
     const classes = useStyle(); 
     const onCaseTypeChange = (event) => {
      setCase(event.target.value)
     }

  const OnDataChanged = (report1, report2) => {
    const name1 = policeStation[0][report1[0].id - 1];
    const name2 = policeStation[0][report2[0].id - 1];

    var data1 = [(report1[0].caseincourt) / 10, report1[0].propDisp / 10, report1[0].propCrime / 10, 2 * report1[0].heniusCrime, 2 * report1[0].POarrested, report1[0].untraceInCourt / 5, report1[0].compDisp / 10];
    var data2 = [(report2[0].caseincourt) / 10, report2[0].propDisp / 10, 2 * report2[0].heniusCrime, 2 * report2[0].POarrested, report2[0].propCrime / 10, report2[0].untraceInCourt / 5, report2[0].compDisp / 10];

    const data = {
      labels: ['Cases in Court', 'Property Disposal', 'Crime against property', 'Heinous Crime', 'PO arrested', 'Untraced Cases in court',
        'Disposal of Complaints'],
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
  
  const OnDataChanged2 = (report1, report2) => {
    const name1 = policeStation[0][report1[0].id - 1];
    const name2 = policeStation[0][report2[0].id - 1];

    var data1 = [2 * report1[0].ndps / 5, 1 * report1[0].arm, report1[0].excise / 5, report1[0].gambling / 5, 2 * report1[0].commercial];
    var data2 = [ 2 * report2[0].ndps / 5, 1 * report2[0].arm, report2[0].excise / 5, report2[0].gambling / 5, 2 * report2[0].commercial];
    
    const data = {
      labels: ['NDPS Act', 'Arm Act', 'Excise Act', 'Gambling Act', 'Commercial Recovery'],
      datasets: [
        {
          label: name1,
          backgroundColor: 'rgba(255, 159, 64, 0.5)',
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
          //stack: 1,
          hoverBackgroundColor: "rgba(255, 159, 64, 2.5)",
          hoverBorderColor: "rgba(255, 159, 64, 4.5)",
          data: data1
        },
        {
          label: name2,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          //stack: 1,
          hoverBackgroundColor: "rgba(255, 99, 132, 2.5)",
          hoverBorderColor: "rgba(255, 99, 132, 4.5)",
          data: data2
        }
      ]
    }

    return data;
  };

  const PieGraphChanged = (report1, report2) => {
    const labels = [policeStation[0][report1[0].id - 1], policeStation[0][report2[0].id - 1]];

    const case_chosen = cases;
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
  
  const BarGraphChanged = (report1, report2) => {
    const labels = [policeStation[0][report1[0].id - 1], policeStation[0][report2[0].id - 1]];
    var data = [1 * report1[0].score, 1 * report2[0].score];

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Score',
          data: data,
          backgroundColor: [
            'rgba(255, 15, 86, 0.5)',
            'rgba(135, 206, 86, 0.5)',
          ],
          borderColor: [
            'rgba(255, 15, 86, 1)',
            'rgba(135, 206, 86, 1)',
          ],
          borderWidth: 1,
        }
      ]
    }

    return chartData

  }

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
        <Paper className={classes.pageContent}>
          <Bar
            data={OnDataChanged(props.data1, props.data2)}
            width={'220px'}
            height={'100px'}
            options={options}
             />
          </Paper>
          <Paper className={classes.pageContent}>
          <Bar
              data={OnDataChanged2(props.data1, props.data2)}
              width={'220px'}
              height={'100px'}
              options={{
                title:{
                display: 'Case Registered under Detection Work',
                text: 'Case Registered under Detection Work',
                fontSize:15
                }
              }}
            />
          </Paper>  
        </Grid>
         <Grid item xs={4}>
         <Paper className={classes.pageContent}>
          <Bar
            data={BarGraphChanged(props.data1, props.data2)}
            height={280}
            options={{
              scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
              },
            title: {
                display: 'Score',
                text: 'Score',
                fontSize: 15
              }
            }}
           />
          </Paper>  
          <Paper className={classes.pageContent}>
          <FormControl className="dash_dropdown" style={{ padding: '10px' , minWidth: 100 }}>
            <Select variant="outlined" onChange={onCaseTypeChange} value={cases}>
              { caseType[0].map((cases) => (
                <MenuItem value={cases}> {cases} </MenuItem>
                ))}
            </Select>
          </FormControl>
          <Pie
            data={PieGraphChanged(props.data1, props.data2)}
            height={250}
            options={{
              title: {
                display: cases,
                text: cases,
                fontSize: 15
              }
            }}
           />
            </Paper>  
         
        </Grid>
    
      </Grid>
    );
}

export default Graph;