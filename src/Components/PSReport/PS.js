import React, {useState} from 'react';
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

function PS(props) {
	
	const [case_chosen, setStaion] = useState('Investigation');
	const [cases] = useState(['Investigation', 'Recovery', 'Challan']);
	const policeStation = useState(['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']);
	const [challan, setData] = useState({ overLoading: '0', withoutHelmet: '0', drunken: '0', covid19: '0', overspeed: '0', others: '0'});
    const [recovery, setDataRecovery] = useState({ illict: '0', licit: '0', lahan: '0', ganja: '0', poppy: '0', heroin: '0', opium: '0', charas: '0', tablets: '0', injections: '0', others: '0' });
	const [ipc, setDataIPC] = useState({ underinvPend: '0', underinvDisp: '0', cancelledPend: '0', cancelledDisp: '0', over1yearPend: '0', over1yearDisp: '0', over6monthPend: '0', over6monthDisp: '0', over3monthPend: '0', over3monthDisp: '0', less3monthPend: '0', less3monthDisp: '0'});
	const [local, setDatalocal] = useState({ underinvPend: '0', underinvDisp: '0', cancelledPend: '0', cancelledDisp: '0', over1yearPend: '0', over1yearDisp: '0', over6monthPend: '0', over6monthDisp: '0', over3monthPend: '0', over3monthDisp: '0', less3monthPend: '0', less3monthDisp: '0'});
	const onCaseTypeChange = (event) => {
		setStaion(event.target.value);
    }

	const classes = useStyle();
    
	function onSubmitChallan() {
        //  console.log(challan.overLoading);
      if(challan.overLoading<0 || challan.withoutHelmet<0 || challan.drunken<0 || challan.covid19<0 || challan.overspeed<0 || challan.others<0)
	      alert("ERROR!!!!  Add only positive values"); 
      
	else{
	   fetch('http://localhost:3000/addchallandetails', {
   		method: 'post',
   		headers: {'Content-Type': 'application/json'},
   		body: JSON.stringify({
   			policeStation: props.policeStation,
   			challan: challan
   		})
   	  })
      .then(response => response.json())
      .then(data => {
      	if(data === 'success')
		  alert('Challan Details added');	
      	else
		  alert('Unable to add the details. Kindly add it again')
      }) 
	 }
	}

	function onSubmitRecovery(){
	  var flag = true;
		
	  for(var ind in recovery) {
		   if(recovery[ind]<0){
			flag = false;	 
			alert("ERROR!!!!  Add only positive values"); 
			break;
		   }
	   }
	  
	  if(flag){
		fetch('http://localhost:3000/addrecoverydetails', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				policeStation: props.policeStation,
				recovery: recovery
			})
		  })
	   .then(response => response.json())
	   .then(data => {
		   if(data === 'success')
		   alert('Recovery Details added');	
		   else
		   alert('Unable to add the details. Kindly add it again')
	   })
	 } 
   }

	function onSubmitInvestigation(){
		var flag = true;
		
		for(var ind in ipc) {
			 if(ipc[ind]<0 || local[ind]<0){
			  flag = false;	 
			  alert("ERROR!!!!  Add only positive values"); 
			  break;
			 }
		 }
		
		if(flag) {
		 fetch('http://localhost:3000/addinvestigationdetails', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				policeStation: props.policeStation,
				ipc: ipc,
				local: local
			})
		  })
	   .then(response => response.json())
	   .then(data => {
		   if(data === 'success')
		   alert('Investigation Details added');	
		   else
		   alert(data);
	   }) 
	    }
	 }

	return(
		<div className="dash">
		<div className="dash_left">
			<div className='dash_header'>
				<h2>{policeStation[0][props.policeStation - 1]} Monthly Report</h2>

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
			   <form> 
				   <Grid container className={classes.root}>
				   <Grid item xs = {2.5}>
				   <div className="fw6 pt3">
				   <div className = "pt4 pb3">
				   Under Investigation :
				   </div>
					<div className = "pt3 pb3">	
					 Cancellation/Untrace:
					</div>
				    <div className = "pt3 pb3">
					Und Inv Over 1 Year : 
					</div>	
					 <div className = "pt3 pb3">
					 Und Inv Over 6 Month: 
					</div>	
					 <div className = "pt3 pb3">
					Und Inv over 3 Month: 
					</div>	
					<div className = "pt3 pb3">
					 Und Inv less 3 Month:
					</div>	
				   </div>    

				   </Grid>
             
				   <Grid item xs={4.5}>
				   <div >
				   <p className="db fw6 lh-copy f4">UNDER IPC</p>
				   <div className="pa2">
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   style={{ width: "175px" }}
					   type='number'
					   min='0'
					   placeholder='Pending'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, underinvPend: val }
						  });
					     }
					    }
					   />

					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   min='0'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, underinvDisp: val }
						  });
					     }
					    }
					   />
					</div>	
					<div className="pa2">
					  
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   style={{ width: "175px" }}
					   placeholder='Pending'
					   min='0'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, cancelledPend: val }
						  });
					     }
					    }
					   />

					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, cancelledDisp: val }
						  });
					     }
					    }
					   />

					</div>	
					 <div className="pa2">
					 
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Pending'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, over1yearPend: val }
						  });
					     }
					    }
					   />

					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, over1yearDisp: val }
						  });
					     }
					    }
					   />

					</div>	 
					<div className="pa2">
					  
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Pending'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, over6monthPend: val }
						  });
					     }
					    }
					   />

					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, over6monthDisp: val }
						  });
					     }
					    }
					   />

					</div>	 
					<div className="pa2">
					 
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Pending'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, over3monthPend: val }
						  });
					     }
					    }
					   />

					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, over3monthDisp: val }
						  });
					     }
					    }
					   />

					</div>	
					 <div className="pa2 pb3"> 
					  
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Pending'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, less3monthPend: val }
						  });
					     }
					    }
					   />

					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   onChange = {e => {
						const val = e.target.value;
						setDataIPC(prevState => {
							return { ...prevState, less3monthDisp: val }
						  });
					     }
					    }
					   />

					</div>	
				   </div>   
				   </Grid>

				   <Grid item xs={5}>
				   <div>
				   <p className="db fw6 lh-copy f4">UNDER LOCAL AND SPECIAL LAW</p>
				   <div className="pa2">
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Pending'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, underinvPend: val }
						  });
					     }
					    }
					   />
					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, underinvDisp: val }
						  });
					     }
					    }
					   />

					</div>	
					<div className="pa2">
					  
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Pending'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, cancelledPend: val }
						  });
					     }
					    }
					   />

					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, cancelledDisp: val }
						  });
					     }
					    }
					   />

					</div>	 <div className="pa2">
					 
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Pending'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, over1yearPend: val }
						  });
					     }
					    }
					   />

					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, over1yearDisp: val }
						  });
					     }
					    }
					   />

					</div>	 <div className="pa2">
					  
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Pending'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, over6monthPend: val }
						  });
					     }
					    }
					   />

					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, over6monthDisp: val }
						  });
					     }
					    }
					   />

					</div>	 <div className="pa2">
					 
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Pending'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, over3monthPend: val }
						  });
					     }
					    }
					   />

					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, over3monthDisp: val }
						  });
					     }
					    }
					   />

					</div>	
					 <div className="pa2">
					  
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Pending'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, less3monthPend: val }
						  });
					     }
					    }
					   />

					<input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   placeholder='Disposed'
					   onChange = {e => {
						const val = e.target.value;
						setDatalocal(prevState => {
							return { ...prevState, less3monthDisp: val }
						  });
					     }
					    }
					   />
					</div>	
				   </div>   
				   </Grid> 
			   </Grid>

				  <Button variant="contained" color="secondary" onClick={onSubmitInvestigation}>
					Submit
				 </Button>	
				 </form>			 
			   </Paper>		
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
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value; 
							setData(prevState => {
								return { ...prevState, overLoading: val }
							  });
						  }
						  }
						  />
 
						  <TextField
						  variant = "outlined"
						  label = "DRUNKEN  DRIVING"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								return { ...prevState, drunken: val }
							  });
						  }
						  }
						  /> 
 
						  <TextField
						  variant = "outlined"
						  label = "OVER SPEED"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								return { ...prevState, overspeed: val }
							  });
						  }
						  }
						 /> 
					 </Grid>
 
					 <Grid item xs={6}>
					   <TextField
						  variant = "outlined"
						  label = "WITHOUT HELMET/SEAT BELT"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								return { ...prevState, withoutHelmet: val }
							  });
						  }
						  }
						 /> 
 
					   <TextField
						  variant = "outlined"
						  label = "WITHOUT MASK, COVID-19 CHALLAN"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								return { ...prevState, covid19: val }
							  });
						  }
						  }
						 /> 
 
						 <TextField
						  variant = "outlined"
						  label = "OTHERS"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								return { ...prevState, others: val }
							  });
						  }
						  }
						 /> 
						</Grid>
					   </Grid>
		
				</form>
				   <Button variant="contained" color="secondary" onClick = {onSubmitChallan}>
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
						  label = "ILLICIT LIQUOR(in Litres)"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, illict: val }
							  });
						  }
						  }
						  />
 
						  <TextField
						  variant = "outlined"
						  label = "POPPY HUSK(in Grams)"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, poppy: val }
							  });
						  }
						  }
						  /> 
 
						  <TextField
						  variant = "outlined"
						  label = "TABLETS"
						  type = "text"
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, tablets: val }
							  });
						  }
						  }
						 /> 
						 
					 </Grid>
 
					 <Grid item xs={3}>
					   <TextField
						  variant = "outlined"
						  label = "LICIT LIQUOR(in Litres)"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, licit: val }
							  });
						  }
						  }
						 /> 
 
					   <TextField
						  variant = "outlined"
						  label = "HEROIN(in Gram)"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, heroin: val }
							  });
						  }
						  }
						 /> 
 
						 <TextField
						  variant = "outlined"
						  label = "INJECTIONS"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, injections: val }
							  });
						  }
						  }
						 /> 
						</Grid>
					
					<Grid item xs={3}>
					   <TextField
						  variant = "outlined"
						  label = "LAHAN(in Litres)"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, lahan: val }
							  });
						  }
						  }
						 /> 
 
					   <TextField
						  variant = "outlined"
						  label = "OPIUM(in Gram)"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, opium: val }
							  });
						  }
						  }
						 /> 
 
						 <TextField
						  variant = "outlined"
						  label = "OTHERS"
						  type = "text"
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, others: val }
							  });
						  }
						  }
						 /> 
						</Grid>

						
					<Grid item xs={3}>
					   <TextField
						  variant = "outlined"
						  label = "GANJA(in Gram)"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, ganja: val }
							  });
						  }
						  }
						 /> 
 
					   <TextField
						  variant = "outlined"
						  label = "CHARAS(in Gram)"
						  type = "number"
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, charas: val }
							  });
						  }
						  }
						 /> 
 
						</Grid>
					</Grid>
		
				</form>
				   <Button variant="contained" color="secondary" onClick = {onSubmitRecovery}>
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


/*
 <Grid container className={classes.root} spacing={1} >
				 <Grid item xs={2}>
				   </Grid>	 
				 <Grid item xs={4}>
				   <p className="db fw6 lh-copy f4 pt3">UNDER IPC</p>
				   </Grid>
				   <Grid item xs={6}>
				   <p className="db fw6 lh-copy f4 pt3">UNDER LOCAL AND SPECIAL LAW</p>
				   </Grid>
                   </Grid>
*/