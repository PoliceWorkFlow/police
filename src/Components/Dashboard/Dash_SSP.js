import React from 'react';
import './dashboard.css';
import { Card, CardContent} from "@material-ui/core";
import 'tachyons';
import Table from './Table';
import 'tachyons';
import Stacked from './stacked_graph'
import StackedPS from './graph_investigation'
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
               <div className='dash_header'> 
                      <h2>SSP OFFICE</h2>
                       </div>
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
                    <StackedPS /> 
                   </div>
                  </div>  
               </div>
               <div style={{paddingTop:'45px'}}>
               <Card className="dash_right">
               <CardContent>
               <h3>Rank </h3>
                  <Table report = {props.progressReport} flag = {1} />
               <h3 className="pt4">Last Updated On</h3>
                     <Table report = {props.progressReport} flag = {2} />  
               </CardContent>
               </Card>
               </div>
            </div> 
            }  

          </div>                
        );
      
}

export default Dashboard;
