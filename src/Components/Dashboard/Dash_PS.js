import React, {useState} from 'react';
import './dashboard.css';
import {Card, CardContent } from "@material-ui/core";
import Table from './Table';
import Stacked from './stacked_graph';
import ComparativeAnal from './comparativeAnal';
import 'tachyons';

function Dashboard(props){

  const policeStation = useState(['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']);
    
      return(
          <div >   
             { props.progressReport.length === 0
                   ? <p></p>
                    :   
                    <div className="dash">
                    <div className="dash_left">
                      <div className='dash_header' > 
                      <h2 className='center'>{policeStation[0][props.policeStation - 1]} Police Station</h2>
                      
                       </div>
                        <div class="row">
                        <div class="column">
                              <Stacked Report = {props.progressReport} flag = {1}/>
                        </div>
                        <div class="column">
                          <Stacked Report = {props.progressReport} flag = {2} />
                        </div>
                        </div> 
                        <div>
                        < ComparativeAnal policeStation={props.policeStation}/>
                        </div>
                       </div> 
                       <div style={{paddingTop:'45px'}}>
                        <Card className="dash_right">
                        <CardContent>
                        <h3>Rank </h3>
                            <Table report = {props.progressReport} flag = {1} />
                        </CardContent>
                        </Card> 
                        </div>
                      </div>  
                }   
         </div>        
        );
       
}

export default Dashboard;
