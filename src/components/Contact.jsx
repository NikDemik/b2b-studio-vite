import { Element } from 'react-scroll';
import { contacts } from '../constants';
import { CheckIcon } from './CheckIcon';
import YandexMap from './YandexMap';

const Contact = () => {
    return (
        <section className=" my-36">
            <Element name="контакты" className=" relative">
                <div className="container-full">
                    <div className=" flex items-center mb-[36px]">
                        <img src="/images/advantage.png" alt="Icon" />
                        <h3 className=" ml-5 h3">Контакты</h3>
                    </div>
                    <div className="mb-[65px]">
                        <ul>
                            {contacts.map(({ id, text }) => (
                                <li
                                    key={id}
                                    className=" flex items-center gap-8 body-1 max-lg:body-2 [&:not(:last-child)]:mb-8"
                                >
                                    <CheckIcon />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=" max-w-[1528px] min-h-[100%] rounded-[24px] overflow-hidden">
                        <YandexMap />
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Contact;
