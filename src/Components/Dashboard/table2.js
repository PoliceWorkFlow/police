import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, Tooltip, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 12,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

  },
}))(TableRow);


function createData(name, v1, v2, v3, v4, v5, v6, v7, v8) {

  return { name, v1, v2, v3, v4, v5, v6, v7, v8};
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: '500px'
  },
});

export default function CustomizedTables(props) {

  const rows = [
    createData('Nangal', props.report[0].caseincourt, props.report[0].propDisp, props.report[0].heniusCrime, props.report[0].POarrested, props.report[0].propCrime, props.report[0].untraceInCourt, props.report[0].compDisp),
    createData('City Morinda', props.report[1].caseincourt, props.report[1].propDisp, props.report[1].heniusCrime, props.report[1].POarrested, props.report[1].propCrime, props.report[1].untraceInCourt, props.report[1].compDisp),
    createData('Sri Anandpur Sahib', props.report[2].caseincourt, props.report[2].propDisp, props.report[2].heniusCrime, props.report[2].POarrested, props.report[2].propCrime, props.report[2].untraceInCourt, props.report[2].compDisp),
    createData('City Rupnagar', props.report[3].caseincourt, props.report[3].propDisp, props.report[3].heniusCrime, props.report[3].POarrested, props.report[3].propCrime, props.report[3].untraceInCourt, props.report[3].compDisp),
    createData('Kiratpur Sahib', props.report[4].caseincourt, props.report[4].propDisp, props.report[4].heniusCrime, props.report[4].POarrested, props.report[4].propCrime, props.report[4].untraceInCourt, props.report[4].compDisp),
    createData('Sri Chamkaur Sahib', props.report[5].caseincourt, props.report[5].propDisp, props.report[5].heniusCrime, props.report[5].POarrested, props.report[5].propCrime, props.report[5].untraceInCourt, props.report[5].compDisp),
    createData('Sadar Rupnagar', props.report[6].caseincourt, props.report[6].propDisp, props.report[6].heniusCrime, props.report[6].POarrested, props.report[6].propCrime, props.report[6].untraceInCourt, props.report[6].compDisp),
    createData('Sadar Morinda', props.report[7].caseincourt, props.report[7].propDisp, props.report[7].heniusCrime, props.report[7].POarrested, props.report[7].propCrime, props.report[7].untraceInCourt, props.report[7].compDisp),
    createData('Nurpurbedi', props.report[8].caseincourt, props.report[8].propDisp, props.report[8].heniusCrime, props.report[8].POarrested, props.report[8].propCrime, props.report[8].untraceInCourt, props.report[8].compDisp),
    createData('Singh Bhagwantpur', props.report[9].caseincourt, props.report[9].propDisp, props.report[9].heniusCrime, props.report[9].POarrested, props.report[9].propCrime, props.report[9].untraceInCourt, props.report[9].compDisp),

  ];

  const rows2 = [
    createData('Nangal', props.report[0].ndps, props.report[0].arm, props.report[0].excise, props.report[0].gambling, props.report[0].commercial, props.report[0].feedback, props.report[0].handling, props.report[0].cleaniness),
    createData('City Morinda', props.report[1].ndps, props.report[1].arm, props.report[1].excise, props.report[1].gambling, props.report[1].commercial, props.report[1].feedback, props.report[1].handling, props.report[1].cleaniness),
    createData('Sri Anandpur Sahib', props.report[2].ndps, props.report[2].arm, props.report[2].excise, props.report[2].gambling, props.report[2].commercial, props.report[2].feedback, props.report[2].handling, props.report[2].cleaniness),
    createData('City Rupnagar', props.report[3].ndps, props.report[3].arm, props.report[3].excise, props.report[3].gambling, props.report[3].commercial, props.report[3].feedback, props.report[3].handling, props.report[3].cleaniness),
    createData('Kiratpur Sahib', props.report[4].ndps, props.report[4].arm, props.report[4].excise, props.report[4].gambling, props.report[4].commercial, props.report[4].feedback, props.report[4].handling, props.report[4].cleaniness),
    createData('Sri Chamkaur Sahib', props.report[5].ndps, props.report[5].arm, props.report[5].excise, props.report[5].gambling, props.report[5].commercial, props.report[5].feedback, props.report[5].handling, props.report[5].cleaniness),
    createData('Sadar Rupnagar', props.report[6].ndps, props.report[6].arm, props.report[6].excise, props.report[6].gambling, props.report[6].commercial, props.report[6].feedback, props.report[6].handling, props.report[6].cleaniness),
    createData('Sadar Morinda', props.report[7].ndps, props.report[7].arm, props.report[7].excise, props.report[7].gambling, props.report[7].commercial, props.report[7].feedback, props.report[7].handling, props.report[7].cleaniness),
    createData('Nurpurbedi', props.report[8].ndps, props.report[8].arm, props.report[8].excise, props.report[8].gambling, props.report[8].commercial, props.report[8].feedback, props.report[8].handling, props.report[8].cleaniness),
    createData('Singh Bhagwantpur', props.report[9].ndps, props.report[9].arm, props.report[9].excise, props.report[9].gambling, props.report[9].commercial, props.report[9].feedback, props.report[9].handling, props.report[9].cleaniness),

  ];
  const classes = useStyles();

  if(props.flag === 1){
  return (
    <div>
      <div>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name of PS</StyledTableCell>
                <StyledTableCell align="right" >Case in Court (0.1 Pts) </StyledTableCell>
                <StyledTableCell align="right" >Heinous Crime (2 Pts)</StyledTableCell>
                <StyledTableCell align="right" >Crime agt Property (0.1 Pts)</StyledTableCell>
                <StyledTableCell align="right" >Property Disp (0.1 Pts)</StyledTableCell>
                <StyledTableCell align="right" >PO arrested (2 Pts)</StyledTableCell>
                <StyledTableCell align="right" >Untraced cases in court (0.2 Pts)</StyledTableCell>
                <StyledTableCell align="right" >Disp of Complaints (0.1 Pts)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right" >{row.v1}%</StyledTableCell>
                  <StyledTableCell align="right" >{row.v3}</StyledTableCell>
                  <StyledTableCell align="right" >{row.v5}%</StyledTableCell>
                  <StyledTableCell align="right" >{row.v2}</StyledTableCell>
                  <StyledTableCell align="right" >{row.v4}</StyledTableCell>
                  <StyledTableCell align="right" >{row.v6}</StyledTableCell>
                  <StyledTableCell align="right" >{row.v7}%</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ paddingTop: '30px' }}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name of PS</StyledTableCell>
                <StyledTableCell align="right" >Cleaniness (1 Pt)</StyledTableCell>
                <StyledTableCell align="right" >Handling (1 Pt)</StyledTableCell>
                <StyledTableCell align="right" >Feedback (1 Pt)</StyledTableCell>
                <StyledTableCell align="right" >NDPS (0.4 Pts)</StyledTableCell>
                <StyledTableCell align="right" >Commercial (2 Pts)</StyledTableCell>
                <StyledTableCell align="right" >Arm (1 Pt)</StyledTableCell>
                <StyledTableCell align="right" >Excise (0.2 Pts)</StyledTableCell>
                <StyledTableCell align="right" >Gambling (0.2 Pts)</StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right" >{row.v8}</StyledTableCell>
                  <StyledTableCell align="right" >{row.v7}</StyledTableCell>
                  <StyledTableCell align="right" >{row.v6}</StyledTableCell>
                  <StyledTableCell align="right" >{row.v1}</StyledTableCell>
                  <StyledTableCell align="right" >{row.v5}</StyledTableCell>
                  <StyledTableCell align="right" >{row.v2}</StyledTableCell>
                  <StyledTableCell align="right" >{row.v3}</StyledTableCell>
                  <StyledTableCell align="right" >{row.v4}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    </div>
  );
  }

  else{
    return (
      <div>
        <div style={{ paddingTop: '40px' }}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name of PS</StyledTableCell>
                  <StyledTableCell align="right" >Case in Court </StyledTableCell>
                  <StyledTableCell align="right" >Heinous Crime</StyledTableCell>
                  <StyledTableCell align="right" >Crime agt Property</StyledTableCell>
                  <StyledTableCell align="right" >Property Disp </StyledTableCell>
                  <StyledTableCell align="right" >PO arrested </StyledTableCell>
                  <StyledTableCell align="right" >Untraced cases in court </StyledTableCell>
                  <StyledTableCell align="right" >Disp of Complaints </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right" >{row.v1}%</StyledTableCell>
                    <StyledTableCell align="right" >{row.v3}</StyledTableCell>
                    <StyledTableCell align="right" >{row.v5}%</StyledTableCell>
                    <StyledTableCell align="right" >{row.v2}</StyledTableCell>
                    <StyledTableCell align="right" >{row.v4}</StyledTableCell>
                    <StyledTableCell align="right" >{row.v6}</StyledTableCell>
                    <StyledTableCell align="right" >{row.v7}%</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div style={{ paddingTop: '70px' }}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name of PS</StyledTableCell>
                  <StyledTableCell align="right" >Cleaniness</StyledTableCell>
                  <StyledTableCell align="right" >Handling </StyledTableCell>
                  <StyledTableCell align="right" >Feedback </StyledTableCell>
                  <StyledTableCell align="right" >NDPS </StyledTableCell>
                  <StyledTableCell align="right" >Commercial </StyledTableCell>
                  <StyledTableCell align="right" >Arm </StyledTableCell>
                  <StyledTableCell align="right" >Excise </StyledTableCell>
                  <StyledTableCell align="right" >Gambling </StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right" >{row.v8}</StyledTableCell>
                    <StyledTableCell align="right" >{row.v7}</StyledTableCell>
                    <StyledTableCell align="right" >{row.v6}</StyledTableCell>
                    <StyledTableCell align="right" >{row.v1}</StyledTableCell>
                    <StyledTableCell align="right" >{row.v5}</StyledTableCell>
                    <StyledTableCell align="right" >{row.v2}</StyledTableCell>
                    <StyledTableCell align="right" >{row.v3}</StyledTableCell>
                    <StyledTableCell align="right" >{row.v4}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
  
        </div>
      </div>
    );

  }
}