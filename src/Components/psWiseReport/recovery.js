import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, Tooltip, TableContainer, TableHead, TableRow, Button} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 13,
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, illicit, licit, lahan, opium, poppy, heroin, charas, ganja, tablets, injections, others,t1,t2,t3) {
  
  if(t3 === 'Not Filled'){
    illicit = '-'; licit = '-'; lahan = '-'; opium = '-'; poppy = '-'; heroin = '-';
    charas = '-'; ganja = '-'; tablets = '-'; injections = '-'; others = '-';
    return { name, illicit, licit, lahan, opium, poppy, heroin, charas, ganja, tablets, injections, others, t1, t2, t3};
  }
  return { name, illicit, licit, lahan, opium, poppy, heroin, charas, ganja, tablets, injections, others, t1, t2, t3};
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
        createData('Nangal', props.recovery[0].illicit, props.recovery[0].licit, props.recovery[0].lahan, props.recovery[0].opium, props.recovery[0].poppy, props.recovery[0].heroin, props.recovery[0].charas, props.recovery[0].ganja, props.recovery[0].tablets, props.recovery[0].injections, props.recovery[0].others, props.recoveryCheck[2].status, props.recoveryCheck[1].status, props.recoveryCheck[0].status),
        createData('City Morinda',  props.recovery[1].illicit, props.recovery[1].licit, props.recovery[1].lahan, props.recovery[1].opium, props.recovery[1].poppy, props.recovery[1].heroin, props.recovery[1].charas, props.recovery[1].ganja, props.recovery[1].tablets, props.recovery[1].injections, props.recovery[1].others, props.recoveryCheck[5].status, props.recoveryCheck[4].status, props.recoveryCheck[3].status),
        createData('Sri Anandpur Sahib', props.recovery[2].illicit, props.recovery[2].licit, props.recovery[2].lahan, props.recovery[2].opium, props.recovery[2].poppy, props.recovery[2].heroin, props.recovery[2].charas, props.recovery[2].ganja, props.recovery[2].tablets, props.recovery[2].injections, props.recovery[2].others, props.recoveryCheck[8].status, props.recoveryCheck[7].status, props.recoveryCheck[6].status),
        createData('City Rupnagar',  props.recovery[3].illicit, props.recovery[3].licit, props.recovery[3].lahan, props.recovery[3].opium, props.recovery[3].poppy, props.recovery[3].heroin, props.recovery[3].charas, props.recovery[3].ganja, props.recovery[3].tablets, props.recovery[3].injections, props.recovery[3].others, props.recoveryCheck[11].status, props.recoveryCheck[10].status, props.recoveryCheck[9].status),
        createData('Kiratpur Sahib', props.recovery[4].illicit, props.recovery[4].licit, props.recovery[4].lahan, props.recovery[4].opium, props.recovery[4].poppy, props.recovery[4].heroin, props.recovery[4].charas, props.recovery[4].ganja, props.recovery[4].tablets, props.recovery[4].injections, props.recovery[4].others, props.recoveryCheck[14].status, props.recoveryCheck[13].status, props.recoveryCheck[12].status),
        createData('Sri Chamkaur Sahib', props.recovery[5].illicit, props.recovery[5].licit, props.recovery[5].lahan, props.recovery[5].opium, props.recovery[5].poppy, props.recovery[5].heroin, props.recovery[5].charas, props.recovery[5].ganja, props.recovery[5].tablets, props.recovery[5].injections, props.recovery[5].others, props.recoveryCheck[17].status, props.recoveryCheck[16].status, props.recoveryCheck[15].status ),
        createData('Sadar Rupnagar',  props.recovery[6].illicit, props.recovery[6].licit, props.recovery[6].lahan, props.recovery[6].opium, props.recovery[6].poppy, props.recovery[6].heroin, props.recovery[6].charas, props.recovery[6].ganja, props.recovery[6].tablets, props.recovery[6].injections, props.recovery[6].others, props.recoveryCheck[20].status, props.recoveryCheck[19].status, props.recoveryCheck[18].status ),
        createData('Sadar Morinda',  props.recovery[7].illicit, props.recovery[7].licit, props.recovery[7].lahan, props.recovery[7].opium, props.recovery[7].poppy, props.recovery[7].heroin, props.recovery[7].charas, props.recovery[7].ganja, props.recovery[7].tablets, props.recovery[7].injections, props.recovery[7].others, props.recoveryCheck[23].status, props.recoveryCheck[22].status, props.recoveryCheck[21].status),
        createData('Nurpurbedi',  props.recovery[8].illicit, props.recovery[8].licit, props.recovery[8].lahan, props.recovery[8].opium, props.recovery[8].poppy, props.recovery[8].heroin, props.recovery[8].charas, props.recovery[8].ganja, props.recovery[8].tablets, props.recovery[8].injections, props.recovery[8].others, props.recoveryCheck[26].status, props.recoveryCheck[25].status, props.recoveryCheck[24].status),
        createData('Singh Bhagwantpur',   props.recovery[9].illicit, props.recovery[9].licit, props.recovery[9].lahan, props.recovery[9].opium, props.recovery[9].poppy, props.recovery[9].heroin, props.recovery[9].charas, props.recovery[9].ganja, props.recovery[9].tablets, props.recovery[9].injections, props.recovery[9].others, props.recoveryCheck[29].status, props.recoveryCheck[28].status, props.recoveryCheck[27].status),
        createData('' , '', '', '', '', '', '', '', '', '', '', '', 'Send Reminder to All', 'Send Reminder to All', 'Send Reminder to All')
    ];  

   /* const rows = [
      createData('PS1', props.recovery[0].illicit, props.recovery[0].licit, props.recovery[0].lahan, props.recovery[0].opium, props.recovery[0].poppy, props.recovery[0].heroin, props.recovery[0].charas, props.recovery[0].ganja, props.recovery[0].tablets, props.recovery[0].injections, props.recovery[0].others, props.recoveryCheck[2].status, props.recoveryCheck[1].status, props.recoveryCheck[0].status),
      createData('PS2',  props.recovery[1].illicit, props.recovery[1].licit, props.recovery[1].lahan, props.recovery[1].opium, props.recovery[1].poppy, props.recovery[1].heroin, props.recovery[1].charas, props.recovery[1].ganja, props.recovery[1].tablets, props.recovery[1].injections, props.recovery[1].others, props.recoveryCheck[5].status, props.recoveryCheck[4].status, props.recoveryCheck[3].status),
      createData('PS3', props.recovery[2].illicit, props.recovery[2].licit, props.recovery[2].lahan, props.recovery[2].opium, props.recovery[2].poppy, props.recovery[2].heroin, props.recovery[2].charas, props.recovery[2].ganja, props.recovery[2].tablets, props.recovery[2].injections, props.recovery[2].others, props.recoveryCheck[8].status, props.recoveryCheck[7].status, props.recoveryCheck[6].status),
      createData('PS4',  props.recovery[3].illicit, props.recovery[3].licit, props.recovery[3].lahan, props.recovery[3].opium, props.recovery[3].poppy, props.recovery[3].heroin, props.recovery[3].charas, props.recovery[3].ganja, props.recovery[3].tablets, props.recovery[3].injections, props.recovery[3].others, props.recoveryCheck[11].status, props.recoveryCheck[10].status, props.recoveryCheck[9].status),
      createData('PS5', props.recovery[4].illicit, props.recovery[4].licit, props.recovery[4].lahan, props.recovery[4].opium, props.recovery[4].poppy, props.recovery[4].heroin, props.recovery[4].charas, props.recovery[4].ganja, props.recovery[4].tablets, props.recovery[4].injections, props.recovery[4].others, props.recoveryCheck[14].status, props.recoveryCheck[13].status, props.recoveryCheck[12].status),
      createData('PS6', props.recovery[5].illicit, props.recovery[5].licit, props.recovery[5].lahan, props.recovery[5].opium, props.recovery[5].poppy, props.recovery[5].heroin, props.recovery[5].charas, props.recovery[5].ganja, props.recovery[5].tablets, props.recovery[5].injections, props.recovery[5].others, props.recoveryCheck[17].status, props.recoveryCheck[16].status, props.recoveryCheck[15].status ),
      createData('PS7',  props.recovery[6].illicit, props.recovery[6].licit, props.recovery[6].lahan, props.recovery[6].opium, props.recovery[6].poppy, props.recovery[6].heroin, props.recovery[6].charas, props.recovery[6].ganja, props.recovery[6].tablets, props.recovery[6].injections, props.recovery[6].others, props.recoveryCheck[20].status, props.recoveryCheck[19].status, props.recoveryCheck[18].status ),
      createData('PS8',  props.recovery[7].illicit, props.recovery[7].licit, props.recovery[7].lahan, props.recovery[7].opium, props.recovery[7].poppy, props.recovery[7].heroin, props.recovery[7].charas, props.recovery[7].ganja, props.recovery[7].tablets, props.recovery[7].injections, props.recovery[7].others, props.recoveryCheck[23].status, props.recoveryCheck[22].status, props.recoveryCheck[21].status),
      createData('PS9',  props.recovery[8].illicit, props.recovery[8].licit, props.recovery[8].lahan, props.recovery[8].opium, props.recovery[8].poppy, props.recovery[8].heroin, props.recovery[8].charas, props.recovery[8].ganja, props.recovery[8].tablets, props.recovery[8].injections, props.recovery[8].others, props.recoveryCheck[26].status, props.recoveryCheck[25].status, props.recoveryCheck[24].status),
      createData('PS10',   props.recovery[9].illicit, props.recovery[9].licit, props.recovery[9].lahan, props.recovery[9].opium, props.recovery[9].poppy, props.recovery[9].heroin, props.recovery[9].charas, props.recovery[9].ganja, props.recovery[9].tablets, props.recovery[9].injections, props.recovery[9].others, props.recoveryCheck[29].status, props.recoveryCheck[28].status, props.recoveryCheck[27].status),
      createData('' , '', '', '', '', '', '', '', '', '', '', '', 'Send Reminder to All', 'Send Reminder to All', 'Send Reminder to All')
  ]; */

  const classes = useStyles();
  

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow >
            <StyledTableCell>Name of PS</StyledTableCell>
            <StyledTableCell align="right" >Illicit Liquor (ml)</StyledTableCell>
            <StyledTableCell align="right" >Licit Liquor (ml)</StyledTableCell>
            <StyledTableCell align="right" >Lahan (Litre)</StyledTableCell>
            <StyledTableCell align="right" >Opium (Gram)</StyledTableCell>
            <StyledTableCell align="right" >Poppy Husk (Gram)</StyledTableCell>
            <StyledTableCell align="right" >Heroin (Gram)</StyledTableCell>
            <StyledTableCell align="right" >Charas (Gram)</StyledTableCell>
            <StyledTableCell align="right" >Ganja (Gram)</StyledTableCell>
            <StyledTableCell align="right" >Tablets</StyledTableCell>
            <StyledTableCell align="right" >Injections</StyledTableCell>
            <StyledTableCell align="right" >Others</StyledTableCell>
            <StyledTableCell align="center" >{props.recoveryCheck[0].monYear}</StyledTableCell>
            <StyledTableCell align="center" >{props.recoveryCheck[1].monYear}</StyledTableCell>
            <StyledTableCell align="center" >{props.recoveryCheck[2].monYear}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" >{row.illicit} </StyledTableCell>
              <StyledTableCell align="right" >{row.licit} </StyledTableCell>
              <StyledTableCell align="right" >{row.lahan} </StyledTableCell>
              <StyledTableCell align="right" >{row.opium} </StyledTableCell>
              <StyledTableCell align="right" >{row.poppy} </StyledTableCell>
              <StyledTableCell align="right" >{row.heroin} </StyledTableCell>
              <StyledTableCell align="right" >{row.charas} </StyledTableCell>
              <StyledTableCell align="right" >{row.ganja} </StyledTableCell>
              <StyledTableCell align="right" >{row.tablets}</StyledTableCell>
              <StyledTableCell align="right" >{row.injections}</StyledTableCell>
              <StyledTableCell align="right" >{row.others}</StyledTableCell>
 
              { row.t3 === 'Not Filled'
                  ? 
                    <StyledTableCell align="center" >
                     <Tooltip title="Send Reminder" placement="left-start" interactive> 
                       <Button variant="contained" color="lightsecondary" style={{fontSize: '10px'}} onClick = {() => props.onNotification(row.name, props.recoveryCheck[0].monYear ,'Recovery' )} >Not Filled</Button> 
                     </Tooltip>
                    </StyledTableCell>
                  :  row.t3 === 'Send Reminder to All'
                   ?  
                   <StyledTableCell align="center" >
                     <Tooltip title="Send Reminder to All" placement="left-start" interactive> 
                       <Button variant="contained" color="lightsecondary" style={{fontSize: '10px'}} onClick = {() => props.onNotificationAll(0 ,'Recovery' )} >{row.t3}</Button> 
                     </Tooltip>
                    </StyledTableCell>
                  :
                  <StyledTableCell align="center" >{row.t3}</StyledTableCell>
                  }  

                { row.t2 === 'Not Filled'
                  ? <StyledTableCell align="center" >
                    <Tooltip title="Send Reminder" placement="left-start" interactive> 
                     <Button variant="contained" color="lightsecondary" style={{fontSize: '10px'}} onClick = {() => props.onNotification(row.name, props.recoveryCheck[1].monYear ,'Recovery')} >Not Filled</Button>
                      </Tooltip>
                      </StyledTableCell>
                  : 
                    row.t2 === 'Send Reminder to All'
                  ?  
                  <StyledTableCell align="center" >
                    <Tooltip title="Send Reminder to All" placement="left-start" interactive> 
                      <Button variant="contained" color="lightsecondary" style={{fontSize: '10px'}} onClick = {() => props.onNotification(1 ,'Recovery' )} >{row.t2}</Button> 
                    </Tooltip>
                   </StyledTableCell>
                 :
                  <StyledTableCell align="center" >{row.t2}</StyledTableCell>
                  }  
                
                 { row.t1 === 'Not Filled'
                  ? <StyledTableCell align="center" >
                    <Tooltip title="Send Reminder" placement="left-start" interactive> 
                    <Button variant="contained" color="lightsecondary" style={{fontSize: '10px'}} onClick = {() => props.onNotification(row.name, props.recoveryCheck[2].monYear ,'Recovery')} >Not Filled</Button> 
                    </Tooltip> 
                    </StyledTableCell> 
                  :  row.t1 === 'Send Reminder to All'
                  ?  
                  <StyledTableCell align="center" >
                    <Tooltip title="Send Reminder to All" placement="left-start" interactive> 
                      <Button variant="contained" color="lightsecondary" style={{fontSize: '10px'}} onClick = {() => props.onNotification(2 ,'Recovery' )} >{row.t1}</Button> 
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
