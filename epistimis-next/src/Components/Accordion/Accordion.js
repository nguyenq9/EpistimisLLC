import React, { useRef, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import './Accordion.css';

const AccordionItem = ({ category, info, isOpen, onClick, children }) => {
    const contentHeight = useRef();

    const renderInfoContent = () => {
        if (Array.isArray(info)) {
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

    return (
        <div className="accordion-item-container">
            <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick}>
                <p className='question-content'>{category}</p>
                <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} />
            </button>
            <div
                ref={contentHeight}
                className="answer-container"
                style={isOpen ? { height: contentHeight.current.scrollHeight } : { height: "0px" }}
            >
                {renderInfoContent()}
                {children}
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
        <div id="accordion-container">
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
