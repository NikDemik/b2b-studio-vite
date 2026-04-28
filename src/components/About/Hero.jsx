import { useState } from 'react';
import { motion } from 'framer-motion';
import { DeadlineCard } from './DeadlineCard';
import { DiscussButton } from './DiscussButton';
import { StatCard } from './StatCard';
import { useAboutData } from '../../hooks/useAboutData';
import RequestModal from '../Modal/RequestModal';
import { ContainerAnimation, ItemAnimation } from '../../constants/animations';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { aboutData, loading, error } = useAboutData();

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
        return <div className="text-center text-red-600">Ошибка загрузки статистики</div>;
    }

    if (!aboutData || !aboutData.statsData) {
        return null;
    }

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={ContainerAnimation}
            className="relative pt-72 pb-14 max-lg:pt-52 max-lg:pb-10 max-md:pt-36 max-md:pb-6"
        >
            <div className="container">
                <div className=" relative z-2 mb-[90px]">
                    <h1 className=" mb-4 h1 text-p4 uppercase max-w-[872px] max-lg:max-w-388 max-lg:mb-7 max-md:mb-4">
                        О компании
                    </h1>
                    <h2 className="h2 mb-8">
                        B2B Studio – Дизайн и цифровые решения
                        <br />
                        для вашего бизнеса
                    </h2>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={ContainerAnimation}
                        className="flex w-full gap-[30px]"
                    >
                        {/* Первый блок - 50% ширины */}
                        <motion.div
                            variants={ItemAnimation}
                            className=" flex items-center w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] bg-main"
                        >
                            <img src="./images/logo/logo.svg" alt="Логотип B2B-Studio" />
                        </motion.div>

                        {/* Второй блок - 50% ширины с колонкой элементов */}
                        <motion.div
                            variants={ItemAnimation}
                            className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8"
                        >
                            {/* Блок с тремя статистиками */}
                            <ul className="flex justify-between gap-8">
                                {aboutData?.statsData.map((item, index) => (
                                    <StatCard key={index} value={item.value} label={item.label} />
                                ))}
                            </ul>

                            {/* Нижняя часть - прижата к низу */}
                            <motion.div
                                variants={ItemAnimation}
                                className="mt-auto flex flex-col gap-6 lg:gap-8"
                            >
                                {/* Плашка с текстом */}
                                <DeadlineCard />
                                {/* Кнопка */}
                                <DiscussButton onClick={() => setIsModalOpen(true)} />
                                <RequestModal
                                    isOpen={isModalOpen}
                                    onClose={() => setIsModalOpen(false)}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Верхнее изображение */}
                <motion.div
                    className="absolute top-[30%] z-1 left-[80%] w-[180px] pointer-events-none"
                    animate={{
                        y: [-10, 300, -10],
                        x: [0, 15, 0],
                        scale: [1, 1.03, 1], // Плавное приближение-отдаление
                        rotateZ: [-0.5, 360, -0.5], // Легкий наклон
                    }}
                    transition={{
                        duration: 120,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <img
                        src="/images/bg/item.png"
                        className="max-lg:h-auto -rotate-[51deg]"
                        alt="Картинка фона"
                    />
                </motion.div>

                {/* Нижнее изображение */}
                <motion.div
                    className="absolute top-[55%] z-1 left-[60%] w-[400px] pointer-events-none"
                    animate={{
                        y: [-10, 10, -10],
                        x: [0, 40, 0],
                        scale: [1, 1.03, 1],
                        rotateZ: [-0.5, 3, -0.5], // Легкий наклон
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                >
                    <img
                        src="/images/bg/item.png"
                        className="max-lg:h-auto -rotate-[38deg]"
                        alt="Картинка фона"
                    />
                </motion.div>
            </div>
            <div className=" absolute -top-0 w-full pointer-events-none">
                <img src="/images/bg/hero.jpg" className=" max-lg:h-auto" alt="hero" />
            </div>
        </motion.section>
    );
};

export default Hero;
