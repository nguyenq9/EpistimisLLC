import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import './Modal.css'

import ComprehensiveLaw from './ComprehensiveLaw.js';
import OtherLaws from './OtherLaws.js';

export default function LawTabs({ comprehensiveLaws, otherPrivacyLaws }) {
    const [ activeTab, setActiveTab ] = useState(0);

    return (
        <div>
            <ButtonGroup variant="contained" aria-label="contained primary button group">
                {comprehensiveLaws.map((law, lawIndex) => (
                    <Button key={lawIndex} onClick={() => setActiveTab(lawIndex)}>
                        {law.acronym ? law.acronym : law.lawName}
                    </Button>
                ))}
                {otherPrivacyLaws && (
                    <Button onClick={() => setActiveTab(comprehensiveLaws.length)}>
                        Other Laws
                    </Button>
                )}
            </ButtonGroup>
            <div className="law-container">
                {comprehensiveLaws.map((law, lawIndex) => (
                    <div key={lawIndex} style={{ display: activeTab === lawIndex ? 'block' : 'none' }}>
                        <ComprehensiveLaw law={law}/>
                    </div>
                ))}
                {otherPrivacyLaws && (
                    <div style={{ display: activeTab === comprehensiveLaws.length ? 'block' : 'none' }}>
                        <OtherLaws otherPrivacyLaws={otherPrivacyLaws}/>
                    </div>
                )}
            </div>
        </div>
    )

    if (!comprehensive) {
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
    } else {
        return (
            <div className="law">
                <h3>{comprehensiveLaw.lawName}</h3>
            </div>
        );
    }
}
