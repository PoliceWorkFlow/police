import React, {useState} from 'react';
import './dashboard.css';
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBox from './InfoBox';
import Table from './Table';
import Stacked from './stacked_graph'
import 'tachyons';

function Dashboard(props){
    
  const [case_chosen, setStaion] = useState('Investigation');
	const [cases] = useState(['Investigation', 'Recovery', 'Challan']);
  const [casesType, setCasesType] = useState("pending");
  const policeStation = useState(['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']);
 
	const onCaseTypeChange = (event) => {
		setStaion(event.target.value);
    }
    
      return(
          <div >   
             { props.progressReport.length === 0
                   ? <p></p>
                    :   
                    <div className="dash">
                    <div className="dash_left">
                      <div className='dash_header'> 
                      <h2>{policeStation[0][props.policeStation - 1]}</h2>
                       </div>
                        <div class="row">
                        <div class="column">
                              <Stacked Report = {props.progressReport} flag = {1}/>
                        </div>
                        <div class="column">
                          <Stacked Report = {props.progressReport} flag = {2} />
                        </div>
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

/*
<Card className="dash_right">
           <CardContent>
             <h3>Rank </h3>
                <Table  />
                <h3 className="dash_graphTitle">CRIME CASES</h3>
              
                </CardContent>
             </Card>
             */