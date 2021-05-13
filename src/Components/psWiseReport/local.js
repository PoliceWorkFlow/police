import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, Tooltip, TableContainer, TableHead, TableRow, Button} from '@material-ui/core';

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
  if(t3 === 'Not Filled'){
    UIP = '-'; UID = '-'; UNP = '-'; UND = '-'; UI1P = '-'; UI1D = '-';
    UI6P = '-';  UI6D = '-'; UI3P = '-'; UI3D = '-'; UI31P= '-'; UI31D= '-';

    return { name, UIP,UID, UNP, UND, UI1P, UI1D, UI6P, UI6D, UI3P, UI3D, UI31P, UI31D, t1, t2, t3};
  }

  return { name, UIP,UID, UNP, UND, UI1P, UI1D, UI6P, UI6D, UI3P, UI3D, UI31P, UI31D, t1, t2, t3};
}


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: '100%'
  },
});

export default function CustomizedTables(props) {
    const rows = [
        createData('Nangal', props.local[0].underInvPend , props.local[0].underInvDisp, props.local[0].cancelledPend, props.local[0].cancelledDisp, props.local[0].underInv1YrPend, props.local[0].underInv1YrDisp, props.local[0].underInv6monPend, props.local[0].underInv6monDisp, props.local[0].underInvo3monPend, props.local[0].underInvo3monDisp, props.local[0].underInvl3monPend, props.local[0].underInvl3monDisp, props.localCheck[2].status, props.localCheck[1].status, props.localCheck[0].status),
        createData('City Morinda', props.local[1].underInvPend , props.local[1].underInvDisp, props.local[1].cancelledPend, props.local[1].cancelledDisp, props.local[1].underInv1YrPend, props.local[1].underInv1YrDisp, props.local[1].underInv6monPend, props.local[1].underInv6monDisp, props.local[1].underInvo3monPend, props.local[1].underInvo3monDisp, props.local[1].underInvl3monPend, props.local[1].underInvl3monDisp, props.localCheck[5].status, props.localCheck[4].status, props.localCheck[3].status),
        createData('Sri Anandpur Sahib', props.local[2].underInvPend , props.local[2].underInvDisp, props.local[2].cancelledPend, props.local[2].cancelledDisp, props.local[2].underInv1YrPend, props.local[2].underInv1YrDisp, props.local[2].underInv6monPend, props.local[2].underInv6monDisp, props.local[2].underInvo3monPend, props.local[2].underInvo3monDisp, props.local[2].underInvl3monPend, props.local[2].underInvl3monDisp, props.localCheck[8].status, props.localCheck[7].status, props.localCheck[6].status),
        createData('City Rupnagar', props.local[3].underInvPend , props.local[3].underInvDisp, props.local[3].cancelledPend, props.local[3].cancelledDisp, props.local[3].underInv1YrPend, props.local[3].underInv1YrDisp, props.local[3].underInv6monPend, props.local[3].underInv6monDisp, props.local[3].underInvo3monPend, props.local[3].underInvo3monDisp, props.local[3].underInvl3monPend, props.local[3].underInvl3monDisp, props.localCheck[11].status, props.localCheck[10].status, props.localCheck[9].status),
        createData('Kiratpur Sahib', props.local[4].underInvPend , props.local[4].underInvDisp, props.local[4].cancelledPend, props.local[4].cancelledDisp, props.local[4].underInv1YrPend, props.local[4].underInv1YrDisp, props.local[4].underInv6monPend, props.local[4].underInv6monDisp, props.local[4].underInvo3monPend, props.local[4].underInvo3monDisp, props.local[4].underInvl3monPend, props.local[4].underInvl3monDisp, props.localCheck[14].status, props.localCheck[13].status, props.localCheck[12].status),
        createData('Sri Chamkaur Sahib', props.local[5].underInvPend , props.local[5].underInvDisp, props.local[5].cancelledPend, props.local[5].cancelledDisp, props.local[5].underInv1YrPend, props.local[5].underInv1YrDisp, props.local[5].underInv6monPend, props.local[5].underInv6monDisp, props.local[5].underInvo3monPend, props.local[5].underInvo3monDisp, props.local[5].underInvl3monPend, props.local[5].underInvl3monDisp, props.localCheck[17].status, props.localCheck[16].status, props.localCheck[15].status),
        createData('Sadar Rupnagar', props.local[6].underInvPend , props.local[6].underInvDisp, props.local[6].cancelledPend, props.local[6].cancelledDisp, props.local[6].underInv1YrPend, props.local[6].underInv1YrDisp, props.local[6].underInv6monPend, props.local[6].underInv6monDisp, props.local[6].underInvo3monPend, props.local[6].underInvo3monDisp, props.local[6].underInvl3monPend, props.local[6].underInvl3monDisp, props.localCheck[20].status, props.localCheck[19].status, props.localCheck[18].status),
        createData('Sadar Morinda', props.local[7].underInvPend , props.local[7].underInvDisp, props.local[7].cancelledPend, props.local[7].cancelledDisp, props.local[7].underInv1YrPend, props.local[7].underInv1YrDisp, props.local[7].underInv6monPend, props.local[7].underInv6monDisp, props.local[7].underInvo3monPend, props.local[7].underInvo3monDisp, props.local[7].underInvl3monPend, props.local[7].underInvl3monDisp, props.localCheck[23].status, props.localCheck[22].status, props.localCheck[21].status),
        createData('Nurpurbedi', props.local[8].underInvPend , props.local[8].underInvDisp, props.local[8].cancelledPend, props.local[8].cancelledDisp, props.local[8].underInv1YrPend, props.local[8].underInv1YrDisp, props.local[8].underInv6monPend, props.local[8].underInv6monDisp, props.local[8].underInvo3monPend, props.local[8].underInvo3monDisp, props.local[8].underInvl3monPend, props.local[8].underInvl3monDisp, props.localCheck[26].status, props.localCheck[25].status, props.localCheck[24].status),
        createData('Singh Bhagwantpur', props.local[9].underInvPend , props.local[9].underInvDisp, props.local[9].cancelledPend, props.local[9].cancelledDisp, props.local[9].underInv1YrPend, props.local[9].underInv1YrDisp, props.local[9].underInv6monPend, props.local[9].underInv6monDisp, props.local[9].underInvo3monPend, props.local[9].underInvo3monDisp, props.local[9].underInvl3monPend, props.local[9].underInvl3monDisp, props.localCheck[29].status, props.localCheck[28].status, props.localCheck[27].status),
        createData('', '' , '', '', '', '', '', '', '', '', '', '', '', 'Send Reminder to All', 'Send Reminder to All', 'Send Reminder to All')
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
                <StyledTableCell align="center" style={{width: 110}} >{props.localCheck[0].monYear}</StyledTableCell>
                <StyledTableCell align="center" style={{width: 110}} >{props.localCheck[1].monYear}</StyledTableCell>
                <StyledTableCell align="center" style={{width: 110}} >{props.localCheck[2].monYear}</StyledTableCell>

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

              { row.t3 === 'Not Filled'
                  ? <StyledTableCell align="center" >
                      <Tooltip title="Send Reminder" placement="left-start" interactive>
                       <Button variant="contained" color="lightsecondary" style={{ fontSize: '10px'}} onClick = {() => props.onNotification(row.name, props.localCheck[0].monYear ,'Local and Special Law')} >Not Filled</Button>
                      </Tooltip>
                    </StyledTableCell>
                  : 
                    row.t3 === 'Send Reminder to All'
                    ?  
                     <StyledTableCell align="center" >
                       <Tooltip title="Send Reminder to All" placement="left-start" interactive> 
                        <Button variant="contained" color="lightsecondary" style={{fontSize: '10px'}} onClick = {() => props.onNotificationAll(0 ,'Local and Special Law' )} >{row.t3}</Button> 
                      </Tooltip>
                     </StyledTableCell>
                     :
                     <StyledTableCell align="center" >{row.t3}</StyledTableCell>
                  }  

                { row.t2 === 'Not Filled'
                  ? <StyledTableCell align="center" > 
                    <Tooltip title="Send Reminder" placement="left-start" interactive>
                    <Button variant="contained" color="lightsecondary" style={{ fontSize: '10px'}} onClick = {() => props.onNotification(row.name, props.localCheck[1].monYear ,'Local and Special Law')} >Not Filled</Button> 
                    </Tooltip>
                    </StyledTableCell>
                  :  row.t2 === 'Send Reminder to All'
                    ?  
                    <StyledTableCell align="center" >
                      <Tooltip title="Send Reminder to All" placement="left-start" interactive> 
                        <Button variant="contained" color="lightsecondary" style={{fontSize: '10px'}} onClick = {() => props.onNotificationAll(1 ,'Local and Special Law')} >{row.t2}</Button> 
                      </Tooltip>
                    </StyledTableCell>
                  :
                  <StyledTableCell align="center" >{row.t2}</StyledTableCell>
                  }
                    

              { row.t1 === 'Not Filled'
                  ? <StyledTableCell align="center" >
                      <Tooltip title="Send Reminder" placement="left-start" interactive>
                      <Button variant="contained" color="lightsecondary" style={{ fontSize: '10px'}} onClick = {() => props.onNotification(row.name, props.localCheck[2].monYear ,'Local and Special Law')} >Not Filled</Button>
                      </Tooltip>
                      </StyledTableCell>
                  : 
                    row.t1 === 'Send Reminder to All'
                    ?  
                    <StyledTableCell align="center" >
                      <Tooltip title="Send Reminder to All" placement="left-start" interactive> 
                        <Button variant="contained" color="lightsecondary" style={{fontSize: '10px'}} onClick = {() => props.onNotificationAll(2, 'Local and Special Law')} >{row.t1}</Button> 
                      </Tooltip>
                      </StyledTableCell>
                    :
                     <StyledTableCell align="center" >{row.t1}</StyledTableCell>
                }

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}