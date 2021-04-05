import React, {useState} from 'react';
import 'tachyons';
import { MenuItem, FormControl, Select, Grid} from "@material-ui/core";
import Challan from './challan';
import IPC from './ipc';
import Local from './local';
import Recovery from './recovery';

export default function CustomizedTables(props) {
  const [case_chosen, setStaion] = useState('Under IPC Law');
  const [caseType] = useState(['Under IPC Law', 'Under Local & Special Law', 'Recovery', 'Challan']);


  const onCaseTypeChange = (event) => {
    setStaion(event.target.value);
   } 

  return (
     <div>
        <Grid container >
					 <Grid item xs={9}>
            <h2 class="pt2">POLICE STATION WISE REPORT </h2>
            </Grid>
            <Grid item xs={3}>
              <FormControl className="dash_dropdown" style={{minWidth: 100 }} class="tr pb2 pr5" >  
              <Select variant="outlined" onChange={onCaseTypeChange} value={case_chosen} >
              { caseType.map((cases) => (
                  <MenuItem value = {cases} > {cases} </MenuItem>
                  ))}
              </Select>
              </FormControl>
        </Grid> 
        </Grid>
        
        
    
        { case_chosen === 'Challan'
            ? <Challan challan={props.challan}/>
            :   case_chosen === 'Under IPC Law'
                ? <IPC ipc={props.ipc} />
                :  case_chosen === 'Under Local & Special Law'
                   ? <Local local={props.local} />
                   : <Recovery recovery={props.recovery} />
          }    
    </div> 
  );
}