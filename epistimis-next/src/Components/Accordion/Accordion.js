import React, { useRef, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

import './Accordion.css'

// const data = [
//     {
//         question: 'What are accordion components?',
//         answer: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.',
//     },
//     {
//         question: 'What are they used for?',
//         answer: 'They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.',
//     },
//     {
//         question: 'Accordion as a musical instrument',
//         answer: 'The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.',
//     },
//     {
//         question: 'Can I create an accordion component with a different framework?',
//         answer: 'Yes of course, it is very possible to create an accordion component with another framework.',
//     }
// ];

const AccordionItem = ({ category, info, isOpen, onClick, children }) => {
    const contentHeight = useRef()
    return (
        <div className="accordian-item-container" >
            <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
                <p className='question-content'>{category}</p>
                <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
            </button>

            <div ref={contentHeight} className="answer-container" style={
                isOpen
                    ? { height: contentHeight.current.scrollHeight }
                    : { height: "0px" }
            }>
                <p className="answer-content">{info}</p>
                {children}
            </div>
        </div>
    )
}

const Accordion = ({ data = [], children }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const allItems = [...data, ...React.Children.toArray(children)];

    return (
        <div id="accordian-container">
            {allItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    category={item.props.category}
                    info={item.props.info}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    )
};

export { Accordion, AccordionItem };