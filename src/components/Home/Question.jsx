import { Element } from 'react-scroll';
import Accordion from '../Accordion/Accordion';
import { faq } from '../../constants';

const Question = () => {
    return (
        <section className=" my-36">
            <Element name="question" className=" relative">
                <div className="container-full">
                    <div className=" flex items-center mb-[18px]">
                        <img src="/images/icons/advantage.png" alt="Icon" />
                        <h3 className=" ml-5 h3">Ответы на частые вопросы</h3>
                    </div>
                    <Accordion items={faq} />
                </div>
            </Element>
        </section>
    );
};

export default Question;
