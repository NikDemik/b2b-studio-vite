import { motion } from 'framer-motion';
import Button from '../Button';
import { pricingData } from '../../constants/pricing';

const PricingSection = () => {
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
                            className="md:w-1/2 h-[400px] md:h-[700px] rounded-xl overflow-hidden relative"
                        >
                            <img
                                src={item.image}
                                alt={item.category}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                <Button className="mx-auto">Обсудить проект</Button>
                            </div>
                        </motion.div>

                        {/* Правая часть - список цен */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="md:w-1/2"
                        >
                            <ul className="space-y-4 text-lg">
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
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PricingSection;
