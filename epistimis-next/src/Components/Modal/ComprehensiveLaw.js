import * as React from 'react';

export default function comprehensiveLaw({ law }) {
    return (
        <div className="law">
            <h3>{law.lawName}</h3>
        </div>
    );
}