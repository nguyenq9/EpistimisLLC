import React, { useRef, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

import './Accordion.css'

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