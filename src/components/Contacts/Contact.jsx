import { contacts } from '../../constants';
import { CheckIcon } from '../icons/CheckIcon';
import YandexMap from '../YandexMap';
import { motion } from 'framer-motion';
import {
    ContainerAnimation,
    ItemAnimation,
    viewportSettings,
    listItemAnimation,
} from '../../constants/animations';

const Contact = () => {
    return (
        <motion.section
            variants={ContainerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className=" relative my-24 z-2"
        >
            <div className="container-full">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={ItemAnimation}
                    viewport={viewportSettings}
                    className=" flex items-center mb-[36px]"
                >
                    <img src="/images/icons/advantage.png" alt="Icon" />
                    <h3 className=" ml-5 h3">Контакты</h3>
                </motion.div>
                <div className="mb-[65px]">
                    <ul>
                        {contacts.map(({ id, text }) => (
                            <motion.li
                                variants={listItemAnimation}
                                key={id}
                                className=" flex items-center gap-8 body-1 [&:not(:last-child)]:mb-8"
                            >
                                <CheckIcon />
                                {text}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <motion.div
                    variants={ItemAnimation}
                    className=" max-w-[1528px] min-h-[100%] rounded-[24px] overflow-hidden"
                >
                    <YandexMap />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
