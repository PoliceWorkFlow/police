import React from 'react';
import { MenuItem, FormControl, Select, Grid, Button, Paper, TextField, makeStyles} from "@material-ui/core";
import 'tachyons';

const useStyle = makeStyles(theme => ({
	root: {
		'& .MuiFormControl-root' : {
			width: '90%',
			margin: theme.spacing(2)
		}
	},

	pageContent : {
		margin: theme.spacing(3),
		padding: theme.spacing(2)
	}
}))
function PS() {
	
	const [case_chosen, setStaion] = React.useState('Investigation');
	const [cases] = React.useState(['Investigation', 'Recovery', 'Challan']);

	const onCaseTypeChange = (event) => {
		//console.log(event.target.value);
		setStaion(event.target.value);
    }

	const classes = useStyle();

	return(
		<div className="dash">
		<div className="dash_left">
			<div className='dash_header'>
				<h2>PS 1 Monthly Report</h2>

				<FormControl className="dash_dropdown">  
                    <Select variant="outlined" onChange={onCaseTypeChange} value={case_chosen}>
                   
                     { cases.map((caseType) => (
                       <MenuItem value = {caseType}> {caseType} </MenuItem>
                      ))}
                     </Select>
                    </FormControl>
                </div> 
			
			<h2> {case_chosen} </h2> 
			
			{ case_chosen === 'Investigation'
			   ?  
			   <Paper className={classes.pageContent}>
				   </Paper>
			    /*  
				<form> 
				  <Grid container className={classes.root}>
                    <Grid item xs={12}>
					<p className="fw6 ph0 mh0 f4 pt3">UNDER IPC</p>
					 <div className="fw6 ph0 mh0 pa3">
                      Under Investigation:  
	                  <input 
						className="pa2 input-reset ba hover-bg-black hover-white"
						type='number'
						placeholder='Pending'
						// onChange = {this.onNameChange}
						/>

					 <input 
						className="pa2 input-reset ba hover-bg-black hover-white"
						type='number'
						placeholder='Disposed'
						// onChange = {this.onAgeChange}
						/>

					 </div>

					  <div>
                      Cancellation/Untraced : 
	                  <input 
						className="pa2 input-reset ba hover-bg-black hover-white"
						type='number'
						placeholder='Pending'
						// onChange = {this.onNameChange}
						/>

					 <input 
						className="pa2 input-reset ba hover-bg-black hover-white"
						type='number'
						placeholder='Disposed'
						// onChange = {this.onAgeChange}
						/>

					 </div>		
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

					<Grid item xs={5}>
					<p className="db fw6 lh-copy f4 pt3">UNDER LOCAL AND SPECIAL LAW</p>
					<div className="fw6 ph0 mh0 pa3">
					<input 
						className="pa2 input-reset ba hover-bg-black hover-white"
						type='number'
						placeholder='Pending'
						// onChange = {this.onNameChange}
						/>

					<input 
						className="pa2 input-reset ba hover-bg-black hover-white"
						type='number'
						placeholder='Disposed'
						// onChange = {this.onAgeChange}
						/>
                    </div>    
					
					<input 
						className="pa2 input-reset ba hover-bg-black hover-white"
						type='number'
						placeholder='Pending'
						// onChange = {this.onNameChange}
						/>

					<input 
						className="pa2 input-reset ba hover-bg-black hover-white"
						type='number'
						placeholder='Disposed'
						// onChange = {this.onAgeChange}
						/>
	


					</Grid>
				</Grid>

				   <Button variant="contained" color="secondary">
				     Submit
			      </Button>	
				  </form>	
				  */		
				//</Paper>	
			   
			   : ( case_chosen === 'Challan'
			       ? 
				   <Paper className={classes.pageContent}>
				   <form> 
				   <Grid container className={classes.root}>
					 <Grid item xs={6}>
						<TextField
						  variant = "outlined"
						  label = "OVER LOADING  TIPPER & TRUCKS" 
						  type = "number"
						  />
 
						  <TextField
						  variant = "outlined"
						  label = "DRUNKEN  DRIVING"
						  type = "number"
						  /> 
 
						  <TextField
						  variant = "outlined"
						  label = "OVER SPEED"
						  type = "number"
						 /> 
					 </Grid>
 
					 <Grid item xs={6}>
					   <TextField
						  variant = "outlined"
						  label = "WITHOUT HELMET/SEAT BELT"
						  type = "number"
						 /> 
 
					   <TextField
						  variant = "outlined"
						  label = "WITHOUT MASK, COVID-19 CHALLAN"
						  type = "number"
						 /> 
 
						 <TextField
						  variant = "outlined"
						  label = "OTHERS"
						  type = "number"
						 /> 
						</Grid>
					   </Grid>
		
				</form>
				   <Button variant="contained" color="secondary">
					 Submit
				   </Button>				
				 </Paper>	
				   : 
				   <Paper className={classes.pageContent}>
				   <form> 
				   <Grid container className={classes.root}>
					 <Grid item xs={3}>
						<TextField
						  variant = "outlined"
						  label = "ILLICIT LIQUOR"
						  type = "text"
						  />
 
						  <TextField
						  variant = "outlined"
						  label = "POPPY HUSK"
						  type = "number"
						  /> 
 
						  <TextField
						  variant = "outlined"
						  label = "TABLETS"
						  type = "number"
						 /> 
						 
					 </Grid>
 
					 <Grid item xs={3}>
					   <TextField
						  variant = "outlined"
						  label = "LICIT LIQUOR"
						  type = "text"
						 /> 
 
					   <TextField
						  variant = "outlined"
						  label = "HEROIN"
						  type = "number"
						 /> 
 
						 <TextField
						  variant = "outlined"
						  label = "INJECTIONS"
						  type = "number"
						 /> 
						</Grid>
					
					<Grid item xs={3}>
					   <TextField
						  variant = "outlined"
						  label = "LAHAN"
						  type = "text"
						 /> 
 
					   <TextField
						  variant = "outlined"
						  label = "OPIUM"
						  type = "number"
						 /> 
 
						 <TextField
						  variant = "outlined"
						  label = "OTHERS"
						  type = "number"
						 /> 
						</Grid>

						
					<Grid item xs={3}>
					   <TextField
						  variant = "outlined"
						  label = "GANJA"
						  type = "text"
						 /> 
 
					   <TextField
						  variant = "outlined"
						  label = "CHARAS"
						  type = "number"
						 /> 
 
						</Grid>
					</Grid>
		
				</form>
				   <Button variant="contained" color="secondary">
					 Submit
				   </Button>				
				 </Paper>  
				   )
		      }
			
		  </div>

		</div>		
	)
}

export default PS;

