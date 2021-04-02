import React from 'react';
import './dashboard.css';
import { Card, CardContent} from "@material-ui/core";
import 'tachyons';
import Table from './Table';
import 'tachyons';
import Stacked from './stacked_graph'
import StackedPS from './stacked_graph_ps'
import Bar from './simplechart'

function Dashboard(props){
    
  // console.log(props);
    return(
      <div>
         { props.progressReport.length === 0
               ? <p></p>
               :   
               <div className="dash">
               <div className="dash_left"> 
                  <div class="row">
                  <div class="column">
                        <Stacked Report = {props.progressReport} flag = {1}/>
                  </div>
                  <div class="column">
                     <Stacked Report = {props.progressReport} flag = {2} />
                  </div>
                  </div>
                  <div class="row" style = {{paddingTop: '15px'}}>
                  <div class="column">
                        <Bar Report = {props.progressReport} />
                  </div>
                  <div class="column">
                    { props.challan.length === 0 || props.recovery.length === 0 || props.ipc.length === 0 || props.local.length === 0 
                        ? <p></p>
                        :
                        <StackedPS ipc = {props.ipc} local = {props.local} challan = {props.challan} recovery = {props.recovery}/> 
                     }
                   </div>
                  </div>  
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