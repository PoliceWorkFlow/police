import React, {useState} from 'react';
import './Report.css';
import { MenuItem, FormControl, Select, Grid, Button, Paper, TextField, makeStyles} from "@material-ui/core";
import 'tachyons';

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

/*const initailState = {
	casesubmitted: '', propertyDisp: '', henious: '', POarrested: '', propertyCrime: '', untrace_in_court: '',
	disposal_compl: '', cleaniness: '', feedback: '', handling: '', ndps: '', arm: '', excise: '', gambling: '', commercial: ''
};*/

function Report() {
	
	const [station_chosen, setStaion] = useState('');
	const [police_station] = useState(['Police Station 1', 'Police Station 2', 'Police Station 3', 'Police Station 4', 'Police Station 5', 'Police Station 6', 'Police Station 7', 'Police Station 8', 'Police Station 9', 'Police Station 10']);
	
	const [progress, setData] = useState({
		casesubmitted: '', propertyDisp: '', henious: '', POarrested: '', propertyCrime: '', untrace_in_court: '',
	    disposal_compl: '', cleaniness: '', feedback: '', handling: '', ndps: '', arm: '', excise: '', gambling: '', commercial: ''
	});

	const onStationChange = (event) => {
		setStaion(event.target.value);
    }

	function onSubmit(){
		const index = police_station.indexOf(station_chosen) + 1;
        
		fetch('http://localhost:3000/addProgressReport', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				policeStation: index,
				report: progress
			})
		  })
	   .then(response => response.json())
	   .then(data => {
		   if(data === 'success')
		   alert('Progress Report added successfully');	
		   else
		   alert('Unable to add the Progress Report. Kindly add it again')
	   }) 
	}

	const classes = useStyle();

	return(
		<div className="dash">
		<div className="dash_left">
			<div className='dash_header'>
				<h2>Monthly Report</h2>

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
						 label = "Undetected cases traced of Henius Crime" 
						 type = 'number'
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

