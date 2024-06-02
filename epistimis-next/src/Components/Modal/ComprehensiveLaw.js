import * as React from 'react';
import { Accordion, AccordionItem } from "../Accordion/Accordion";
import './ComprehensiveLaw.css';

export default function ComprehensiveLaw({ law }) {

    // Destructure the law object into individual variables
    const { lawName, acronym, reference, billStatus, inEffect, description, applicability } = law;
    const {roles, personalDataCategories, processingPurposes ,consent} = applicability;
    return (
        <div className="law">
            <h2>{lawName}</h2>
            <div className="law-info">
                <p>Acronym: {law.acronym}</p>
                <a href={law.reference} target="_blank" className="law-reference">Reference</a>
                <p>Status: {law.billStatus}</p>
                <p>Enacted: {law.inEffect}</p>
            </div>
            <p>{law.description}</p>
            <div className="accordions-container">
                <Accordion>
                    <AccordionItem category="Applicability" info="">
                        <Accordion>
                            <AccordionItem category="Roles" info={["businesses", "processor", "controller"]} />
                            <AccordionItem category="Personal Data Categories" info={personalDataCategories} />
                            <AccordionItem category="Processing Purposes" info={law.applicability.processingPurposes} />
                            <AccordionItem category="Consent Required" info={law.applicability.consent} />
                        </Accordion>
                    </AccordionItem>
                    <AccordionItem category="Individual Rights" info="Individual Rights information" />
                    <AccordionItem category="Business Obligations" info="Business Obligations information" />
                    <AccordionItem category="Scope" info="Scope information" />
                    <AccordionItem category="Enforcement" info="Enforcement information" />
                    <AccordionItem category="Thresholds" info="Thresholds information" />
                </Accordion>
            </div>
        </div>
    );
}

