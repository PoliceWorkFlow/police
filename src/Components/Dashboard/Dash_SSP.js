import React from 'react';
import './dashboard.css';
import { MenuItem, FormControl, Select, Grid, Card, CardContent} from "@material-ui/core";
import 'tachyons';
import Table from './Table';
import 'tachyons';
import Sample from './stacked_graph'
import Grou from './group_chart'
import Simple from './simplechart'

function Dashboard(props){
   
   const [case_chosen, setCaseType] = React.useState('Cases Submitted in Court')
	const caseType = React.useState([ 'Cases Submitted in Court', 'Henius Crime', 'Untraced cases of crime against property', 'Disposal of Complaints', 'Property Disposal', 'PO arrested', 'Untraced Cases put in court',
                     'Negligence in duty/Public dealing/image', 'Cleaniness of Police Station', 'Handling of Law and Order','Cases Register Under Detection Work' ]);

 	 const onCaseTypeChange = (event) => {
		//console.log(event.target.value);
		setCaseType(event.target.value);
    }
    return(
      <div>
         { props.progressReport.length === 0
               ? <p></p>
               :   
               <div className="dash">
               <div className="dash_left"> 
                  <div class="row">
                  <div class="column">
                        <Sample Report = {props.progressReport} flag = {1}/>
                  </div>
                  <div class="column">
                     <Sample Report = {props.progressReport} flag = {2} />
                  </div>
                  </div>
                  <FormControl className="dash_dropdown">  
                    <Select variant="outlined" onChange={onCaseTypeChange} value={case_chosen} >
                     { caseType.map((cases) => (
                        <MenuItem value = {cases}> {cases} </MenuItem>
                        ))}
                    </Select>
                    </FormControl>
               </div>

               <Card className="dash_right">
               <CardContent>
               <h3>Rank </h3>
                  <Table report = {props.progressReport} flag = {1} />
               <h3 className="pt4">Last Updated On</h3>
                     <Table report = {props.progressReport} flag = {2} />  
               </CardContent>
               </Card>
            </div> 
            }  

          </div>                
        );
      
}

export default Dashboard;

/*

                    <FormControl className="dash_dropdown">  
                    <Select variant="outlined" onChange={onStationChange} value={station_chosen} >
                    <MenuItem value = "all">Ropar</MenuItem>
                    { police_station.map((station) => (
                       <MenuItem value = {station}> {station} </MenuItem>
                      ))}
                    </Select>
                    </FormControl>
                    */