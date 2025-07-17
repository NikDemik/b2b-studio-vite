import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '../../constants/FAQ';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container-full relative z-2 mx-auto px-4 pb-12 md:pb-16">
            {/* <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Частые вопросы</h2> */}

            <div className="max-w-full mx-auto space-y-6">
                {faqItems.map((item, index) => (
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
                                <h3 className="text-xl font-medium">{item.question}</h3>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl"
                                >
                                    +
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
                                            <p>{item.answer}</p>
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
