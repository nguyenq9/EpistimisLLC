import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import './OtherLaws.css';

function createData(lawName, type, description, reference) {
    return { lawName, type, description, reference };
}

export default function OtherLaws({ otherPrivacyLaws }) {

    const rows = otherPrivacyLaws.map((law) => {
        return createData(law.lawName, law.type, law.description, law.reference);
    });

    return (
        <TableContainer component={Paper} sx={{marginTop: 2}} className="law-table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="law-table-cell">Law Name</TableCell>
                        <TableCell className="law-table-cell">Type/Status</TableCell>
                        <TableCell className="law-table-cell">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.lawName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className="law-table-cell">
                                <a target="_blank" href={row.reference} style={{textDecoration: "underline"}}>{row.lawName} <OpenInNewIcon sx={{fontSize: 15}}/></a>
                            </TableCell>
                            <TableCell className="law-table-cell">{row.type}</TableCell>
                            <TableCell className="law-table-cell">{row.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}