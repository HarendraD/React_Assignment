import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#203239", color: theme.palette.common.white,
    }, [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    }, // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function CommonTable(props) {
    const { width, height, tblRows, dataList } = props;
    return (<TableContainer component={Paper} sx={{ height: { height } }}>
        <Table sx={{ width: width }} aria-label="customized table">
            <TableHead>
                <TableRow>
                    {tblRows.map((row) => (<StyledTableCell>{row}</StyledTableCell>))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tblRows.map((row) => (<StyledTableRow key={tblRows.name}>
                    <StyledTableCell component="th" scope="row">
                        {tblRows.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{tblRows.calories}</StyledTableCell>
                    <StyledTableCell align="right">{tblRows.fat}</StyledTableCell>
                    <StyledTableCell align="right">{tblRows.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{tblRows.protein}</StyledTableCell>
                    <StyledTableCell>
                        <Tooltip title="Edit">
                            <IconButton
                            // onClick={() => {}}
                            >
                                <EditIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton
                            // onClick={() => {}}
                            >
                                <DeleteIcon color="error" />
                            </IconButton>
                        </Tooltip>
                    </StyledTableCell>
                </StyledTableRow>))}

            </TableBody>
        </Table>
    </TableContainer>);
}
