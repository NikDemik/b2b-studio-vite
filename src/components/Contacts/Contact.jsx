import { useContactData } from '../../hooks/useContactData';
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
    const { contactData, loading, error } = useContactData();

    if (loading) {
        return (
            <div className="flex justify-between gap-8">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="flex-1 px-8 py-16 bg-white/80 backdrop-blur-[22px] shadow-300 rounded-xl text-center animate-pulse"
                    >
                        <div className="h-16 bg-gray-300 rounded mb-4"></div>
                        <div className="h-8 bg-gray-300 rounded"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className=" relative z-1 text-center text-red-600">Ошибка загрузки контактов</div>
        );
    }

    if (!contactData || !contactData.contacts) {
        return (
            <div className="relative z-1 container mx-auto px-4 py-12">
                <div className="text-center text-gray-600">
                    <p>Шаги не найдены</p>
                </div>
            </div>
        );
    }

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
                        {contactData.contacts.map(({ id, text }) => (
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
