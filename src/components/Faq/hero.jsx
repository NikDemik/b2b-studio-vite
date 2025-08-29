import { useState } from 'react';
import Button from '../Button';
import { motion } from 'framer-motion';
import RequestModal from '../Modal/RequestModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative pt-72 max-lg:pt-52 max-md:pt-36 ">
            <div className="container">
                <div className=" relative z-2 mb-[90px]">
                    <h1 className=" mb-4 h1 text-p4 uppercase max-w-[1000px] max-lg:max-w-388 max-lg:mb-7 max-md:mb-4">
                        ВОПРОС-ОТВЕТ
                    </h1>
                    {/* <p className="h2 mb-8 ">инвестиции в ваш бренд</p> */}
                    {/* <div className=" flex max-md:justify-center">
                        <Button onClick={() => setIsModalOpen(true)}>обсудить проект</Button>
                        <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </div> */}
                </div>

                {/* Левое изображение с комплексной анимацией */}
                <motion.div
                    className="absolute top-[81%] z-1 left-[10%] w-[190px] pointer-events-none"
                    animate={{
                        y: [-10, 115, -10],
                        x: [0, 5, 0],
                        scale: [0.9, 1.4, 0.9], // Плавное приближение-отдаление
                        rotate: [15, 240, 15],
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <img src="/images/bg/item.png" className="max-lg:h-auto" alt="hero" />
                </motion.div>

                {/* Правое изображение с анимацией */}
                <motion.div
                    className="absolute top-[40%] z-1 left-[66%] w-[470px] pointer-events-none"
                    animate={{
                        y: [0, 150, 0],
                        x: [0, 80, 0],
                        scale: [1, 0.6, 1], // Более заметное изменение масштаба
                        rotate: [90, 60, 90],
                    }}
                    transition={{
                        duration: 80,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 3,
                    }}
                >
                    <img src="/images/bg/item.png" className="max-lg:h-auto" alt="hero" />
                </motion.div>
            </div>

            {/* Фоновое изображение */}
            <div className=" absolute -top-0 w-full pointer-events-none">
                <img src="/images/bg/hero.jpg" className=" max-lg:h-auto" alt="hero" />
            </div>
        </section>
    );
};

export default Hero;
