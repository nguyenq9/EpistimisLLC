import * as React from 'react';
import { Accordion, AccordionItem } from "../Accordion/Accordion";

import './ComprehensiveLaw.css';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Stack from "@mui/material/Stack";

export default function ComprehensiveLaw({ law }) {

    return (
        <div className="law">
            <Stack alignItems="center" spacing={2}>
                <h4 style={{ fontSize: "1.5em", textAlign: "center" }} id="law-name" className="reference"><a href={law.reference} target="_blank">{law.lawName}<OpenInNewIcon /></a></h4>
                <Stack direction="row" spacing={5}>
                    <p>Status: {law.billStatus}</p>
                    <p>Enacted: {law.inEffect}</p>
                </Stack>
                <p style={{ textAlign: "center", width: "70%" }}>{law.description}</p>
            </Stack>
            
            <div className="accordions-container">
                <Accordion>
                    <AccordionItem category="Applicability" info="">
                        <Accordion>
                            <AccordionItem category="Roles" info={law.applicability.roles} />
                            <AccordionItem category="Personal Data Categories" info={law.applicability.personalDataCategories} />
                            <AccordionItem category="Processing Purposes" info={law.applicability.processingPurposes} />
                            <AccordionItem category="Consent Required" info={law.applicability.consentRequired} />
                        </Accordion>
                    </AccordionItem>
                    <AccordionItem category="Individual Rights" info="">
                        <ul className='answer-content'>
                            {law.individualRights.map((right, index) => (
                                <li key={index}>
                                    {right.name} - <a href={law.reference} target="_blank" className="reference">{right.reference}</a>
                                </li>
                            ))}
                        </ul>
                    </AccordionItem>
                    <AccordionItem category="Business Obligations" info="">
                        <Accordion>
                            <AccordionItem category="Notice" info={`${law.businessObligations.notice.description} (${law.businessObligations.notice.reference})`} />
                            <AccordionItem category="Lawful Basis" info={`${law.businessObligations.lawfulBasis.description} (${law.businessObligations.lawfulBasis.reference})`} />
                            <AccordionItem category="Purpose Limitation" info={`${law.businessObligations.purposeLimitation.description} (${law.businessObligations.purposeLimitation.reference})`} />
                            <AccordionItem category="Data Minimization" info={`${law.businessObligations.dataMinimization.description} (${law.businessObligations.dataMinimization.reference})`} />
                            <AccordionItem category="Security Requirements" info={`${law.businessObligations.securityReqs.description} (${law.businessObligations.securityReqs.reference})`} />
                            <AccordionItem category="Privacy by Design" info={`${law.businessObligations.privacyByDesign.description} (${law.businessObligations.privacyByDesign.reference})`} />
                            <AccordionItem category="Processor Requirements" info={`${law.businessObligations.processorReqs.description} (${law.businessObligations.processorReqs.reference})`} />
                            <AccordionItem category="Record Keeper" info={`${law.businessObligations.recordKeeper.description} (${law.businessObligations.recordKeeper.reference})`} />
                            <AccordionItem category="Risk Impact" info={`${law.businessObligations.riskImpact.description} (${law.businessObligations.riskImpact.reference})`} />
                            <AccordionItem category="Breach Notification" info={`${law.businessObligations.breachNotification.description} (${law.businessObligations.breachNotification.reference})`} />
                            <AccordionItem category="Registration" info={`${law.businessObligations.registration.description} (${law.businessObligations.registration.reference})`} />
                            <AccordionItem category="Data Protection Officer" info={`${law.businessObligations.dpo.description} (${law.businessObligations.dpo.reference})`} />
                            <AccordionItem category="Data Transfer" info={`${law.businessObligations.dataTransfer.description} (${law.businessObligations.dataTransfer.reference})`} />
                        </Accordion>
                    </AccordionItem>
                    <AccordionItem category="Scope" info="">
                        {law.scope.exemptions.map((exemption, index) => (
                            <li key={index} className='answer-content'>
                                {exemption.type} : <p>{exemption.description}</p>
                            </li>
                        ))}
                    </AccordionItem>
                    <AccordionItem category="Enforcement" info="">
                        <Accordion>
                            <AccordionItem category="Enforcement Authority" info={law.enforcement.enforcementAuthority} />
                            <AccordionItem category="Rulemaking Authority" info={law.enforcement.rulemakingAuthority} />
                            <AccordionItem category="Fining Authority" info={law.enforcement.finingAuthority} />
                            <AccordionItem category="Penalities" info={law.enforcement.penalties} />
                            <AccordionItem category="Personal Liability" info={law.enforcement.personalLiability} />
                            <AccordionItem category="Private Right of Action" info={law.enforcement.privateRightOfAction} />
                        </Accordion>
                    </AccordionItem>
                    <AccordionItem category="Thresholds" info="">
                        <ul className='answer-content'>
                            {law.threshold.map((threshold, index) => (
                                <li key={index}>
                                    {threshold.type} : <p>{threshold.description}</p>
                                </li>
                            ))}
                        </ul>
                    </AccordionItem>
                </Accordion>
            </div>
            {/* Display the law object as a formatted JSON string <pre>{JSON.stringify(law, null, 2)}</pre>*/}
        </div>
    );
}

