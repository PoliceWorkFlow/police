import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Name of Police Station', minWidth: 170 },
  { id: 'code', label: 'UI', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];
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

  function createData(name, UIP,UID, UNP, UND, UI1P, UI1D, UI6P, UI6D, UI3P, UI3D, UI31P, UI31D, LUP) {
    return { name, UIP,UID, UNP, UND, UI1P, UI1D, UI6P, UI6D, UI3P, UI3D, UI31P, UI31D, LUP};
  }
  
  const rows = [
    createData('Nangal',              95,     1,      32,     0,      12,     0,  9,      0,  18,     1,  56,     0,  88),
    createData('City Morinda',        120,    19,     145,    0,      28,     3,  30,     12, 35,     2,  27,     7,  88),
    createData('Sri Anandpur Sahib',  72,     0,      28,     0,      7,      0,  22,     0,  21,     0,  25,     0,  88),
    createData('City Rupnagar',       130,    7,      81,     0,      21,     0,  35,     1,  41,     4,  34,     1,  88),
    createData('Kiratpur Sahib',      128,    17,     99,     1,      5,      3,  33,     5,  40,     7,  50,     2,  88),
    createData('Sri Chamkaru Sahib',  273,    9,      146,    0,      102,    2,  93,     3,  47,     2,  31,     31, 88),
    createData('Sadar Rupnagar',      70,     12,     62,     2,      15,     1,  19,     1,  17,     6,  19,     5,  88),
    createData('Sadar Morinda',       78,     2,      77,     1,      12,     2,  18,     0,  27,     0,  21,     0,  88),
    createData('Nupurbedi',           95,     14,     26,     8,      27,     4,  31,     5,  19,     3,  26,     2,  88),
    createData('Singh Bhagwantpur',   151,   12,     73,     0,      28,     3,  67,     4,  27,     3,  29,     2,  88),
    createData('Total',               1117,  92,     737,    12,     245,    18, 348,    31, 274,    27, 262,    50, 88),
  ];
  
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
            <StyledTableCell>Name Of Police Station
            </StyledTableCell>

            <StyledTableCell align="right">Under Investigation
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="left">D</StyledTableCell>
                </StyledTableCell>

            <StyledTableCell align="right">Untraced/Cancelled
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="right">D</StyledTableCell>
                </StyledTableCell>

            <StyledTableCell align="right">UI over 1 year            
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="right">D</StyledTableCell>
                </StyledTableCell>

            <StyledTableCell align="right">UI Over 6 month
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="right">D</StyledTableCell>
                </StyledTableCell>

                <StyledTableCell align="right">UI Over 3 month
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="right">D</StyledTableCell>
                </StyledTableCell>

                <StyledTableCell align="right">UI less than 3 month 
            <StyledTableCell align="right">P</StyledTableCell>
                <StyledTableCell align="right">D</StyledTableCell>
                </StyledTableCell>

                <StyledTableCell align="right">Last Update
                </StyledTableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
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

              
              <StyledTableCell>
              <StyledTableCell align="right">{row.LUP}</StyledTableCell>
              </StyledTableCell>
             

            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
