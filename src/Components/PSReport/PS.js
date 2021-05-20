import React, {useState} from 'react';
import {Grid, Button, Paper, TextField, makeStyles} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import * as XLSX from "xlsx";
import 'tachyons';
import "date-fns";
import './ps.css';
import DateFnsUtils from "@date-io/date-fns";
 
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

function currentMonth(){
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const monYear = months[new Date().getMonth()] + ' ' + new Date().getFullYear();
	return monYear;
 }

function PS(props) {
	
	//const policeStation = useState(['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']);
	const policeStation = useState( ['PS1','PS2','PS3','PS4','PS5','PS6','PS7','PS8','PS9','PS10']);
	const [challan, setData] = useState({ overLoading: '0', withoutHelmet: '0', drunken: '0', covid19: '0', overspeed: '0', others: '0', monYear: '' });
	const [monthCurr] = useState(currentMonth());
    const [recovery, setDataRecovery] = useState({ illict: '0', licit: '0', lahan: '0', ganja: '0', poppy: '0', heroin: '0', opium: '0', charas: '0', tablets: '0', injections: '0', others: '0', monYear: '' });
	const [ipc, setDataIPC] = useState({ underinvPend: '0', underinvDisp: '0', cancelledPend: '0', cancelledDisp: '0', over1yearPend: '0', over1yearDisp: '0', over6monthPend: '0', over6monthDisp: '0', over3monthPend: '0', over3monthDisp: '0', less3monthPend: '0', less3monthDisp: '0', monYear: ''});
	const [local, setDatalocal] = useState({ underinvPend: '0', underinvDisp: '0', cancelledPend: '0', cancelledDisp: '0', over1yearPend: '0', over1yearDisp: '0', over6monthPend: '0', over6monthDisp: '0', over3monthPend: '0', over3monthDisp: '0', less3monthPend: '0', less3monthDisp: '0', monYear: ''});
    const [selectedDate, setSelectedDate] = useState(new Date());
	const months = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
	var token = sessionStorage.getItem('jwtToken');
	const classes = useStyle();

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	  }

	const readRecovery = (file) => {

			const promise = new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsArrayBuffer(file);
		
			fileReader.onload = (e) => {
				const bufferArray = e.target.result;
		
				const wb = XLSX.read(bufferArray, { type: "buffer" });
				const wsname = wb.SheetNames[0];
				const ws = wb.Sheets[wsname];
		
				const data = XLSX.utils.sheet_to_json(ws);
		
				resolve(data);
			};
		
			fileReader.onerror = (error) => {
				reject(error);
			};
			});
		
			promise.then((d) => {
			const data = d[props.policeStation - 1];
			//console.log(data);
			const recoveryData={
				illict: data.ILLICIT_LIQUOR, licit: data.LICIT_LIQUOR, lahan: data.LAHAN, ganja: data.GANJA, poppy: data.POPPY_HUSK, heroin: data.HEROIN, opium: data.OPIUM, charas: data.CHARAS, tablets: data.TABLETS, injections: data.INJECTION, others: data.OTHERS
			} 
			
			console.log(recoveryData);
			setDataRecovery(recoveryData)
			});
			
	 };

	 const readChallan = (file) => {
	
		const promise = new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsArrayBuffer(file);
			
			fileReader.onload = (e) => {
				const bufferArray = e.target.result;
			
				const wb = XLSX.read(bufferArray, { type: "buffer" });
				const wsname = wb.SheetNames[2];
				const ws = wb.Sheets[wsname];
			
				const data = XLSX.utils.sheet_to_json(ws);
			
				resolve(data);
				};
			
				fileReader.onerror = (error) => {
					reject(error);
				};
				});
			
				promise.then((d) => {
				const data = d[props.policeStation - 1];
				console.log(data);

				const challanData={
					overLoading: data.OVER_LOADING_TIPPER_TRUCKS, withoutHelmet: data.WITHOUT_HELMET_SEAT_BELT, drunken: data.DRUNKEN_DRIVING, covid19: data.WITHOUT_MASK_COVID19_CHALLAN, overspeed: data.OVERSPEED, others: data.OTHERS
				} 
				
				setData(challanData)
				});
	 };

	 const readInv = (file) => {
		const promise = new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsArrayBuffer(file);
		
			fileReader.onload = (e) => {
				const bufferArray = e.target.result;
		
				const wb = XLSX.read(bufferArray, { type: "buffer" });
				const wsname = wb.SheetNames[1];
				const ws = wb.Sheets[wsname];
		
				const data = XLSX.utils.sheet_to_json(ws);
		
				resolve(data);
			};
		
			fileReader.onerror = (error) => {
				reject(error);
			};
			});
		
			promise.then((d) => {
				console.log(d);
				const data = d[1*props.policeStation + 1];
				const data2 = d[1*props.policeStation + 15];
			    //console.log(data);

			 const ipcData={
				underinvPend: data.__EMPTY_1, underinvDisp: data.__EMPTY_2, cancelledPend: data.__EMPTY_3, cancelledDisp: data.__EMPTY_4, over1yearPend: data.__EMPTY_5, over1yearDisp: data.__EMPTY_6, over6monthPend: data.__EMPTY_7, over6monthDisp: data.__EMPTY_8, over3monthPend: data.__EMPTY_9, over3monthDisp: data.__EMPTY_10, less3monthPend: data.__EMPTY_11, less3monthDisp: data.__EMPTY_12
			 } 

			 const localData={
				underinvPend: data2.__EMPTY_1, underinvDisp: data2.__EMPTY_2, cancelledPend: data2.__EMPTY_3, cancelledDisp: data2.__EMPTY_4, over1yearPend: data2.__EMPTY_5, over1yearDisp: data2.__EMPTY_6, over6monthPend: data2.__EMPTY_7, over6monthDisp: data2.__EMPTY_8, over3monthPend: data2.__EMPTY_9, over3monthDisp: data2.__EMPTY_10, less3monthPend: data2.__EMPTY_11, less3monthDisp: data2.__EMPTY_12
			 } 

			 console.log(ipcData);
			 console.log(localData);
			
			 setDataIPC(ipcData)
			 setDatalocal(localData)
			});
	 };

    function onSubmitChallan() {

	 challan.monYear = months[0][selectedDate.getMonth()] + ' ' + selectedDate.getFullYear();

	 console.log(monthCurr.split(' ')[1]);
	 console.log(challan.monYear.split(' ')[1]);


     if(challan.overLoading<0 || challan.withoutHelmet<0 || challan.drunken<0 || challan.covid19<0 || challan.overspeed<0 || challan.others<0)
	      alert("ERROR!!!!  Add only positive values"); 
    
	 else if(monthCurr.split(' ')[1] < challan.monYear.split(' ')[1])
	     alert('You have entered wrong Year!!!!')
   
     else if(monthCurr.split(' ')[1] === challan.monYear.split(' ')[1] &&  months[0].indexOf(monthCurr.split(' ')[0]) < months[0].indexOf(challan.monYear.split(' ')[0]))
	     alert('You have entered wrong month!!!!')
      
		else{
			fetch(props.link + '/api/checkMonthYear', {
				method: 'post',
				headers: {'Content-Type': 'application/json', 'jwttoken': token },
				body: JSON.stringify({
					policeStation: props.policeStation,
					monYear: challan.monYear,
					type: 'Challan'
				})
			})
			.then(response => response.json())
			.then(data => {
				if(data.auth === false)
				alert('Problem in Authorization!!!\nKindly do it again!!')
				else if(data === 'Yes'){
				   if(window.confirm("Report for this month ALREADY EXISTS!!!\nClick 'OK' to update this month report, else click 'Cancel' ")){
					fetch(props.link + '/api/addchallandetails', {
						method: 'post',
						headers: {'Content-Type': 'application/json', 'jwttoken': token },
						body: JSON.stringify({
							policeStation: props.policeStation,
							challan: challan,
							type: 'update'
						})
					})
					.then(response => response.json())
					.then(data => {  
						if(data.auth === false)
                              alert('Problem in Authorization!!!\nKindly do it again!!')
						else if(data === 'success')
						alert('Challan Detail Updated');	
						else
						alert('Unable to update the details. Kindly add it again') 
				     })  
				   } 
				 }  
				   
                else{
					fetch(props.link + '/api/addchallandetails', {
						method: 'post',
						headers: {'Content-Type': 'application/json', 'jwttoken': token },
						body: JSON.stringify({
							policeStation: props.policeStation,
							challan: challan,
							type: 'new report'
						})
					})
					.then(response => response.json())
					.then(data => {
						if(data.auth === false)
                              alert('Problem in Authorization!!!\nKindly do it again!!')
						else if(data === 'success')
						alert('Challan Details added');	
						else
						alert('Unable to add the details. Kindly add it again')
					}) 
				}  
			})
		}
	}

	function onSubmitRecovery(){
	  recovery.monYear = months[0][selectedDate.getMonth()] + ' ' + selectedDate.getFullYear();
	  var flag = true;
		
	  for(var ind in recovery) {
		   if(recovery[ind]<0){
			flag = false;	 
			alert("ERROR!!!!  Add only positive values"); 
			break;
		   }
	   }
	
        if(monthCurr.split(' ')[1] < recovery.monYear.split(' ')[1])
	      alert('You have entered wrong Year!!!!')
   
        else if(monthCurr.split(' ')[1] === recovery.monYear.split(' ')[1] &&  months[0].indexOf(monthCurr.split(' ')[0]) < months[0].indexOf(recovery.monYear.split(' ')[0]))
	      alert('You have entered wrong month!!!!')

	    else if(flag){
		 fetch(props.link + '/api/checkMonthYear', {
				method: 'post',
				headers: {'Content-Type': 'application/json', 'jwttoken': token },
				body: JSON.stringify({
					policeStation: props.policeStation,
					monYear: recovery.monYear,
					type: 'Recovery'
				})
			})
			.then(response => response.json())
			.then(data => {
				if(data.auth === false)
                        alert('Problem in Authorization!!!\nKindly do it again!!')
				else if(data === 'Yes'){
                    if(window.confirm("Report for this month ALREADY EXISTS!!!\nClick 'OK' to update this month report, else click 'Cancel' ")){
						
						fetch(props.link + '/api/addrecoverydetails', {
							method: 'post',
							headers: {'Content-Type': 'application/json', 'jwttoken': token },
							body: JSON.stringify({
								policeStation: props.policeStation,
								recovery: recovery,
								type: 'update'
							})
						})
						.then(response => response.json())
						.then(data => {
							if(data.auth === false)
                              alert('Problem in Authorization!!!\nKindly do it again!!')  
							else if(data === 'success')
							alert('Recovery Details Updated');	
							else
							alert('Unable to update the details. Kindly add it again') 
						 })  
					   } 
				  }  
				
				else{   
					fetch(props.link + '/api/addrecoverydetails', {
						method: 'post',
						headers: {'Content-Type': 'application/json', 'jwttoken': token },
						body: JSON.stringify({
							policeStation: props.policeStation,
							recovery: recovery,
							type: 'newdata'
						})
					})
				.then(response => response.json())
				.then(data => {
					if(data.auth === false)
                              alert('Problem in Authorization!!!\nKindly do it again!!')
					else if(data === 'success')
					alert('Recovery Details added');	
					else
					alert('Unable to add the details. Kindly add it again')
				})
			  }
	       }) 
        }
	}

	function onSubmitInvestigation(){
		var flag = true;
		ipc.monYear = months[0][selectedDate.getMonth()] + ' ' + selectedDate.getFullYear();
	    local.monYear = ipc.monYear;

		for(var ind in ipc) {
			 if(ipc[ind]<0 || local[ind]<0){
			  flag = false;	 
			  alert("ERROR!!!!  Add only positive values"); 
			  break;
			 }
		 }

		if(monthCurr.split(' ')[1] < ipc.monYear.split(' ')[1])
	      alert('You have entered wrong Year!!!!')
   
        else if(monthCurr.split(' ')[1] === ipc.monYear.split(' ')[1] &&  months[0].indexOf(monthCurr.split(' ')[0]) < months[0].indexOf(ipc.monYear.split(' ')[0]))
	      alert('You have entered wrong month!!!!')

		else if(flag) {
			fetch(props.link + '/api/checkMonthYear', {
				method: 'post',
				headers: {'Content-Type': 'application/json', 'jwttoken': token },
				body: JSON.stringify({
					policeStation: props.policeStation,
					monYear: ipc.monYear,
					type: 'Investigation'
				})
			})
			.then(response => response.json())
			.then(data => {
				if(data.auth === false)
                              alert('Problem in Authorization!!!\nKindly do it again!!')
				else if(data === 'Yes'){

					if(window.confirm("Report for this month ALREADY EXISTS!!!\nClick 'OK' to update this month report, else click 'Cancel' ")){
						fetch(props.link + '/api/addinvestigationdetails', {
							method: 'post',
							headers: {'Content-Type': 'application/json', 'jwttoken': token },
							body: JSON.stringify({
								policeStation: props.policeStation,
								ipc: ipc,
							    local: local,
								type: 'update'
							})
						})
						.then(response => response.json())
						.then(data => { 
							if(data.auth === false)
                              alert('Problem in Authorization!!!\nKindly do it again!!') 
							else if(data === 'success')
							alert('Investigation Details Updated');	
							else
							alert('Unable to update the details. Kindly add it again') 
						 })  
					   } 
                    
				}
				else{

				 fetch(props.link + '/api/addinvestigationdetails', {
						method: 'post',
						headers: {'Content-Type': 'application/json', 'jwttoken': token },
						body: JSON.stringify({
							policeStation: props.policeStation,
							ipc: ipc,
							local: local,
							type: 'new report'
						})
					})
				.then(response => response.json())
				.then(data => {
					if(data.auth === false)
                              alert('Problem in Authorization!!!\nKindly do it again!!')
					else if(data === 'success')
					  alert('Investigation Details added');	
					else
					  alert(data);
				   }) 
					}
				})
	  }
	}

	return(
		<div className="dash">
		<div className="dash_left">
			<div className='dash_header'>
				<h2>{policeStation[0][props.policeStation - 1]} Monthly Report</h2>
                </div> 
			
			<h2> {props.caseType} </h2>
			<div className='tr'>
			<Button variant="contained" size="small" onClick={() => openInNewTab('https://docs.google.com/spreadsheets/d/1QWCtqV_5I4QdVR4zdCOpFdWLYkw0tTqTwTEhWcrMStM/edit?usp=sharing')} > Sample File</Button>

			<input 
			   className='pl4'
						type="file"
						onChange={(e) => {
							const file = e.target.files[0];
							readRecovery(file);
							readChallan(file);
							readInv(file);
						}}
					/>		
			</div>
			
			{ props.caseType === 'Investigation'
			   ?  
			   <Paper className={classes.pageContent}>
			   <form> 
				   <Grid container className={classes.root}>
				   <Grid item xs = {2.5}>
				   <div className="fw6 pt3"> 
				   <div className = "pt3 pb1"></div>  
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

				   <div class="row">
                      <div class="column">
					    <h4 >Pending </h4>
					  </div>
					  <div class="column">
					    <h4 >Disposed </h4>
					    </div>
					</div>
					
				   <div className="pa1">
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   style={{ width: "175px" }}
					   type='number'
					   min='0'
					   value = {ipc.underinvPend}
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
					   value = {ipc.underinvDisp}
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
					   value = {ipc.cancelledPend}
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
					   value = {ipc.cancelledDisp}
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
					   value={ipc.over1yearPend}
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
					   value={ipc.over1yearDisp}
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
					   value={ipc.over6monthPend}
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
					   value={ipc.over6monthDisp}
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
					   value={ipc.over3monthPend}
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
					   value={ipc.over3monthDisp}
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
					   value={ipc.less3monthPend}
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
					   value={ipc.less3monthDisp}
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
				   <div class="row" >
                      <div class="column">
					    <h4 >Pending </h4>
					  </div>
					  <div class="column">
					    <h4 >Disposed </h4>
					    </div>
					</div>
				   <div className="pa1">
					 <input 
					   className="pa2 input-reset ba hover-bg-black hover-white"
					   type='number'
					   min='0'
					   style={{ width: "175px" }}
					   value={local.underinvPend}
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
					   value={local.underinvDisp}
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
					   value={local.cancelledPend}
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
					   value={local.cancelledDisp}
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
					   value={local.over1yearPend}
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
					   value={local.over1yearDisp}
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
					   value={local.over6monthPend}
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
					   value={local.over6monthDisp}
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
					   value={local.over3monthPend}
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
					   value={local.over3monthDisp}
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
					   value={local.less3monthPend}
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
					   value={local.less3monthDisp}
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
				   <Grid xs={4}>
				   <div className="pt3 pb3 fw6">
				     Month and Year of the Investigation Data:
					</div>
					</Grid>	
				   <Grid xs={3}>
				   <MuiPickersUtilsProvider utils={DateFnsUtils} >
						 <DatePicker
							variant="inline"
							openTo="year"
							views={["year", "month"]}
							dateFormat="MM/yyyy"
							showMonthYearPicker
							helperText="Start from year selection"
							value={selectedDate}
							onChange= { e => {
							    setSelectedDate(e);
							}}
							/>  
						</MuiPickersUtilsProvider>
					</Grid>		
			   </Grid>

				  <Button variant="contained" color="secondary" onClick={onSubmitInvestigation}>
					Submit Investigation Data
				 </Button>	
				 </form>			 
			   </Paper>		
			   : ( props.caseType === 'Challan'
			       ? 
				   <Paper className={classes.pageContent}>
				   <form> 
				   <Grid container className={classes.root}>
					 <Grid item xs={6}>
						<TextField
						  variant = "outlined"
						  label = "OVER LOADING  TIPPER & TRUCKS" 
						  type = "number"
						  value = {challan.overLoading}
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
						  value = {challan.drunken}
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
						  value = {challan.overspeed}
						  onChange = {e => {
							const val = e.target.value;
							setData(prevState => {
								return { ...prevState, overspeed: val }
							  });
						  }
						  }
						  />
                         <MuiPickersUtilsProvider utils={DateFnsUtils} >
						 <DatePicker
							variant="inline"
							openTo="year"
							views={["year", "month"]}
							dateFormat="MM/yyyy"
							showMonthYearPicker
							label="Month and Year of the Challan Data"
							helperText="Start from year selection"
							value={selectedDate}
							onChange= { e => {
							    setSelectedDate(e);
							}}
							/>  
						</MuiPickersUtilsProvider>
					 </Grid>
 
					 <Grid item xs={6}>
					   <TextField
						  variant = "outlined"
						  label = "WITHOUT HELMET/SEAT BELT"
						  type = "number"
						  value = {challan.withoutHelmet}
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
						  value = {challan.covid19}
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
						  value = {challan.others}
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
					 Submit Challan Data
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
						  type = "text"
						  value = {recovery.illict}
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
						  type = "text"
						  value = {recovery.poppy}
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
						  value = {recovery.tablets}
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
						  type = "text"
						  value = {recovery.licit}
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
						  type = "text"
						  value = {recovery.heroin}
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
						  type = "text"
						  value = {recovery.injections}
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
						  type = "text"
						  value = {recovery.lahan}
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
						  type = "text"
						  value = {recovery.opium}
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
						  value = {recovery.others}
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
						  type = "text"
						  value = {recovery.ganja}
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
						  type = "text"
						  value = {recovery.charas}
						  inputProps={{ min: "0"}}
						  onChange = {e => {
							const val = e.target.value;
							setDataRecovery(prevState => {
								return { ...prevState, charas: val }
							  });
						  }
						  }
						 />

						<MuiPickersUtilsProvider utils={DateFnsUtils} >
						 <DatePicker
							variant="inline"
							openTo="year"
							views={["year", "month"]}
							dateFormat="MM/yyyy"
							showMonthYearPicker
							label="Month & Year of the Data"
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
				   <Button variant="contained" color="secondary" onClick = {onSubmitRecovery}>
					 Submit Recovery Data
				   </Button>				
				 </Paper>  
				   )
		      }
			
		  </div>

		</div>		
	)
}

export default PS;


