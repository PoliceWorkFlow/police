import React, {useState} from 'react';
import './Report.css';
import { MenuItem, FormControl, Select, Grid, Button, Paper, TextField, makeStyles} from "@material-ui/core";
import 'tachyons';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Details } from '@material-ui/icons';

const useStyle = makeStyles(theme => ({
	root: {
		'& .MuiFormControl-root' : {
			width: '90%',
			margin: theme.spacing(1)
		}
	},

	pageContent : {
		margin: theme.spacing(3),
		padding: theme.spacing(2)
	}
}))


function Report(props) {
	
	const [station_chosen, setStaion] = useState('');
	const [police_station] = useState(['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const months = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);

	const [progress, setData] = useState({
		casesubmitted: 0, propertyDisp: 0, henious: 0, POarrested: 0, propertyCrime: 0, untrace_in_court: 0,
	    disposal_compl: 0, cleaniness: 0, feedback: 0, handling: 0, ndps: 0, arm: 0, excise: 0, gambling: 0, commercial: 0, monYear: ''
	});

	const onStationChange = (event) => {
		setStaion(event.target.value);
    }

	function onSubmit(){
		const index = police_station.indexOf(station_chosen) + 1;
        var flag = true;
		progress.monYear = months[0][selectedDate.getMonth()] + ' ' + selectedDate.getFullYear();
		
		for(var ind in progress) {
			 if(progress[ind]<0){
			  flag = false;	 
			  alert("ERROR!!!!  Add only positive values"); 
			  break;
			 }
		 }
		
		 if(flag){
			fetch('http://localhost:3000/checkMonthYear', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					policeStation: index,
					monYear: progress.monYear,
					type: 'Report'
				})
			})
			.then(response => response.json())
			.then(data => {
                 console.log(data);
				if(data === 'Yes'){
					if(window.confirm("Report for this month already exist!!!\nClick 'OK' to update this month report, else click 'Cancel' ")){
                        fetch('http://localhost:3000/addProgressReport', {
						method: 'post',
						headers: {'Content-Type': 'application/json'},
						body: JSON.stringify({
							policeStation: index,
							report: progress,
							type: 'update'
						    })
						})
						.then(response => response.json())
						.then(data => {
							if(data === 'success'){
								//props.onProgressChanges(data);
								alert('Progress Report updated successfully');	
							}
							else
							alert('Unable to update the Progress Report. Kindly update it again')
						}) 
					}
			    } 
				else{
					fetch('http://localhost:3000/addProgressReport', {
						method: 'post',
						headers: {'Content-Type': 'application/json'},
						body: JSON.stringify({
							policeStation: index,
							report: progress,
							type: 'new report'
						})
					})
				   .then(response => response.json())
				   .then(data => {
					 if(data === 'success')
						//props.onProgressChanges(data);
						alert('Progress Report added successfully');	
					else
					alert('Unable to add the Progress Report. Kindly add it again')
				 }) 
				}   
			 })
	   }
	}

	const classes = useStyle();

	return(
		<div className="dash">
		<div className="dash_left">
			<div className='dash_header'>
				<h2>Progress Report</h2>

				<FormControl className="dash_dropdown">  
				<Select variant="outlined" value = {station_chosen} onChange={onStationChange} displayEmpty>
				<MenuItem value="" disabled >Select PS</MenuItem>		
				{ police_station.map((station) => (
				   <MenuItem value = {station}> {station} </MenuItem>
				  ))}
				</Select>
				</FormControl>
			</div>
			
			<h2> {station_chosen} </h2> 
			
			{ station_chosen === ''
			   ? <h2>Select Police Station</h2>
			   :  
			   <Paper className={classes.pageContent}>
			      <form> 
				  <Grid container className={classes.root}>
                    <Grid item xs={6}>
                       <TextField
					     variant = "outlined"
						 label = "Cases Submitted In Court"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
						   const val = e.target.value;
						   setData(prevState => {
								return { ...prevState, casesubmitted: val }
							  });
							 }
						  }
						 />

						 <TextField
					     variant = "outlined"
						 label = "Undetected cases traced of heinous Crime" 
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, henious: val }
							   });
							  }
						   }
						 /> 

						 <TextField
					     variant = "outlined"
						 label = "Untraced cases of crime against property"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, propertyCrime: val }
							   });
							  }
						   }
						/> 

						<TextField
					     variant = "outlined"
						 label = "Disposal of Complaints"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, disposal_compl: val }
							   });
							  }
						   }
						/> 

						<TextField
					     variant = "outlined"
						 label = "Negligence in duty/public dealing/image in public & feedback"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, feedback: val }
							   });
							  }
						   }
						/> 
					</Grid>

					<Grid item xs={6}>
					  <TextField
					     variant = "outlined"
						 label = "Property Disposal"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, propertyDisp: val }
							   });
							  }
						   }
						/> 

					  <TextField
					     variant = "outlined"
						 label = "Number of PO arrested"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, POarrested: val }
							   });
							  }
						   }
						/> 

						<TextField
					     variant = "outlined"
						 label = "Untrace cases put on court"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, untrace_in_court: val }
							   });
							  }
						   }
						/> 

						<TextField
					     variant = "outlined"
						 label = "Cleaniness of Police Station"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, cleaniness: val }
							   });
							  }
						   }
						/> 

						<TextField
					     variant = "outlined"
						 label = "Handling of Law & order Situation"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, handling: val }
							   });
							  }
						   }
						/> 	

					   </Grid>
					  </Grid>
					
					<p className="db fw6 lh-copy f5 pt3"> Cases Registered Under Detection work</p>
					<Grid container className={classes.root}> 
					 <Grid item xs={3}> 
					 <TextField
					     variant = "outlined"
						 label = "NDPS"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, ndps: val }
							   });
							  }
						   }
						/> 
					 </Grid>

					 <Grid item xs={3}> 	
				      <TextField
					     variant = "outlined"
						 label = "Commercial Recovery"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, commercial: val }
							   });
							  }
						   }
						/> 
					  </Grid>

					  <Grid item xs={3}> 	
						<TextField
					     variant = "outlined"
						 label = "ARM Act"
						 type = 'number'
						 inputProps={{ min: "0"}}
						 required
						 onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, arm: val }
							   });
							  }
						   }
						/> 
						</Grid>

						<Grid item xs={3}> 	
						  <TextField
					      variant = "outlined"
						  label = "Excise Act"
						  type = 'number'
						  inputProps={{ min: "0"}}
						  required
						  onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, excise: val }
							   });
							  }
						   }
						  />
						 </Grid> 

						 <Grid item xs={3}>  
						  <TextField
					       variant = "outlined"
						   label = "Gambling Act"
						   type = 'number'
						   inputProps={{ min: "0"}}
						   required
						   onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								 return { ...prevState, gambling: val }
							   });
							  }
						   }
						  /> 
						  </Grid>
						  <Grid xs={4}>
							<MuiPickersUtilsProvider utils={DateFnsUtils} >
								<DatePicker
									variant="inline"
									openTo="year"
									views={["year", "month"]}
									dateFormat="MM/yyyy"
									showMonthYearPicker
									label="Month and Year of the Progress Report"
									helperText="Start from year selection"
									value={selectedDate}
									onChange= { e => {
										setSelectedDate(e);
									}}
									/>  
								</MuiPickersUtilsProvider>	
					       </Grid>  
						</Grid>
						</form>
					
				  <Button variant="contained" color="secondary" onClick={onSubmit}>
				    Submit
			      </Button>				
				</Paper>	
			}
			
		  </div>

		</div>		
	)
}

export default Report;

