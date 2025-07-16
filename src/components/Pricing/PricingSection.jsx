import { useState } from 'react';
import { motion } from 'framer-motion';
import PricingBtn from './PricingBtn';
import { pricingData } from '../../constants/pricing';
import RequestModal from '../Modal/RequestModal';

const PricingSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className=" relative container-full z-2 space-y-16 md:space-y-24">
            {pricingData.map((item) => (
                <div key={item.id} className="group">
                    {/* Верхний блок с категорией */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[480px] h-[140px] bg-main p-6 flex justify-center items-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">{item.category}</h2>
                    </motion.div>

                    {/* Нижний блок с контентом */}
                    <div className="flex flex-col bg-main md:flex-row gap-8 mt-6">
                        {/* Левая часть - изображение */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="md:w-1/2 h-[400px] md:h-[700px] rounded-l-3xl overflow-hidden relative"
                        >
                            <img
                                src={item.image}
                                alt={item.category}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>

                        {/* Правая часть - список цен */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className=" relative flex flex-col justify-between  md:w-1/2  p-6"
                        >
                            <ul className="space-y-4 text-xl">
                                {item.items.map((priceItem, index) => (
                                    <li
                                        key={index}
                                        className={
                                            priceItem.startsWith('○') ? 'pl-6 text-gray-600' : ''
                                        }
                                    >
                                        {priceItem}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-center">
                                <PricingBtn
                                    onClick={() => {
                                        setIsModalOpen(true);
                                    }}
                                >
                                    обсудить проект
                                </PricingBtn>
                                <RequestModal
                                    isOpen={isModalOpen}
                                    onClose={() => setIsModalOpen(false)}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PricingSection;
