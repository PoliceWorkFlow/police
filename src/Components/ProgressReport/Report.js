import React, { useState } from 'react';
import './Report.css';
import { Grid, Button, Paper, TextField, makeStyles, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import 'tachyons';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import * as XLSX from "xlsx";

const useStyle = makeStyles(theme => ({
	root: {
		'& .MuiFormControl-root': {
			width: '90%',
			margin: theme.spacing(1)
		}
	},

	pageContent: {
		margin: theme.spacing(3),
		padding: theme.spacing(2)
	}
}))

function currentMonth() {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const monYear = months[new Date().getMonth()] + ' ' + new Date().getFullYear();
	return monYear;
}

function Report(props) {

	const [station_chosen, setStaion] = useState('Nangal');
	const [police_station] = useState(['Nangal', 'City Morinda', 'Sri Anandpur Sahib', 'City Rupnagar', 'Kiratpur Sahib', 'Sri Chamkaur Sahib', 'Sadar Rupnagar', 'Sadar Morinda', 'Nurpurbedi', 'Singh Bhagwantpur']);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [monthCurr] = useState(currentMonth());
	const months = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
	const [data, setExcelData] = useState([]);
	const [progress, setData] = useState({
		casesubmitted: 0, propertyDisp: 0, henious: 0, POarrested: 0, propertyCrime: 0, untrace_in_court: 0,
		disposal_compl: 0, cleaniness: 0, feedback: 0, handling: 0, ndps: 0, arm: 0, excise: 0, gambling: 0, commercial: 0, monYear: ''
	});

	const onStationChange = (event) => {
		var station_chosen = event.target.value;

		if (data.length !== 0) {

			var index = police_station.indexOf(station_chosen) + 1;
			const d = data[index + 1];

			const report = {
				casesubmitted: 100 * d.__EMPTY, propertyDisp: d.__EMPTY_14, henious: d.__EMPTY_2, POarrested: d.__EMPTY_16, propertyCrime: 100 * d.__EMPTY_4, untrace_in_court: d.__EMPTY_18,
				disposal_compl: 100 * d.__EMPTY_12, cleaniness: d.__EMPTY_21, feedback: d.__EMPTY_20, handling: d.__EMPTY_22, ndps: d.__EMPTY_6, arm: d.__EMPTY_8, excise: d.__EMPTY_9, gambling: d.__EMPTY_10, commercial: d.__EMPTY_7
			}

			setData(report);
		}
		setStaion(event.target.value);
	}

	function onSubmit() {
		const index = police_station.indexOf(station_chosen) + 1;
		var flag = true;
		progress.monYear = months[0][selectedDate.getMonth()] + ' ' + selectedDate.getFullYear();

		for (var ind in progress) {
			if (progress[ind] < 0) {
				flag = false;
				alert("ERROR!!!!  Add only positive values");
				break;
			}
		}

		if (flag) {
			fetch(props.link + '/api/checkMonthYear', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					policeStation: index,
					monYear: progress.monYear,
					type: 'Report'
				})
			})
				.then(response => response.json())
				.then(data => {
					if (data === 'Yes') {
						if (window.confirm("Report for this month already exist!!!\nClick 'OK' to update this month report, else click 'Cancel' ")) {
							fetch(props.link + '/api/addProgressReport', {
								method: 'post',
								headers: { 'Content-Type': 'application/json' },
								body: JSON.stringify({
									policeStation: index,
									report: progress,
									type: 'update'
								})
							})
								.then(response => response.json())
								.then(data => {
									if (data.id) {
										if (monthCurr === progress.monYear) {
											props.onProgressChanges(data);
											alert('Progress Report updated successfully');
										}
									}
									else
										alert('Unable to update the Progress Report. Kindly update it again')
								})
						}
					}
					else {
						fetch(props.link + '/api/addProgressReport', {
							method: 'post',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({
								policeStation: index,
								report: progress,
								type: 'new report'
							})
						})
							.then(response => response.json())
							.then(data => {
								if (data.id) {
									if (monthCurr === progress.monYear) {
										props.onProgressChanges(data);
										alert('Progress Report added successfully');
									}
								}
								else
									alert('Unable to add the Progress Report. Kindly add it again')
							})
					}
				})
		}
	}

	const readExcel = (file) => {
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
			setExcelData(d);
			var index = police_station.indexOf(station_chosen) + 1;
			const data = d[index + 1];

			const report = {
				casesubmitted: 100 * data.__EMPTY, propertyDisp: data.__EMPTY_14, henious: data.__EMPTY_2, POarrested: data.__EMPTY_16, propertyCrime: 100 * data.__EMPTY_4, untrace_in_court: data.__EMPTY_18,
				disposal_compl: 100 * data.__EMPTY_12, cleaniness: data.__EMPTY_21, feedback: data.__EMPTY_20, handling: data.__EMPTY_22, ndps: data.__EMPTY_6, arm: data.__EMPTY_8, excise: data.__EMPTY_9, gambling: data.__EMPTY_10, commercial: data.__EMPTY_7
			}

			setData(report);

		});
	};

	const classes = useStyle();

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	return (
		<div className="dash">
			<div className="dash_left">
				<div className='dash_header'>
					<h2>Progress Report</h2>
				</div>

				<RadioGroup row onChange={onStationChange} value={station_chosen}>
					{police_station.map((station) => (
						<FormControlLabel value={station} name='graph' control={<Radio />} label={station} />
					))
					}
				</RadioGroup>

				<div>
					<div className='dash_header pt2'>
						<h2 className='center'> {station_chosen} Police Station</h2>

						<MuiPickersUtilsProvider utils={DateFnsUtils} >
							<DatePicker
								variant="inline"
								openTo="year"
								views={["year", "month"]}
								dateFormat="MM/yyyy"
								showMonthYearPicker
								label="Date of the Report"
								helperText="Start from year selection"
								value={selectedDate}
								onChange={e => {
									setSelectedDate(e);
								}}
							/>
							<div className='pl4'>
								<Button variant="contained" size='small' onClick={() => openInNewTab('https://docs.google.com/spreadsheets/d/1az-K-2Ut2rHAE1ipdFFcs4zbwst6uRJfBkh35sCnyYA/edit?usp=sharing')} > Sample File</Button>
							</div>
						</MuiPickersUtilsProvider>
						<input
							className='tr pl4'
							type="file"
							onChange={(e) => {
								const file = e.target.files[0];
								readExcel(file);
							}}
						/>
					</div>

					<Paper className={classes.pageContent}>

						<form>
							<Grid container className={classes.root}>
								<Grid item xs={6}>
									<TextField
										variant="outlined"
										label="Cases Submitted In Court"
										type='number'
										inputProps={{ min: "0" }}
										value={progress.casesubmitted}
										required
										onChange={e => {
											const val = e.target.value;
											setData(prevState => {
												return { ...prevState, casesubmitted: val }
											});
										}
										}
									/>

									<TextField
										variant="outlined"
										label="Undetected cases traced of heinous Crime"
										type='number'
										inputProps={{ min: "0" }}
										value={progress.henious}
										required
										onChange={e => {
											const val = e.target.value;
											setData(prevState => {
												return { ...prevState, henious: val }
											});
										}
										}
									/>

									<TextField
										variant="outlined"
										label="Untraced cases of crime against property"
										type='number'
										value={progress.propertyCrime}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
											const val = e.target.value;
											setData(prevState => {
												return { ...prevState, propertyCrime: val }
											});
										}
										}
									/>

									<TextField
										variant="outlined"
										label="Disposal of Complaints"
										type='number'
										value={progress.disposal_compl}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
											const val = e.target.value;
											setData(prevState => {
												return { ...prevState, disposal_compl: val }
											});
										}
										}
									/>

									<TextField
										variant="outlined"
										label="Negligence in duty/public dealing/image in public & feedback"
										type='number'
										value={progress.feedback}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
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
										variant="outlined"
										label="Property Disposal"
										type='number'
										value={progress.propertyDisp}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
											const val = e.target.value;
											setData(prevState => {
												return { ...prevState, propertyDisp: val }
											});
										}
										}
									/>

									<TextField
										variant="outlined"
										label="Number of PO arrested"
										type='number'
										value={progress.POarrested}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
											const val = e.target.value;
											setData(prevState => {
												return { ...prevState, POarrested: val }
											});
										}
										}
									/>

									<TextField
										variant="outlined"
										label="Untrace cases put on court"
										type='number'
										value={progress.untrace_in_court}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
											const val = e.target.value;
											setData(prevState => {
												return { ...prevState, untrace_in_court: val }
											});
										}
										}
									/>

									<TextField
										variant="outlined"
										label="Cleaniness of Police Station"
										type='number'
										value={progress.cleaniness}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
											const val = e.target.value;
											setData(prevState => {
												return { ...prevState, cleaniness: val }
											});
										}
										}
									/>

									<TextField
										variant="outlined"
										label="Handling of Law & order Situation"
										type='number'
										value={progress.handling}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
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
										variant="outlined"
										label="NDPS"
										type='number'
										value={progress.ndps}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
											const val = e.target.value;
											setData(prevState => {
												return { ...prevState, ndps: val }
											});
										}
										}
									/>
									<TextField
										variant="outlined"
										label="Gambling Act"
										type='number'
										value={progress.gambling}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
											const val = e.target.value;
											setData(prevState => {
												return { ...prevState, gambling: val }
											});
										}
										}
									/>
								</Grid>

								<Grid item xs={3}>
									<TextField
										variant="outlined"
										label="Commercial Recovery"
										type='number'
										value={progress.commercial}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
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
										variant="outlined"
										label="ARM Act"
										type='number'
										value={progress.arm}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
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
										variant="outlined"
										label="Excise Act"
										type='number'
										value={progress.excise}
										inputProps={{ min: "0" }}
										required
										onChange={e => {
											const val = e.target.value;
											setData(prevState => {
												return { ...prevState, excise: val }
											});
										}
										}
									/>
								</Grid>
							</Grid>
						</form>

						<Button variant="contained" color="secondary" onClick={onSubmit}>
							Submit {station_chosen} Report
			      </Button>
					</Paper>
				</div>
			</div>

		</div>
	)
}

export default Report;

/*<FormControl className="dash_dropdown">
				<Select variant="outlined" value = {station_chosen} onChange={onStationChange} displayEmpty>
				<MenuItem value="" disabled >Select PS</MenuItem>
				{ police_station.map((station) => (
				   <MenuItem value = {station}> {station} </MenuItem>
				  ))}
				</Select>
				</FormControl>*/