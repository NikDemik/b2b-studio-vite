import { useState } from 'react';
import './Accordion.css';
import { Plus } from '../icons/Plus';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="accordion-item bg2 backdrop-blur-[22px] rounded-[25px] shadow-100 "
                >
                    <div className="accordion-question" onClick={() => toggleAccordion(index)}>
                        <h3 className=" body-1">{item.question}</h3>
                        <span className={`accordion-icon ${activeIndex === index ? 'active' : ''}`}>
                            <Plus />
                        </span>
                    </div>
                    <div className={`accordion-answer ${activeIndex === index ? 'active' : ''}`}>
                        <p className=" text-[22px]">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
