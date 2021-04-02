import React, {useState} from 'react';
import './dashboard.css';
import { MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core";
import InfoBox from './InfoBox';
import Table from './Table';
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
         <div className="dash">
            <div className="dash_left">
                <div className='dash_header'>
                    <h2>{policeStation[0][props.policeStation - 1]}</h2>

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