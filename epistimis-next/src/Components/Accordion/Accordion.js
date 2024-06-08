import React, { useRef, useState, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import './Accordion.css';

const AccordionItem = ({ category, info, isOpen, onClick, children }) => {
    const contentHeight = useRef();
    const [contentVisible, setContentVisible] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setContentVisible(true);
            //contentHeight.current.style.height = `${contentHeight.current.scrollHeight}px`;
        } else {
            //contentHeight.current.style.height = '0px';
            setContentVisible(false);
        }
    }, [isOpen]);

    const renderInfoContent = () => {
        if (!children && (!info || (Array.isArray(info) && info.length === 0) || (typeof info === 'string' && info.trim() === '') || (typeof info === 'string' && info.trim() === '()'))) {
            return <p className="answer-content">No Data Available</p>;
        } else if (Array.isArray(info)) {
            return (
                <ul className="answer-list">
                    {info.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        } else {
            return <p className="answer-content">{info}</p>;
        }
    };

    // Render only the category if it's "Consent Required"
    if (category === "Consent Required") {
        return (
            <div className="accordion-item-container">
                <button className={`question-container`} onClick={onClick}>
                    <p className='question-content'>{category}</p>
                    {renderInfoContent()}
                </button>
            </div>
        );
    }

    return (
        <div className="accordion-item-container">
            <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick}>
                <p className='question-content'>{category}</p>
                <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
            </button>
            <div
                ref={contentHeight}
                className={`answer-container ${isOpen ? 'active' : ''}`}
                style={contentVisible ? { height: 'auto' } : { height: '0px', overflow: 'hidden' }}
            >
                <div>
                    {renderInfoContent()}
                    {children}
                </div>
            </div>
        </div>
    );
};

const Accordion = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const allItems = React.Children.toArray(children);

    return (
        <div className="accordion-container">
            {allItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    category={item.props.category}
                    info={item.props.info}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                >
                    {item.props.children}
                </AccordionItem>
            ))}
        </div>
    );
};


export { Accordion, AccordionItem };

