import * as React from 'react';
import { Accordion, AccordionItem } from "../Accordion/Accordion";

import './ComprehensiveLaw.css';

export default function comprehensiveLaw({ law }) {
    return (
        <div className="law">
            <h2>{law.lawName}</h2>
            <div className="law-info">
                <p>Acronym: {law.acronym}</p>
                <a href={law.reference} target="_blank" className="law-reference">Reference</a>
                <p>Status: {law.billStatus}</p>
                <p>Enacted: {law.inEffect}</p>
            </div>
            <p>{law.description}</p>
            <Accordion>
                <AccordionItem category="Applicability" info="">
                    
                </AccordionItem>
                <AccordionItem category="Individual Rights" info=""/>
                <AccordionItem category="Business Obligations" info=""/>
                <AccordionItem category="Scope" info=""/>
                <AccordionItem category="Enforcement" info=""/>
                <AccordionItem category="Thresholds" info=""/>
            </Accordion>
        </div>
    );
}