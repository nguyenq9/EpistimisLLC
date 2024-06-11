import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import './Modal.css'

import ComprehensiveLaw from './ComprehensiveLaw.js';
import OtherLaws from './OtherLaws.js';

export default function LawTabs({ comprehensiveLaws, otherPrivacyLaws }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <ButtonGroup variant="contained" aria-label="contained primary button group" color="buttons" sx={{width: '100%'}} fullWidth="true">
                {comprehensiveLaws.map((law, lawIndex) => (
                    <Button key={lawIndex} onClick={() => setActiveTab(lawIndex)} className="law-tab-button">
                        {law.acronym ? law.acronym : law.lawName}
                    </Button>
                ))}
                {otherPrivacyLaws && (
                    <Button onClick={() => setActiveTab(comprehensiveLaws.length)} className="law-tab-button">
                        Other Laws
                    </Button>
                )}
            </ButtonGroup>
            <div className="law-container">
                {comprehensiveLaws.map((law, lawIndex) => (
                    <div key={lawIndex} style={{ display: activeTab === lawIndex ? 'block' : 'none' }}>
                        <ComprehensiveLaw law={law} />
                    </div>
                ))}
                {otherPrivacyLaws && (
                    <div style={{ display: activeTab === comprehensiveLaws.length ? 'block' : 'none' }}>
                        <OtherLaws otherPrivacyLaws={otherPrivacyLaws} />
                    </div>
                )}
            </div>
        </div>
    )
}
