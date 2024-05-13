import * as React from 'react';
import { useState } from 'react';

export default function comprehensiveLaw({ law }) {
    return (
        <div className="law">
            <h2 contentEditable={isEditable}>{law.lawName}</h2>
            <p contentEditable={isEditable}>{law.description}</p>
        </div>
    );
}