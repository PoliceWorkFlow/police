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

function createData(name, over, drunk, ospeed, helmet, mask, others, t1, t2, t3) {
  return { name, over, drunk, ospeed, helmet, mask, others, t1, t2, t3};
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
  console.log(props.challanCheck);
    const rows = [
        createData('Nangal', props.challan[0].overloading, props.challan[0].drunken, props.challan[0].overspeed, props.challan[0].withoutHelmet, props.challan[0].covid19, props.challan[0].others, props.challanCheck[2].status, props.challanCheck[1].status, props.challanCheck[0].status, props.challan[0].datemod),
        createData('City Morinda',  props.challan[1].overloading, props.challan[1].drunken, props.challan[1].overspeed, props.challan[1].withoutHelmet, props.challan[1].covid19, props.challan[1].others, props.challanCheck[5].status, props.challanCheck[4].status, props.challanCheck[3].status, props.challan[1].datemod),
        createData('Sri Anandpur Sahib', props.challan[2].overloading, props.challan[2].drunken, props.challan[2].overspeed, props.challan[2].withoutHelmet, props.challan[2].covid19, props.challan[2].others, props.challanCheck[8].status, props.challanCheck[7].status, props.challanCheck[6].status, props.challan[2].datemod),
        createData('City Rupnagar',  props.challan[3].overloading, props.challan[3].drunken, props.challan[3].overspeed, props.challan[3].withoutHelmet, props.challan[3].covid19, props.challan[3].others, props.challanCheck[11].status, props.challanCheck[10].status, props.challanCheck[9].status, props.challan[3].datemod ),
        createData('Kiratpur Sahib', props.challan[4].overloading, props.challan[4].drunken, props.challan[4].overspeed, props.challan[4].withoutHelmet, props.challan[4].covid19, props.challan[4].others, props.challanCheck[14].status, props.challanCheck[13].status, props.challanCheck[12].status, props.challan[4].datemod),
        createData('Sri Chamkaur Sahib', props.challan[5].overloading, props.challan[5].drunken, props.challan[5].overspeed, props.challan[5].withoutHelmet, props.challan[5].covid19, props.challan[5].others, props.challanCheck[17].status, props.challanCheck[16].status, props.challanCheck[15].status, props.challan[5].datemod ),
        createData('Sadar Rupnagar',  props.challan[6].overloading, props.challan[6].drunken, props.challan[6].overspeed, props.challan[6].withoutHelmet, props.challan[6].covid19, props.challan[6].others, props.challanCheck[20].status, props.challanCheck[19].status, props.challanCheck[18].status, props.challan[6].datemod ),
        createData('Sadar Morinda',  props.challan[7].overloading, props.challan[7].drunken, props.challan[7].overspeed, props.challan[7].withoutHelmet, props.challan[7].covid19, props.challan[7].others, props.challanCheck[23].status, props.challanCheck[22].status, props.challanCheck[21].status, props.challan[7].datemod  ),
        createData('Nurpurbedi',  props.challan[8].overloading, props.challan[8].drunken, props.challan[8].overspeed, props.challan[8].withoutHelmet, props.challan[8].covid19, props.challan[8].others, props.challanCheck[26].status, props.challanCheck[25].status, props.challanCheck[24].status, props.challan[8].datemod),
        createData('Singh Bhagwantpur',   props.challan[9].overloading, props.challan[9].drunken, props.challan[9].overspeed, props.challan[9].withoutHelmet, props.challan[9].covid19, props.challan[9].others, props.challanCheck[29].status, props.challanCheck[28].status, props.challanCheck[27].status, props.challan[9].datemod)
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
            <StyledTableCell align="right" >{props.challanCheck[2].monYear}</StyledTableCell>
            <StyledTableCell align="right" >{props.challanCheck[1].monYear}</StyledTableCell>
            <StyledTableCell align="right" >{props.challanCheck[0].monYear}</StyledTableCell>
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
              <StyledTableCell align="right" >{row.t1}</StyledTableCell>
              <StyledTableCell align="right" >{row.t2}</StyledTableCell>
              <StyledTableCell align="right" >{row.t3}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}