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

function createData(name, UIP,UID, UNP, UND, UI1P, UI1D, UI6P, UI6D, UI3P, UI3D, UI31P, UI31D, t1, t2, t3) {
  return { name, UIP,UID, UNP, UND, UI1P, UI1D, UI6P, UI6D, UI3P, UI3D, UI31P, UI31D, t1, t2, t3};
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
        createData('Nangal', props.ipc[0].underInvPend , props.ipc[0].underInvDisp, props.ipc[0].cancelledPend, props.ipc[0].cancelledDisp, props.ipc[0].underInv1YrPend, props.ipc[0].underInv1YrDisp, props.ipc[0].underInv6monPend, props.ipc[0].underInv6monDisp, props.ipc[0].underInvo3monPend, props.ipc[0].underInvo3monDisp, props.ipc[0].underInvl3monPend, props.ipc[0].underInvl3monDisp, props.ipcCheck[2].status, props.ipcCheck[1].status, props.ipcCheck[0].status),
        createData('City Morinda', props.ipc[1].underInvPend , props.ipc[1].underInvDisp, props.ipc[1].cancelledPend, props.ipc[1].cancelledDisp, props.ipc[1].underInv1YrPend, props.ipc[1].underInv1YrDisp, props.ipc[1].underInv6monPend, props.ipc[1].underInv6monDisp, props.ipc[1].underInvo3monPend, props.ipc[1].underInvo3monDisp, props.ipc[1].underInvl3monPend, props.ipc[1].underInvl3monDisp, props.ipcCheck[5].status, props.ipcCheck[4].status, props.ipcCheck[3].status),
        createData('Sri Anandpur Sahib', props.ipc[2].underInvPend , props.ipc[2].underInvDisp, props.ipc[2].cancelledPend, props.ipc[2].cancelledDisp, props.ipc[2].underInv1YrPend, props.ipc[2].underInv1YrDisp, props.ipc[2].underInv6monPend, props.ipc[2].underInv6monDisp, props.ipc[2].underInvo3monPend, props.ipc[2].underInvo3monDisp, props.ipc[2].underInvl3monPend, props.ipc[2].underInvl3monDisp, props.ipcCheck[8].status, props.ipcCheck[7].status, props.ipcCheck[6].status),
        createData('City Rupnagar', props.ipc[3].underInvPend , props.ipc[3].underInvDisp, props.ipc[3].cancelledPend, props.ipc[3].cancelledDisp, props.ipc[3].underInv1YrPend, props.ipc[3].underInv1YrDisp, props.ipc[3].underInv6monPend, props.ipc[3].underInv6monDisp, props.ipc[3].underInvo3monPend, props.ipc[3].underInvo3monDisp, props.ipc[3].underInvl3monPend, props.ipc[3].underInvl3monDisp,  props.ipcCheck[11].status, props.ipcCheck[10].status, props.ipcCheck[9].status),
        createData('Kiratpur Sahib', props.ipc[4].underInvPend , props.ipc[4].underInvDisp, props.ipc[4].cancelledPend, props.ipc[4].cancelledDisp, props.ipc[4].underInv1YrPend, props.ipc[4].underInv1YrDisp, props.ipc[4].underInv6monPend, props.ipc[4].underInv6monDisp, props.ipc[4].underInvo3monPend, props.ipc[4].underInvo3monDisp, props.ipc[4].underInvl3monPend, props.ipc[4].underInvl3monDisp,  props.ipcCheck[14].status, props.ipcCheck[13].status, props.ipcCheck[12].status),
        createData('Sri Chamkaur Sahib', props.ipc[5].underInvPend , props.ipc[5].underInvDisp, props.ipc[5].cancelledPend, props.ipc[5].cancelledDisp, props.ipc[5].underInv1YrPend, props.ipc[5].underInv1YrDisp, props.ipc[5].underInv6monPend, props.ipc[5].underInv6monDisp, props.ipc[5].underInvo3monPend, props.ipc[5].underInvo3monDisp, props.ipc[5].underInvl3monPend, props.ipc[5].underInvl3monDisp, props.ipcCheck[17].status, props.ipcCheck[16].status, props.ipcCheck[15].status),
        createData('Sadar Rupnagar', props.ipc[6].underInvPend , props.ipc[6].underInvDisp, props.ipc[6].cancelledPend, props.ipc[6].cancelledDisp, props.ipc[6].underInv1YrPend, props.ipc[6].underInv1YrDisp, props.ipc[6].underInv6monPend, props.ipc[6].underInv6monDisp, props.ipc[6].underInvo3monPend, props.ipc[6].underInvo3monDisp, props.ipc[6].underInvl3monPend, props.ipc[6].underInvl3monDisp, props.ipcCheck[20].status, props.ipcCheck[19].status, props.ipcCheck[18].status),
        createData('Sadar Morinda', props.ipc[7].underInvPend , props.ipc[7].underInvDisp, props.ipc[7].cancelledPend, props.ipc[7].cancelledDisp, props.ipc[7].underInv1YrPend, props.ipc[7].underInv1YrDisp, props.ipc[7].underInv6monPend, props.ipc[7].underInv6monDisp, props.ipc[7].underInvo3monPend, props.ipc[7].underInvo3monDisp, props.ipc[7].underInvl3monPend, props.ipc[7].underInvl3monDisp, props.ipcCheck[23].status, props.ipcCheck[22].status, props.ipcCheck[21].status),
        createData('Nurpurbedi', props.ipc[8].underInvPend , props.ipc[8].underInvDisp, props.ipc[8].cancelledPend, props.ipc[8].cancelledDisp, props.ipc[8].underInv1YrPend, props.ipc[8].underInv1YrDisp, props.ipc[8].underInv6monPend, props.ipc[8].underInv6monDisp, props.ipc[8].underInvo3monPend, props.ipc[8].underInvo3monDisp, props.ipc[8].underInvl3monPend, props.ipc[8].underInvl3monDisp, props.ipcCheck[26].status, props.ipcCheck[25].status, props.ipcCheck[24].status),
        createData('Singh Bhagwantpur', props.ipc[9].underInvPend , props.ipc[9].underInvDisp, props.ipc[9].cancelledPend, props.ipc[9].cancelledDisp, props.ipc[9].underInv1YrPend, props.ipc[9].underInv1YrDisp, props.ipc[9].underInv6monPend, props.ipc[9].underInv6monDisp, props.ipc[9].underInvo3monPend, props.ipc[9].underInvo3monDisp, props.ipc[9].underInvl3monPend, props.ipc[9].underInvl3monDisp, props.ipcCheck[29].status, props.ipcCheck[28].status, props.ipcCheck[27].status),
       // createData('Total',1117,  92,     737,    12,     245,    18, 348,    31, 274,    27, 262,    50),
      ];  
  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead style={{height: 3}}>
          <TableRow>
            <StyledTableCell>Name Of PS
            </StyledTableCell>

            <StyledTableCell align="right">Under Investigation
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="left">D</StyledTableCell>
                </StyledTableCell>

            <StyledTableCell align="right" >Untraced/Cancelled
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="right">D</StyledTableCell>
                </StyledTableCell>

            <StyledTableCell align="right">UI over 1 year            
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="right">D</StyledTableCell>
                </StyledTableCell>

            <StyledTableCell align="right">UI Over 6 mon
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="right">D</StyledTableCell>
                </StyledTableCell>

                <StyledTableCell align="right">UI Over 3 mon
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="right">D</StyledTableCell>
                </StyledTableCell>

                <StyledTableCell align="right">UI less than 3 mon
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="right">D</StyledTableCell>
                </StyledTableCell>
                <StyledTableCell align="right" style={{width: 110}} >{props.ipcCheck[2].monYear}</StyledTableCell>
                <StyledTableCell align="right" style={{width: 110}} >{props.ipcCheck[1].monYear}</StyledTableCell>
                <StyledTableCell align="right" style={{width: 110}} >{props.ipcCheck[0].monYear}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} style={{height: 3}}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>
              <StyledTableCell align="right">{row.UIP}</StyledTableCell>
              <StyledTableCell align="right">{row.UID}</StyledTableCell>
              </StyledTableCell>

              <StyledTableCell>
              <StyledTableCell align="right">{row.UNP}</StyledTableCell>
              <StyledTableCell align="right">{row.UND}</StyledTableCell>
              </StyledTableCell>

              <StyledTableCell>
              <StyledTableCell align="right">{row.UI1P}</StyledTableCell>
              <StyledTableCell align="right">{row.UI1D}</StyledTableCell>
              </StyledTableCell>

              <StyledTableCell>
              <StyledTableCell align="right">{row.UI6P}</StyledTableCell>
              <StyledTableCell align="right">{row.UI6D}</StyledTableCell>
              </StyledTableCell>

              <StyledTableCell>
              <StyledTableCell align="right">{row.UI3P}</StyledTableCell>
              <StyledTableCell align="right">{row.UI3D}</StyledTableCell>
              </StyledTableCell>
              
              <StyledTableCell>
              <StyledTableCell align="right">{row.UI31P}</StyledTableCell>
              <StyledTableCell align="right">{row.UI31D}</StyledTableCell>
              </StyledTableCell>

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