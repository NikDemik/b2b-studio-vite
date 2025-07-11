import { useState } from 'react';
import { motion } from 'framer-motion';
import { DeadlineCard } from './DeadlineCard';
import { DiscussButton } from './DiscussButton';
import { StatCard } from './StatCard';
import { statsData } from '../../constants/index';
import RequestModal from '../Modal/RequestModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <section className="relative pt-72 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <div className="container">
                <div className=" relative z-2 mb-[90px]">
                    <h1 className=" mb-4 h1 text-p4 uppercase max-w-[872px] max-lg:max-w-388 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-4xl max-md:leading-12">
                        О компании
                    </h1>
                    <p className="text-[70px] leading-none max-lg:text-[60px] max-md:text-[28px] font-light mb-8 ">
                        B2B Studio – Дизайн и цифровые решения
                        <br />
                        для вашего бизнеса
                    </p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex w-full gap-[30px]"
                    >
                        {/* Первый блок - 50% ширины */}
                        <motion.div
                            variants={itemVariants}
                            className=" flex items-center w-full lg:w-1/2 min-h-[600px] lg:min-h-[800px] bg-main"
                        >
                            <img src="./images/logo/logo.svg" alt="Логотип B2B-Studio" />
                        </motion.div>

                        {/* Второй блок - 50% ширины с колонкой элементов */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8"
                        >
                            {/* Блок с тремя статистиками */}
                            <ul className="flex justify-between gap-8">
                                {statsData.map((stat, id) => (
                                    <StatCard key={id} value={stat.value} label={stat.label} />
                                ))}
                            </ul>

                            {/* Нижняя часть - прижата к низу */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-auto flex flex-col gap-6 lg:gap-8"
                            >
                                {/* Плашка с текстом */}
                                <DeadlineCard />
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
                <img src="/images/bg/hero.png" className=" max-lg:h-auto" alt="hero" />
            </div>
        </section>
    );
};

export default Hero;
