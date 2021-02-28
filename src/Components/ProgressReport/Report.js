import React from 'react';
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
function Report() {
	
	const [station_chosen, setStaion] = React.useState('');
	const [police_station] = React.useState(['Police Station 1', 'Police Station 2', 'Police Station 3', 'Police Station 4', 'Police Station 5', 'Police Station 6', 'Police Station 7', 'Police Station 8', 'Police Station 9', 'Police Station 10']);
	
	const onStationChange = (event) => {
		//console.log(event.target.value);
		setStaion(event.target.value);
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
			   ? <h2></h2>
			   :  
			   <Paper className={classes.pageContent}>
			      <form> 
				  <Grid container className={classes.root}>
                    <Grid item xs={6}>
                       <TextField
					     variant = "outlined"
						 label = "Cases Submitted In Court" 
						 />

						 <TextField
					     variant = "outlined"
						 label = "Undetected cases traced of Henius Crime" 
						 /> 

						 <TextField
					     variant = "outlined"
						 label = "Untraced cases of crime against property"
						/> 

						<TextField
					     variant = "outlined"
						 label = "Disposal of Complaints"
						/> 

						<TextField
					     variant = "outlined"
						 label = "Negligence in duty/ public dealing/ image in public and feedback"
						/> 
					</Grid>

					<Grid item xs={6}>
					  <TextField
					     variant = "outlined"
						 label = "Property Disposal"
						/> 

					  <TextField
					     variant = "outlined"
						 label = "Number of PO arrested"
						/> 

						<TextField
					     variant = "outlined"
						 label = "Untrace cases put on court"
						/> 

						<TextField
					     variant = "outlined"
						 label = "Cleaniness of Police Station"
						/> 

						<TextField
					     variant = "outlined"
						 label = "Handling of Law & order Situation"
						/> 	

					   </Grid>
					  </Grid>
					
					<p className="db fw6 lh-copy f5 pt3"> Cases Registered Under Detection work</p>
					<Grid container className={classes.root}> 
					 <Grid item xs={3}> 
					 <TextField
					     variant = "outlined"
						 label = "NDPS"
						/> 
					 </Grid>

					 <Grid item xs={3}> 	
				      <TextField
					     variant = "outlined"
						 label = "Commercial Recovery"
						/> 
					  </Grid>

					  <Grid item xs={3}> 	
						<TextField
					     variant = "outlined"
						 label = "ARM Act"
						/> 
						</Grid>

						<Grid item xs={3}> 	
						  <TextField
					      variant = "outlined"
						  label = "Excise Act"
						  />
						 </Grid> 

						 <Grid item xs={3}>  
						  <TextField
					       variant = "outlined"
						   label = "Gambling Act"
						  /> 
						  </Grid>

						</Grid>  
						</form>
				  <Button variant="contained" color="secondary">
				    Submit
			      </Button>				
				</Paper>	
			}
			
		  </div>

		</div>		
	)
}

export default Report;

