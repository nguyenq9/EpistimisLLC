import * as React from 'react';

import './ComprehensiveLaw.css';

export default function comprehensiveLaw({ law, editable }) {
    return (
        <div className="law">
            <h2 contentEditable={editable}>{law.lawName}</h2>
            <div className="law-info">
                <p>Acronym: {law.acronym}</p>
                <a href={law.reference} target="_blank" className="law-reference">Reference</a>
                <p>Status: {law.billStatus}</p>
                <p>Enacted: {law.inEffect}</p>
            </div>
            <p contentEditable={editable}>{law.description}</p>
        </div>
    );
}