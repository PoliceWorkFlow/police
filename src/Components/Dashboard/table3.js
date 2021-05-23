import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, Tooltip, TableContainer, TableHead, TableRow, Button} from '@material-ui/core';

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

function createData(name, UIP,UID, UI1P, UI1D) {
    return { name, UIP,UID, UI1P, UI1D};
}

function createData2(name, over, drunk, ospeed, helmet, mask, others) { 
      return { name, over, drunk, ospeed, helmet, mask, others};
}


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: '550px',
    width: '100%'
  },
});

export default function CustomizedTables(props) {
    const classes = useStyles();
     
    if(props.case_chosen === 'Under Investigation'){
        const rows1 = [
            createData('Nangal', props.ipc[0].underInvPend , props.ipc[0].underInvDisp, props.local[0].underInvPend , props.local[0].underInvDisp),
            createData('City Morinda', props.ipc[1].underInvPend , props.ipc[1].underInvDisp , props.local[1].underInvPend , props.local[1].underInvDisp),
            createData('Sri Anandpur Sahib', props.ipc[2].underInvPend , props.ipc[2].underInvDisp, props.local[2].underInvPend , props.local[2].underInvDisp),
            createData('City Rupnagar', props.ipc[3].underInvPend , props.ipc[3].underInvDisp, props.local[3].underInvPend , props.local[3].underInvDisp),
            createData('Kiratpur Sahib', props.ipc[4].underInvPend , props.ipc[4].underInvDisp, props.local[4].underInvPend , props.local[4].underInvDisp),
            createData('Sri Chamkaur Sahib', props.ipc[5].underInvPend , props.ipc[5].underInvDisp, props.local[5].underInvPend , props.local[5].underInvDisp),
            createData('Sadar Rupnagar', props.ipc[6].underInvPend , props.ipc[6].underInvDisp, props.local[6].underInvPend , props.local[6].underInvDisp),
            createData('Sadar Morinda', props.ipc[7].underInvPend , props.ipc[7].underInvDisp, props.local[7].underInvPend , props.local[7].underInvDisp),
            createData('Nurpurbedi', props.ipc[8].underInvPend , props.ipc[8].underInvDisp, props.local[8].underInvPend , props.local[8].underInvDisp),
            createData('Singh Bhagwantpur', props.ipc[9].underInvPend , props.ipc[9].underInvDisp, props.local[9].underInvPend , props.local[9].underInvDisp)
          // createData('Total',1117,  92,     737,    12,     245,    18, 348,    31, 274,    27, 262,    50),
         ]; 
    return (
        <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
            <TableHead style={{height: 1}}>
            <TableRow>
                <StyledTableCell>Name Of PS
                </StyledTableCell>

                <StyledTableCell align="center">Under IPC Law
                <StyledTableCell align="center">P</StyledTableCell>
                    <StyledTableCell align="left">D</StyledTableCell>
                    </StyledTableCell>

                <StyledTableCell align="left">Under Local & Special Law            
                <StyledTableCell align="center">P</StyledTableCell>
                    <StyledTableCell align="center">D</StyledTableCell>
                    </StyledTableCell>

            </TableRow>
            </TableHead>
            <TableBody>
            {rows1.map((row) => (
                <StyledTableRow key={row.name} style={{height: 1}}>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell>
                <StyledTableCell align="center">{row.UIP}</StyledTableCell>
                <StyledTableCell align="center">{row.UID}</StyledTableCell>
                </StyledTableCell>

                <StyledTableCell>
                <StyledTableCell align="center">{row.UI1P}</StyledTableCell>
                <StyledTableCell align="center">{row.UI1D}</StyledTableCell>
                </StyledTableCell>

                
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        );
    }

    else if(props.case_chosen === 'Under Investigation Over 1 Year'){
        const rows2 = [
            createData('Nangal', props.ipc[0].underInv1YrPend, props.ipc[0].underInv1YrDisp, props.local[0].underInv1YrPend, props.local[0].underInv1YrDisp),
            createData('City Morinda', props.ipc[1].underInv1YrPend, props.ipc[1].underInv1YrDisp, props.local[1].underInv1YrPend, props.local[1].underInv1YrDisp),
            createData('Sri Anandpur Sahib',  props.ipc[2].underInv1YrPend, props.ipc[2].underInv1YrDisp, props.local[2].underInv1YrPend, props.local[2].underInv1YrDisp ),
            createData('City Rupnagar',props.ipc[3].underInv1YrPend, props.ipc[3].underInv1YrDisp, props.local[3].underInv1YrPend, props.local[3].underInv1YrDisp ),
            createData('Kiratpur Sahib',   props.ipc[4].underInv1YrPend, props.ipc[4].underInv1YrDisp, props.local[4].underInv1YrPend, props.local[4].underInv1YrDisp ),
            createData('Sri Chamkaur Sahib',   props.ipc[5].underInv1YrPend, props.ipc[5].underInv1YrDisp, props.local[5].underInv1YrPend, props.local[5].underInv1YrDisp ),
            createData('Sadar Rupnagar',  props.ipc[6].underInv1YrPend, props.ipc[6].underInv1YrDisp, props.local[6].underInv1YrPend, props.local[6].underInv1YrDisp),
            createData('Sadar Morinda',  props.ipc[7].underInv1YrPend, props.ipc[7].underInv1YrDisp, props.local[7].underInv1YrPend, props.local[7].underInv1YrDisp),
            createData('Nurpurbedi',  props.ipc[8].underInv1YrPend, props.ipc[8].underInv1YrDisp, props.local[8].underInv1YrPend, props.local[8].underInv1YrDisp ),
            createData('Singh Bhagwantpur', props.ipc[9].underInv1YrPend, props.ipc[9].underInv1YrDisp, props.local[9].underInv1YrPend, props.local[9].underInv1YrDisp )
        // createData('Total',1117,  92,     737,    12,     245,    18, 348,    31, 274,    27, 262,    50),
        ]; 

        return (
            <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead style={{height: 1}}>
                <TableRow>
                    <StyledTableCell>Name Of PS
                    </StyledTableCell>
    
                    <StyledTableCell align="center">Under IPC Law
                    <StyledTableCell align="center">P</StyledTableCell>
                        <StyledTableCell align="center">D</StyledTableCell>
                        </StyledTableCell>
    
                    <StyledTableCell align="left">Under Local & Special Law            
                    <StyledTableCell align="center">P</StyledTableCell>
                        <StyledTableCell align="center">D</StyledTableCell>
                        </StyledTableCell>

    
                </TableRow>
                </TableHead>
                <TableBody>
                {rows2.map((row) => (
                    <StyledTableRow key={row.name} style={{height: 1}}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell>
                    <StyledTableCell align="center">{row.UIP}</StyledTableCell>
                    <StyledTableCell align="center">{row.UID}</StyledTableCell>
                    </StyledTableCell>
    
                    <StyledTableCell>
                    <StyledTableCell align="center">{row.UI1P}</StyledTableCell>
                    <StyledTableCell align="center">{row.UI1D}</StyledTableCell>
                    </StyledTableCell>
    
                    
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            );

    }

    else if(props.case_chosen === 'Under Investigation Over 6 Month'){
        const rows = [
            createData('Nangal', props.ipc[0].underInv6monPend, props.ipc[0].underInv6monDisp, props.local[0].underInv6monPend, props.local[0].underInv6monDisp),
            createData('City Morinda', props.ipc[1].underInv6monPend, props.ipc[1].underInv6monDisp, props.local[1].underInv6monPend, props.local[1].underInv6monDisp),
            createData('Sri Anandpur Sahib',  props.ipc[2].underInv6monPend, props.ipc[2].underInv6monDisp, props.local[2].underInv6monPend, props.local[2].underInv6monDisp ),
            createData('City Rupnagar',props.ipc[3].underInv6monPend, props.ipc[3].underInv6monDisp, props.local[3].underInv6monPend, props.local[3].underInv6monDisp ),
            createData('Kiratpur Sahib',   props.ipc[4].underInv6monPend, props.ipc[4].underInv6monDisp, props.local[4].underInv6monPend, props.local[4].underInv6monDisp ),
            createData('Sri Chamkaur Sahib',   props.ipc[5].underInv6monPend, props.ipc[5].underInv6monDisp, props.local[5].underInv6monPend, props.local[5].underInv6monDisp ),
            createData('Sadar Rupnagar',  props.ipc[6].underInv6monPend, props.ipc[6].underInv6monDisp, props.local[6].underInv6monPend, props.local[6].underInv6monDisp),
            createData('Sadar Morinda',  props.ipc[7].underInv6monPend, props.ipc[7].underInv6monDisp, props.local[7].underInv6monPend, props.local[7].underInv6monDisp),
            createData('Nurpurbedi',  props.ipc[8].underInv6monPend, props.ipc[8].underInv6monDisp, props.local[8].underInv6monPend, props.local[8].underInv6monDisp ),
            createData('Singh Bhagwantpur', props.ipc[9].underInv6monPend, props.ipc[9].underInv6monDisp, props.local[9].underInv6monPend, props.local[9].underInv6monDisp )
        // createData('Total',1117,  92,     737,    12,     245,    18, 348,    31, 274,    27, 262,    50),
        ];  
         

        return (
            <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead style={{height: 1}}>
                <TableRow>
                    <StyledTableCell>Name Of PS
                    </StyledTableCell>
    
                    <StyledTableCell align="center">Under IPC Law
                    <StyledTableCell align="center">P</StyledTableCell>
                        <StyledTableCell align="center">D</StyledTableCell>
                        </StyledTableCell>
    
                    <StyledTableCell align="left">Under Local & Special Law            
                    <StyledTableCell align="right">P</StyledTableCell>
                        <StyledTableCell align="right">D</StyledTableCell>
                        </StyledTableCell>
    
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name} style={{height: 1}}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell>
                    <StyledTableCell align="center">{row.UIP}</StyledTableCell>
                    <StyledTableCell align="center">{row.UID}</StyledTableCell>
                    </StyledTableCell>
    
                    <StyledTableCell>
                    <StyledTableCell align="right">{row.UI1P}</StyledTableCell>
                    <StyledTableCell align="right">{row.UI1D}</StyledTableCell>
                    </StyledTableCell>
                    
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            );

    }

    else if(props.case_chosen === 'Cancellation/Untraced'){
        const rows = [
            createData('Nangal', props.ipc[0].cancelledPend, props.ipc[0].cancelledDisp, props.local[0].cancelledPend, props.local[0].cancelledDisp),
            createData('City Morinda', props.ipc[1].cancelledPend, props.ipc[1].cancelledDisp, props.local[1].cancelledPend, props.local[1].cancelledDisp),
            createData('Sri Anandpur Sahib',  props.ipc[2].cancelledPend, props.ipc[2].cancelledDisp, props.local[2].cancelledPend, props.local[2].cancelledDisp ),
            createData('City Rupnagar',props.ipc[3].cancelledPend, props.ipc[3].cancelledDisp, props.local[3].cancelledPend, props.local[3].cancelledDisp ),
            createData('Kiratpur Sahib',   props.ipc[4].cancelledPend, props.ipc[4].cancelledDisp, props.local[4].cancelledPend, props.local[4].cancelledDisp ),
            createData('Sri Chamkaur Sahib',   props.ipc[5].cancelledPend, props.ipc[5].cancelledDisp, props.local[5].cancelledPend, props.local[5].cancelledDisp ),
            createData('Sadar Rupnagar',  props.ipc[6].cancelledPend, props.ipc[6].cancelledDisp, props.local[6].cancelledPend, props.local[6].cancelledDisp),
            createData('Sadar Morinda',  props.ipc[7].cancelledPend, props.ipc[7].cancelledDisp, props.local[7].cancelledPend, props.local[7].cancelledDisp),
            createData('Nurpurbedi',  props.ipc[8].cancelledPend, props.ipc[8].cancelledDisp, props.local[8].cancelledPend, props.local[8].cancelledDisp ),
            createData('Singh Bhagwantpur', props.ipc[9].cancelledPend, props.ipc[9].cancelledDisp, props.local[9].cancelledPend, props.local[9].cancelledDisp )
        // createData('Total',1117,  92,     737,    12,     245,    18, 348,    31, 274,    27, 262,    50),
        ];  

        return (
            <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead style={{height: 3}}>
                <TableRow>
                    <StyledTableCell>Name Of PS
                    </StyledTableCell>
    
                    <StyledTableCell align="center">Under IPC Law
                    <StyledTableCell align="center">P</StyledTableCell>
                        <StyledTableCell align="center">D</StyledTableCell>
                        </StyledTableCell>
    
                    <StyledTableCell align="left">Under Local & Special Law            
                    <StyledTableCell align="right">P</StyledTableCell>
                        <StyledTableCell align="right">D</StyledTableCell>
                        </StyledTableCell>
    
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name} style={{height: 1}}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell>
                    <StyledTableCell align="center">{row.UIP}</StyledTableCell>
                    <StyledTableCell align="center">{row.UID}</StyledTableCell>
                    </StyledTableCell>
    
                    <StyledTableCell>
                    <StyledTableCell align="right">{row.UI1P}</StyledTableCell>
                    <StyledTableCell align="right">{row.UI1D}</StyledTableCell>
                    </StyledTableCell>
                    
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            );

    }

    else if(props.case_chosen === 'Under Investigation Over 3 Month'){
        const rows = [
            createData('Nangal', props.ipc[0].underInvo3monPend, props.ipc[0].underInvo3monDisp, props.local[0].underInvo3monPend, props.local[0].underInvo3monDisp),
            createData('City Morinda', props.ipc[1].underInvo3monPend, props.ipc[1].underInvo3monDisp, props.local[1].underInvo3monPend, props.local[1].underInvo3monDisp),
            createData('Sri Anandpur Sahib',  props.ipc[2].underInvo3monPend, props.ipc[2].underInvo3monDisp, props.local[2].underInvo3monPend, props.local[2].underInvo3monDisp ),
            createData('City Rupnagar',props.ipc[3].underInvo3monPend, props.ipc[3].underInvo3monDisp, props.local[3].underInvo3monPend, props.local[3].underInvo3monDisp ),
            createData('Kiratpur Sahib',   props.ipc[4].underInvo3monPend, props.ipc[4].underInvo3monDisp, props.local[4].underInvo3monPend, props.local[4].underInvo3monDisp ),
            createData('Sri Chamkaur Sahib',   props.ipc[5].underInvo3monPend, props.ipc[5].underInvo3monDisp, props.local[5].underInvo3monPend, props.local[5].underInvo3monDisp ),
            createData('Sadar Rupnagar',  props.ipc[6].underInvo3monPend, props.ipc[6].underInvo3monDisp, props.local[6].underInvo3monPend, props.local[6].underInvo3monDisp),
            createData('Sadar Morinda',  props.ipc[7].underInvo3monPend, props.ipc[7].underInvo3monDisp, props.local[7].underInvo3monPend, props.local[7].underInvo3monDisp),
            createData('Nurpurbedi',  props.ipc[8].underInvo3monPend, props.ipc[8].underInvo3monDisp, props.local[8].underInvo3monPend, props.local[8].underInvo3monDisp ),
            createData('Singh Bhagwantpur', props.ipc[9].underInvo3monPend, props.ipc[9].underInvo3monDisp, props.local[9].underInvo3monPend, props.local[9].underInvo3monDisp )
        // createData('Total',1117,  92,     737,    12,     245,    18, 348,    31, 274,    27, 262,    50),
        ];
         

        return (
            <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead style={{height: 3}}>
                <TableRow>
                    <StyledTableCell>Name Of PS
                    </StyledTableCell>
    
                    <StyledTableCell align="center">Under IPC Law
                    <StyledTableCell align="center">P</StyledTableCell>
                        <StyledTableCell align="center">D</StyledTableCell>
                        </StyledTableCell>
    
                    <StyledTableCell align="left">Under Local & Special Law            
                    <StyledTableCell align="right">P</StyledTableCell>
                        <StyledTableCell align="right">D</StyledTableCell>
                        </StyledTableCell>
    
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name} style={{height: 1}}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell>
                    <StyledTableCell align="center">{row.UIP}</StyledTableCell>
                    <StyledTableCell align="center">{row.UID}</StyledTableCell>
                    </StyledTableCell>
    
                    <StyledTableCell>
                    <StyledTableCell align="right">{row.UI1P}</StyledTableCell>
                    <StyledTableCell align="right">{row.UI1D}</StyledTableCell>
                    </StyledTableCell>
                    
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            );

    }

    else if(props.case_chosen === 'Under Investigation less than 3 month'){
        const rows = [
            createData('Nangal', props.ipc[0].underInvl3monPend, props.ipc[0].underInvl3monDisp, props.local[0].underInvl3monPend, props.local[0].underInvl3monDisp),
            createData('City Morinda', props.ipc[1].underInvl3monPend, props.ipc[1].underInvl3monDisp, props.local[1].underInvl3monPend, props.local[1].underInvl3monDisp),
            createData('Sri Anandpur Sahib',  props.ipc[2].underInvl3monPend, props.ipc[2].underInvl3monDisp, props.local[2].underInvl3monPend, props.local[2].underInvl3monDisp ),
            createData('City Rupnagar',props.ipc[3].underInvl3monPend, props.ipc[3].underInvl3monDisp, props.local[3].underInvl3monPend, props.local[3].underInvl3monDisp ),
            createData('Kiratpur Sahib',   props.ipc[4].underInvl3monPend, props.ipc[4].underInvl3monDisp, props.local[4].underInvl3monPend, props.local[4].underInvl3monDisp ),
            createData('Sri Chamkaur Sahib',   props.ipc[5].underInvl3monPend, props.ipc[5].underInvl3monDisp, props.local[5].underInvl3monPend, props.local[5].underInvl3monDisp ),
            createData('Sadar Rupnagar',  props.ipc[6].underInvl3monPend, props.ipc[6].underInvl3monDisp, props.local[6].underInvl3monPend, props.local[6].underInvl3monDisp),
            createData('Sadar Morinda',  props.ipc[7].underInvl3monPend, props.ipc[7].underInvl3monDisp, props.local[7].underInvl3monPend, props.local[7].underInvl3monDisp),
            createData('Nurpurbedi',  props.ipc[8].underInvl3monPend, props.ipc[8].underInvl3monDisp, props.local[8].underInvl3monPend, props.local[8].underInvl3monDisp ),
            createData('Singh Bhagwantpur', props.ipc[9].underInvl3monPend, props.ipc[9].underInvl3monDisp, props.local[9].underInvl3monPend, props.local[9].underInvl3monDisp )
        // createData('Total',1117,  92,     737,    12,     245,    18, 348,    31, 274,    27, 262,    50),
        ]; 

        return (
            <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead style={{height: 1}}>
                <TableRow>
                    <StyledTableCell>Name Of PS
                    </StyledTableCell>
    
                    <StyledTableCell align="center">Under IPC Law
                    <StyledTableCell align="center">P</StyledTableCell>
                        <StyledTableCell align="center">D</StyledTableCell>
                        </StyledTableCell>
    
                    <StyledTableCell align="left">Under Local & Special Law            
                    <StyledTableCell align="right">P</StyledTableCell>
                        <StyledTableCell align="right">D</StyledTableCell>
                        </StyledTableCell>
    
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name} style={{height: 1}}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell>
                    <StyledTableCell align="center">{row.UIP}</StyledTableCell>
                    <StyledTableCell align="center">{row.UID}</StyledTableCell>
                    </StyledTableCell>
    
                    <StyledTableCell>
                    <StyledTableCell align="right">{row.UI1P}</StyledTableCell>
                    <StyledTableCell align="right">{row.UI1D}</StyledTableCell>
                    </StyledTableCell>
                    
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            );

    }

    else if(props.case_chosen === 'Challan Cases'){
        const rows = [
            createData2('Nangal', props.challan[0].overloading, props.challan[0].drunken, props.challan[0].overspeed, props.challan[0].withoutHelmet, props.challan[0].covid19, props.challan[0].others),
            createData2('Morinda',  props.challan[1].overloading, props.challan[1].drunken, props.challan[1].overspeed, props.challan[1].withoutHelmet, props.challan[1].covid19, props.challan[1].others),
            createData2('Sri Anandpur Sahib', props.challan[2].overloading, props.challan[2].drunken, props.challan[2].overspeed, props.challan[2].withoutHelmet, props.challan[2].covid19, props.challan[2].others),
            createData2('Rupnagar',  props.challan[3].overloading, props.challan[3].drunken, props.challan[3].overspeed, props.challan[3].withoutHelmet, props.challan[3].covid19, props.challan[3].others),
            createData2('Kiratpur Sahib', props.challan[4].overloading, props.challan[4].drunken, props.challan[4].overspeed, props.challan[4].withoutHelmet, props.challan[4].covid19, props.challan[4].others),
            createData2('Sri Chamkaur Sahib', props.challan[5].overloading, props.challan[5].drunken, props.challan[5].overspeed, props.challan[5].withoutHelmet, props.challan[5].covid19, props.challan[5].others),
            createData2('Sadar Rupnagar',  props.challan[6].overloading, props.challan[6].drunken, props.challan[6].overspeed, props.challan[6].withoutHelmet, props.challan[6].covid19, props.challan[6].others),
            createData2('Sadar Morinda',  props.challan[7].overloading, props.challan[7].drunken, props.challan[7].overspeed, props.challan[7].withoutHelmet, props.challan[7].covid19, props.challan[7].others),
            createData2('Nurpurbedi',  props.challan[8].overloading, props.challan[8].drunken, props.challan[8].overspeed, props.challan[8].withoutHelmet, props.challan[8].covid19, props.challan[8].others),
            createData2('Singh Bhagwantpur',   props.challan[9].overloading, props.challan[9].drunken, props.challan[9].overspeed, props.challan[9].withoutHelmet, props.challan[9].covid19, props.challan[9].others),
        ];  

        return (
            <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead style={{height: 1}}>
                <TableRow >
                    <StyledTableCell >PS </StyledTableCell>
                    <StyledTableCell align="right" style={{width: 200}}>OverLoad</StyledTableCell>
                    <StyledTableCell align="right" >Drunken Driving</StyledTableCell>
                    <StyledTableCell align="right" >Overspeed</StyledTableCell>
                    <StyledTableCell align="right" >Without Helmet</StyledTableCell>
                    <StyledTableCell align="right" >Covid19</StyledTableCell>
                    <StyledTableCell align="right" >Others</StyledTableCell>
    
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name} style={{height: 1}} >
                    <StyledTableCell component="th" scope="row" style={{width: 2000}}>{row.name} </StyledTableCell>
                    <StyledTableCell align="right" style={{width:"10px"}}>{row.over}</StyledTableCell>
                    <StyledTableCell align="right" >{row.drunk}</StyledTableCell>
                    <StyledTableCell align="right" >{row.ospeed}</StyledTableCell>
                    <StyledTableCell align="right" >{row.helmet}</StyledTableCell>
                    <StyledTableCell align="right" >{row.mask}</StyledTableCell>
                    <StyledTableCell align="right" >{row.others}</StyledTableCell>
                            
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            );

    }           
    
}