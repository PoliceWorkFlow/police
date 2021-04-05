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

  function createData(name, over, drunk, ospeed, helmet, mask, others) {
    return { name, over, drunk, ospeed, helmet, mask, others};
  }
  
  const rows = [
      createData('Nangal',              3,     0,      0,     2,      0,     8,  ),
      createData('City Morinda',        6,    0,     0,    0,      11,     7,  ),
      createData('Sri Anandpur Sahib',  0,     0,      0,     0,      5,      5,  ),
      createData('City Rupnagar',       4,    0,      0,     0,      0,     11,  ),
      createData('Kiratpur Sahib',      0,    0,     0,     13,      32,     17,  ),
      createData('Sri Chamkaru Sahib',  0,    0,      0,    10,      42,    15,  ),
      createData('Sadar Rupnagar',      0,     0,     0,     0,      15,     2,  ),
      createData('Sadar Morinda',       1,     0,      0,     4,      30,     2,  ),
      createData('Nupurbedi',           0,     0,     0,     3,      2,     1,  ),
      createData('Singh Bhagwantpur',   0,   0,     0,     17,      0,     0,  ),
      createData('District Traffic',    2,   0,     0,     58,      217,     131,  ),
      createData('Total',               6,  0,     0,    107,     354,    200, ),
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
            <StyledTableCell>Name of Police Station</StyledTableCell>
            <StyledTableCell align="right">over loading </StyledTableCell>
            <StyledTableCell align="right">Drunk</StyledTableCell>
            <StyledTableCell align="right">over speed</StyledTableCell>
            <StyledTableCell align="right">without helmet</StyledTableCell>
            <StyledTableCell align="right">without mask</StyledTableCell>
            <StyledTableCell align="right">others</StyledTableCell>
          </TableRow>
        </TableHead>
          <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.over}</StyledTableCell>
              <StyledTableCell align="right">{row.drunk}</StyledTableCell>
              <StyledTableCell align="right">{row.ospeed}</StyledTableCell>
              <StyledTableCell align="right">{row.helmet}</StyledTableCell>
              <StyledTableCell align="right">{row.mask}</StyledTableCell>
              <StyledTableCell align="right">{row.others}</StyledTableCell>
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
