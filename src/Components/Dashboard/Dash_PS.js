import React from 'react';
import './dashboard.css';
import { MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core";
import InfoBox from './InfoBox';
import sortData from './util';
import Table from './Table';
import 'tachyons';

function Dashboard(props){
    
  const [case_chosen, setStaion] = React.useState('Investigation');
	const [cases] = React.useState(['Investigation', 'Recovery', 'Challan']);
  const [casesType, setCasesType] = React.useState("pending");

	const onCaseTypeChange = (event) => {
		//console.log(event.target.value);
		setStaion(event.target.value);
    }
       return(
         <div className="dash">
            <div className="dash_left">
                <div className='dash_header'>
                    <h2>POLICE STATION {props.policeStation}</h2>

                    <FormControl className="dash_dropdown">  
                    <Select variant="outlined" onChange={onCaseTypeChange} value={case_chosen}>
                   
                     { cases.map((caseType) => (
                       <MenuItem value = {caseType}> {caseType} </MenuItem>
                      ))}
                     </Select>
                    </FormControl>
                </div> 

               <div className="dash_stats">
                 <InfoBox 
                    isRed
                    active = {casesType === "pending"}
                    onClick = {e => setCasesType('pending')}
                    title="Pending Case" cases={props.ipc.underInvPend}
                    />

                  <InfoBox
                    active = {casesType === "disposed"}
                    onClick = {e => setCasesType('disposed')}
                    title="Disposed Case" cases={props.ipc.underInvDisp}
                    />

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