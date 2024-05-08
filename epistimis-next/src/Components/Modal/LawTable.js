import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Modal.css'

function createData(lawName, type, description, reference) {
    return { lawName, type, description, reference };
}

export default function LawTable({ otherPrivacyLaws }) {

    const rows = otherPrivacyLaws.map((law) => {
        return createData(law.lawName, law.type, law.description, law.reference);
    });

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Law Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.lawName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <a target="_blank" href={row.reference}>{row.lawName}</a>
                            </TableCell>
                            <TableCell><textarea className="editable">{row.type}</textarea></TableCell>
                            <TableCell><textarea className="editable">{row.description}</textarea></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
