import React from 'react';
import './dashboard.css';
import { MenuItem, FormControl, Select, Grid, Card, CardContent} from "@material-ui/core";
//import InfoBox from './InfoBox';
import Table from './Table';
import 'tachyons';
import Sample from './stacked_graph'
import Grou from './group_chart'
import Simple from './simplechart'

function Dashboard(props){

    const [station_chosen, setStaion] = React.useState('');
	  const [police_station] = React.useState(['Police Stations vs Cases', 'Cases vs Police Stations', 'Police Stations total Marks', 
                     'Comparative Display Based on all Field 1', 'Comparative Display Based on all Field 2', 'Untraced Crime Cases', 
                     'Cases submitted in Court Comparison', 'Disposal of Complaints', 'Property Disposal', 'Points on Arrest','Points on Untraced Cases put in court',
                     'Negligence in duty/Public dealing/image', 'Cleaniness of Police Station', 'Handling of Law and Order',
                     'Cases Register Under Detection Work' ]);
    
    console.log(props.progressReport);
  
 	 const onStationChange = (event) => {
		//console.log(event.target.value);
		setStaion(event.target.value);
    }
    return(
         <div className="dash"> 
            <div className="dash_left">
                
            <div class="row">
               <div class="column">
                  { props.progressReport.length === 0
                     ? <p></p>
                     :  <Sample Report = {props.progressReport} flag = {1}/>
                     }
               </div>
               <div class="column">
                  { props.progressReport.length === 0
                     ? <p></p>
                     :  <Sample Report = {props.progressReport} flag = {2} />
                     }
               </div>
               </div>
           
             </div>
               
        <Card className="dash_right">
           <CardContent>
             <h3>Rank </h3>
                <Table /*countries={tableData}*/ />
            <h3 className="dash_graphTitle">CRIME CASES</h3>
              
         </CardContent>
      </Card>
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