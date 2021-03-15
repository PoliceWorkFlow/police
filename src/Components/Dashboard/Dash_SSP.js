import React from 'react';
import './dashboard.css';
import { MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core";
import InfoBox from './InfoBox';
import Table from './Table';
import 'tachyons';

function Dashboard(props){
    const [station_chosen, setStaion] = React.useState('all');
	  const [police_station] = React.useState(['Police Station 1', 'Police Station 2', 'Police Station 3', 'Police Station 4', 'Police Station 5', 'Police Station 6', 'Police Station 7', 'Police Station 8', 'Police Station 9', 'Police Station 10']);
    console.log(props.progressReport);

	const onStationChange = (event) => {
		//console.log(event.target.value);
		setStaion(event.target.value);
    }
    return(
         <div className="dash">
            <div className="dash_left">
                <div className='dash_header'>
                    <h2>SSP OFFICE</h2>

                    <FormControl className="dash_dropdown">  
                    <Select variant="outlined" onChange={onStationChange} value={station_chosen} >
                    <MenuItem value = "all">Ropar</MenuItem>
                    { police_station.map((station) => (
                       <MenuItem value = {station}> {station} </MenuItem>
                      ))}
                    </Select>
                    </FormControl>
                </div> 

               <div className="dash_stats">
                 <InfoBox 
                    isRed
                   // active = {casesType === "cases"}
                    //onClick = {e => setCasesType('cases')}
                    //title="TOTAL CASES" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)}
                    />

                    <InfoBox
                    //active = {casesType === "recovered"}
                    //onClick = {e => setCasesType('recovered')}
                    //title="SOLVED CASES" cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)}
                    />

                    <InfoBox
                    isRed
                    //active = {casesType === "deaths"}
                    //onClick = {e => setCasesType('deaths')}
                    //title="PENDING CASES" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)}
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