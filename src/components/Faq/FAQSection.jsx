import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFaqData } from '../../hooks/useFaqData';
import { Plus } from '../icons/Plus';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const { faqData, loading, error } = useFaqData();

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Загрузка вопросов...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="text-center text-red-600">
                    <p>Ошибка загрузки данных: {error}</p>
                    <p className="text-sm text-gray-600 mt-2">Попробуйте обновить страницу</p>
                </div>
            </div>
        );
    }

    if (!faqData || !faqData.faqItems || faqData.faqItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="text-center text-gray-600">
                    <p>Вопросы не найдены</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container-full relative z-2 mx-auto px-4 pb-12 md:pb-16">
            {/* <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Частые вопросы</h2> */}

            <div className="max-w-full mx-auto space-y-6">
                {faqData.faqItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                        <motion.div
                            className={`flex-1 ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5 }}
                        >
                            <div
                                className="bg-main p-6 cursor-pointer flex justify-between items-center"
                                onClick={() => toggleAnswer(index)}
                            >
                                <h3 className=" body-1">{item.question}</h3>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-3xl"
                                >
                                    <Plus size={20} />
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="bg-main p-6 mt-6">
                                            <p className=" body-1">{item.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Пустой блок для шахматного порядка */}
                        <div className="flex-1 hidden md:block"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
