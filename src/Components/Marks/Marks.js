import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    minHeight: 350
  },
  heading: {
    alignItems: 'center',
  }
});

function createData(name, calories ) {
  return { name, calories };
}

const rows1 = [
  createData('10% Case Submited in court', "1 Point"),
  createData('Undetected cases traced of heinous Crime on tracing 1 case', "2 Point"),
  createData('Unraced cases of crime against property for 10% of cases', "1 Point"),
  createData('5 Cases of NDPS', "2 Point"),
  createData('Arm Act on 1 case', "1 Point"),
  createData('Commercial Recovery ', "2 Point"),
  createData('Excise Act on 5 case', "1 Point"),
  createData('Gambling Act on 5 case', "1 Point"),
];
const rows2 = [
  createData('10% Disposal of Complaints', "1 Point"),
  createData('10% Property Disposal ', "1 Point"),
  createData('Arrest of 1 P.O.', "2 Point"),
  createData('5 untrace case put in court', "1 Point"),
  createData('Negligence in duty/public dealing/ image in public and feedback ', "For +ve = 5, -ve = -5"),
  createData('Handling Law and order situation', "Out of 5"),
  createData('Cleaniness of Police Staion', "Out of 5"),
];


export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.heading}>
         <h1 class="font-weight-bold"> Marks Criteria </h1>
      </div>
      <Grid container>
        
        <Grid xs={5.5} style={{marginLeft:50}}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Criteria</b></TableCell>
            <TableCell ><b>Points Awarded</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow key={row.name}>
              <TableCell >
                {row.name}
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    
    <Grid xs={5.5} style={{marginLeft:50}}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell><b>Criteria</b></TableCell>
            <TableCell ><b>Points Awarded</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow key={row.name}>
              <TableCell >
                {row.name}
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
    </div>
  );
}