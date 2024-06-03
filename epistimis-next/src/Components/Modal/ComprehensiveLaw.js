import * as React from 'react';
import { Accordion, AccordionItem } from "../Accordion/Accordion";
import './ComprehensiveLaw.css';

export default function ComprehensiveLaw({ law }) {

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
            <div className="accordions-container">
                <Accordion>
                    <AccordionItem category="Applicability" info="">
                        {law.applicability.map((item, index) => (
                            <Accordion key={index}>
                                <AccordionItem category="Roles" info={item.roles} />
                                <AccordionItem category="Personal Data Categories" info={item.personalDataCategories} />
                                <AccordionItem category="Processing Purposes" info={item.processingPurposes} />
                                <AccordionItem category="Consent Required" info={item.consentRequired} />
                            </Accordion>
                        ))}
                    </AccordionItem>
                    <AccordionItem category="Individual Rights" info="">
                        {law.individualRights.map((right, index) => (
                            <div key={index}>
                                <p>{right.name}</p>
                                {right.reference.map((ref, refIndex) => (
                                    <a href={law.reference} target="_blank" className="law-reference" key={refIndex}>{ref}</a>
                                ))}
                            </div>
                        ))}
                    </AccordionItem>
                    <AccordionItem category="Business Obligations" info="">
                        {Object.entries(law.businessObligations).map(([key, obligation], index) => (
                            <div key={index}>
                                <p>{obligation.description}</p>
                                <a href={law.reference} target="_blank" className="law-reference">{obligation.reference}</a>
                            </div>
                        ))}
                    </AccordionItem>
                    <AccordionItem category="Scope" info="">
                        {law.scope.map((scopeItem, index) => (
                            <div key={index}>
                                {scopeItem.exemptions.map((exemption, exIndex) => (
                                    <div key={exIndex}>
                                        <p>{exemption.type}</p>
                                        <p>{exemption.description}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </AccordionItem>
                    <AccordionItem category="Enforcement" info="">
                        {law.enforcement.map((enforcementItem, index) => (
                            <div key={index}>
                                {Object.entries(enforcementItem).map(([key, value], subIndex) => (
                                    <div key={subIndex}>
                                        <p>{key}</p>
                                        {Array.isArray(value) ? value.map((val, valIndex) => (
                                            <p key={valIndex}>{val}</p>
                                        )) : <p>{value}</p>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </AccordionItem>
                    <AccordionItem category="Thresholds" info="">
                        {law.threshold.map((threshold, index) => (
                            <div key={index}>
                                <p>{threshold.type}</p>
                                <p>{threshold.description}</p>
                            </div>
                        ))}
                    </AccordionItem>
                </Accordion>
            </div>
            {/* Display the law object as a formatted JSON string */}
            <pre>{JSON.stringify(law, null, 2)}</pre>
        </div>
    );
}
