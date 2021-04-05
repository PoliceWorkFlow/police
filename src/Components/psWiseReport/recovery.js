import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

function createData(name, illicit, licit, lahan, opium, poppy, heroin, charas, ganja, tablets, injections, others, date ) {
  return { name, illicit, licit, lahan, opium, poppy, heroin, charas, ganja, tablets, injections, others, date};
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
        createData('Nangal', props.recovery[0].illicit, props.recovery[0].licit, props.recovery[0].lahan, props.recovery[0].opium, props.recovery[0].poppy, props.recovery[0].heroin, props.recovery[0].charas, props.recovery[0].ganja, props.recovery[0].tablets, props.recovery[0].injections, props.recovery[0].others, props.recovery[0].datemod),
        createData('City Morinda',  props.recovery[1].illicit, props.recovery[1].licit, props.recovery[1].lahan, props.recovery[1].opium, props.recovery[1].poppy, props.recovery[1].heroin, props.recovery[1].charas, props.recovery[1].ganja, props.recovery[1].tablets, props.recovery[1].injections, props.recovery[1].others, props.recovery[1].datemod),
        createData('Sri Anandpur Sahib', props.recovery[2].illicit, props.recovery[2].licit, props.recovery[2].lahan, props.recovery[2].opium, props.recovery[2].poppy, props.recovery[2].heroin, props.recovery[2].charas, props.recovery[2].ganja, props.recovery[2].tablets, props.recovery[2].injections, props.recovery[2].others, props.recovery[2].datemod),
        createData('City Rupnagar',  props.recovery[3].illicit, props.recovery[3].licit, props.recovery[3].lahan, props.recovery[3].opium, props.recovery[3].poppy, props.recovery[3].heroin, props.recovery[3].charas, props.recovery[3].ganja, props.recovery[3].tablets, props.recovery[3].injections, props.recovery[3].others, props.recovery[3].datemod ),
        createData('Kiratpur Sahib', props.recovery[4].illicit, props.recovery[4].licit, props.recovery[4].lahan, props.recovery[4].opium, props.recovery[4].poppy, props.recovery[4].heroin, props.recovery[4].charas, props.recovery[4].ganja, props.recovery[4].tablets, props.recovery[4].injections, props.recovery[4].others, props.recovery[4].datemod),
        createData('Sri Chamkaur Sahib', props.recovery[5].illicit, props.recovery[5].licit, props.recovery[5].lahan, props.recovery[5].opium, props.recovery[5].poppy, props.recovery[5].heroin, props.recovery[5].charas, props.recovery[5].ganja, props.recovery[5].tablets, props.recovery[5].injections, props.recovery[5].others, props.recovery[5].datemod ),
        createData('Sadar Rupnagar',  props.recovery[6].illicit, props.recovery[6].licit, props.recovery[6].lahan, props.recovery[6].opium, props.recovery[6].poppy, props.recovery[6].heroin, props.recovery[6].charas, props.recovery[6].ganja, props.recovery[6].tablets, props.recovery[6].injections, props.recovery[6].others, props.recovery[6].datemod ),
        createData('Sadar Morinda',  props.recovery[7].illicit, props.recovery[7].licit, props.recovery[7].lahan, props.recovery[7].opium, props.recovery[7].poppy, props.recovery[7].heroin, props.recovery[7].charas, props.recovery[7].ganja, props.recovery[7].tablets, props.recovery[7].injections, props.recovery[7].others, props.recovery[7].datemod  ),
        createData('Nurpurbedi',  props.recovery[8].illicit, props.recovery[8].licit, props.recovery[8].lahan, props.recovery[8].opium, props.recovery[8].poppy, props.recovery[8].heroin, props.recovery[8].charas, props.recovery[8].ganja, props.recovery[8].tablets, props.recovery[8].injections, props.recovery[8].others, props.recovery[8].datemod),
        createData('Singh Bhagwantpur',   props.recovery[9].illicit, props.recovery[9].licit, props.recovery[9].lahan, props.recovery[9].opium, props.recovery[9].poppy, props.recovery[9].heroin, props.recovery[9].charas, props.recovery[9].ganja, props.recovery[9].tablets, props.recovery[9].injections, props.recovery[2].others, props.recovery[9].datemod)
       // createData('Total',0,  0, 0,    107,     354,    200, ),
    ];  
  const classes = useStyles();
  

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name of PS</StyledTableCell>
            <StyledTableCell align="right" style={{width: 50}}>Illicit Liquor</StyledTableCell>
            <StyledTableCell align="right" >Licit Liquor</StyledTableCell>
            <StyledTableCell align="right" >Lahan</StyledTableCell>
            <StyledTableCell align="right" >Opium</StyledTableCell>
            <StyledTableCell align="right" >Poppy Husk</StyledTableCell>
            <StyledTableCell align="right" >Heroin</StyledTableCell>
            <StyledTableCell align="right" >Charas</StyledTableCell>
            <StyledTableCell align="right" >Ganja</StyledTableCell>
            <StyledTableCell align="right" >Tablets</StyledTableCell>
            <StyledTableCell align="right" >Injections</StyledTableCell>
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
              <StyledTableCell align="right" style={{width: 100}}>{row.illicit} L</StyledTableCell>
              <StyledTableCell align="right" >{row.licit} L</StyledTableCell>
              <StyledTableCell align="right" >{row.lahan} L</StyledTableCell>
              <StyledTableCell align="right" >{row.opium} gm</StyledTableCell>
              <StyledTableCell align="right" >{row.poppy} gm</StyledTableCell>
              <StyledTableCell align="right" >{row.heroin} gm</StyledTableCell>
              <StyledTableCell align="right" >{row.charas} gm</StyledTableCell>
              <StyledTableCell align="right" >{row.ganja} gm</StyledTableCell>
              <StyledTableCell align="right" >{row.tablets}</StyledTableCell>
              <StyledTableCell align="right" >{row.injections}</StyledTableCell>
              <StyledTableCell align="right" >{row.others}</StyledTableCell>
              <StyledTableCell align="right" >{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
