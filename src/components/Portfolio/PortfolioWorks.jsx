import { useState } from 'react';
import { motion } from 'framer-motion';
import { works } from '../../constants/index';
import Button from '../Button';
import RequestModal from '../Modal/RequestModal';

const PortfolioWorks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className=" container-full space-y-8 md:space-y-12 mb-8">
            {works.map((work) => (
                <div key={work.id} className="group">
                    {/* Верхний блок с категорией */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[480px] h-[140px] bg-main p-6 flex justify-center items-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">{work.category}</h2>
                    </motion.div>

                    {/* Нижний блок с проектом */}
                    <div className="relative h-[600px] md:h-[700px] rounded-3xl overflow-hidden mt-4">
                        {/* Фоновое изображение */}
                        <img
                            src={work.image}
                            alt={work.project}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Наложение с информацией */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8 flex flex-col justify-between">
                            {/* Название проекта */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 max-w-max"
                            >
                                <h5 className=" h5">{work.project}</h5>
                            </motion.div>

                            {/* Особенности проекта */}
                            <div className="flex flex-wrap gap-3">
                                {work.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                        className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2"
                                    >
                                        <span className=" h5 ">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Button onClick={() => setIsModalOpen(true)}>Обсудить проект</Button>
            <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default PortfolioWorks;
