import { useState } from 'react';
import Button from '../Button';
import { motion } from 'framer-motion';
import RequestModal from '../Modal/RequestModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative pt-60 pb-10 max-lg:pt-52 max-lg:pb-10 max-md:pt-36 max-md:pb-10">
            <div className="container">
                <div className="relative z-2 flex items-center justify-between">
                    <h1 className=" mb-4 h1 text-p4 uppercase max-w-[872px] max-lg:max-w-388 max-lg:mb-7 max-md:mb-4">
                        Портфолио
                    </h1>
                    {/* <p className="h2 mb-8 ">Не просто красиво — эффективно</p> */}
                    <div className=" flex max-md:justify-center">
                        <Button onClick={() => setIsModalOpen(true)}>обсудить проект</Button>
                        <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </div>
                </div>

                {/* Левое изображение с комплексной анимацией */}
                <motion.div
                    className="absolute top-[81%] z-1 left-[10%] w-[190px] pointer-events-none"
                    animate={{
                        y: [-10, 10, -10],
                        x: [0, 5, 0],
                        scale: [1, 1.03, 1], // Плавное приближение-отдаление
                        rotate: [15, 50, 15],
                    }}
                    transition={{
                        duration: 8,
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
                        y: [-15, 15, -15],
                        x: [0, 8, 0],
                        scale: [1, 1.05, 1], // Более заметное изменение масштаба
                    }}
                    transition={{
                        duration: 20,
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
