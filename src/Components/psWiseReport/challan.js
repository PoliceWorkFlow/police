import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, over, drunk, ospeed, helmet, mask, others, date) {
  return { name, over, drunk, ospeed, helmet, mask, others, date};
}


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function CustomizedTables(props) {
    const rows = [
        createData('Nangal', props.challan[0].overloading, props.challan[0].drunken, props.challan[0].overspeed, props.challan[0].withoutHelmet, props.challan[0].covid19, props.challan[0].others, props.challan[0].datemod),
        createData('City Morinda',  props.challan[1].overloading, props.challan[1].drunken, props.challan[1].overspeed, props.challan[1].withoutHelmet, props.challan[1].covid19, props.challan[1].others, props.challan[1].datemod),
        createData('Sri Anandpur Sahib', props.challan[2].overloading, props.challan[2].drunken, props.challan[2].overspeed, props.challan[2].withoutHelmet, props.challan[2].covid19, props.challan[2].others, props.challan[2].datemod),
        createData('City Rupnagar',  props.challan[3].overloading, props.challan[3].drunken, props.challan[3].overspeed, props.challan[3].withoutHelmet, props.challan[3].covid19, props.challan[3].others, props.challan[3].datemod ),
        createData('Kiratpur Sahib', props.challan[4].overloading, props.challan[4].drunken, props.challan[4].overspeed, props.challan[4].withoutHelmet, props.challan[4].covid19, props.challan[4].others, props.challan[4].datemod),
        createData('Sri Chamkaur Sahib', props.challan[5].overloading, props.challan[5].drunken, props.challan[5].overspeed, props.challan[5].withoutHelmet, props.challan[5].covid19, props.challan[5].others, props.challan[5].datemod ),
        createData('Sadar Rupnagar',  props.challan[6].overloading, props.challan[6].drunken, props.challan[6].overspeed, props.challan[6].withoutHelmet, props.challan[6].covid19, props.challan[6].others, props.challan[6].datemod ),
        createData('Sadar Morinda',  props.challan[7].overloading, props.challan[7].drunken, props.challan[7].overspeed, props.challan[7].withoutHelmet, props.challan[7].covid19, props.challan[7].others, props.challan[7].datemod  ),
        createData('Nurpurbedi',  props.challan[8].overloading, props.challan[8].drunken, props.challan[8].overspeed, props.challan[8].withoutHelmet, props.challan[8].covid19, props.challan[8].others, props.challan[8].datemod),
        createData('Singh Bhagwantpur',   props.challan[9].overloading, props.challan[9].drunken, props.challan[9].overspeed, props.challan[9].withoutHelmet, props.challan[9].covid19, props.challan[9].others, props.challan[9].datemod)
       // createData('Total',0,  0, 0,    107,     354,    200, ),
    ];  
  const classes = useStyles();
  

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name of PS</StyledTableCell>
            <StyledTableCell align="right" style={{width: 50}}>OverLoading </StyledTableCell>
            <StyledTableCell align="right" >Drunken Driving</StyledTableCell>
            <StyledTableCell align="right" >Overspeed</StyledTableCell>
            <StyledTableCell align="right" >Without Helmet</StyledTableCell>
            <StyledTableCell align="right" >Covid19</StyledTableCell>
            <StyledTableCell align="right" >Others</StyledTableCell>
            <StyledTableCell align="right" >Last Updated On</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" style={{width: 100}}>{row.over}</StyledTableCell>
              <StyledTableCell align="right" >{row.drunk}</StyledTableCell>
              <StyledTableCell align="right" >{row.ospeed}</StyledTableCell>
              <StyledTableCell align="right" >{row.helmet}</StyledTableCell>
              <StyledTableCell align="right" >{row.mask}</StyledTableCell>
              <StyledTableCell align="right" >{row.others}</StyledTableCell>
              <StyledTableCell align="right" >{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}