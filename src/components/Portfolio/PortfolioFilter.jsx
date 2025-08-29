import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import PortfolioCard from './PortfolioCard';

const PortfolioFilter = () => {
    const [activeCategory, setActiveCategory] = useState('Все');
    const { portfolioData, loading, error } = usePortfolioData();

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Загрузка портфолио...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <p className="text-red-600">Ошибка загрузки: {error}</p>
            </div>
        );
    }

    const { categories, works } = portfolioData;

    const filteredWorks =
        activeCategory === 'Все' ? works : works.filter((work) => work.category === activeCategory);

    // Функция для группировки работ по 5 элементам (2 строки)
    const groupWorks = (worksArray) => {
        const groups = [];
        for (let i = 0; i < worksArray.length; i += 5) {
            groups.push(worksArray.slice(i, i + 5));
        }
        return groups;
    };

    const workGroups = groupWorks(filteredWorks);

    return (
        <div className="container-full relative z-1 mx-auto px-4 py-12">
            {/* Счетчик работ */}
            {/* <div className="text-center mb-6">
                <p className="text-gray-600">
                    Показано {filteredWorks.length} из {works.length} работ
                </p>
            </div> */}

            {/* Фильтры категорий */}
            <div className="flex flex-nowrap flex-row justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`w-full px-6 py-3 rounded-full text-xl font-medium transition-all ${
                            activeCategory === category
                                ? 'bg-blue-600 text-white shadow-100'
                                : 'bg-white/60 text-gray-700 hover:bg-gray-100 backdrop-blur-sm shadow-100'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Сетка с правильным паттерном */}
            <div className="space-y-4">
                <AnimatePresence>
                    {workGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="flex flex-col space-y-4">
                            {/* Первая строка: 50% + 25% + 25% */}
                            <div className="flex gap-4">
                                {group[0] && (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-[50%]"
                                    >
                                        <PortfolioCard work={group[0]} isWide={true} />
                                    </motion.div>
                                )}

                                {group[1] && (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        className="w-[25%]"
                                    >
                                        <PortfolioCard work={group[1]} />
                                    </motion.div>
                                )}

                                {group[2] && (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="w-[25%]"
                                    >
                                        <PortfolioCard work={group[2]} />
                                    </motion.div>
                                )}
                            </div>

                            {/* Вторая строка: 30% + 70% */}
                            <div className="flex gap-4">
                                {group[3] && (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                        className="w-[30%]"
                                    >
                                        <PortfolioCard work={group[3]} />
                                    </motion.div>
                                )}

                                {group[4] && (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                        className="w-[70%]"
                                    >
                                        <PortfolioCard work={group[4]} isWide={true} />
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Сообщение если нет работ */}
            {filteredWorks.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500">В этой категории пока нет работ</p>
                </div>
            )}
        </div>
    );
};

export default PortfolioFilter;
