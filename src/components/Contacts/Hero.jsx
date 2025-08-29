import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import RequestModal from '../Modal/RequestModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative pt-72 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <div className="container">
                <div className=" relative z-2 mb-[90px]">
                    <h1 className=" mb-4 h1 text-p4 uppercase max-w-[872px] max-lg:max-w-388 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-4xl max-md:leading-12">
                        Контакты
                    </h1>
                    <p className="text-[70px] leading-none max-lg:text-[60px] max-md:text-[28px] font-light mb-8 ">
                        Оставьте заявку и мы обязательно
                        <br /> с вами свяжемся
                    </p>
                    <div className=" flex max-md:justify-center">
                        <Button onClick={() => setIsModalOpen(true)}>обсудить проект</Button>
                        <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </div>
                </div>

                {/* Левое изображение */}
                <motion.div
                    className="absolute top-[60%] z-1 left-[52%] w-[304px] pointer-events-none"
                    animate={{
                        y: [-10, 10, -10],
                        x: [0, 5, 0],
                        scale: [1, 1.03, 1], // Плавное приближение-отдаление
                        rotateZ: [-0.5, 5, -0.5], // Легкий наклон
                    }}
                    transition={{
                        duration: 8,
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

                {/* Правое изображение */}
                <motion.div
                    className="absolute top-[40%] z-1 left-[calc(66%)] w-[600px] pointer-events-none"
                    animate={{
                        y: [-10, 10, -10],
                        scale: [1, 1.03, 1],
                        rotateZ: [-0.5, 1, -0.5], // Легкий наклон
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                >
                    <img src="/images/bg/item.png" className="max-lg:h-auto" alt="Картинка фона" />
                </motion.div>

                {/* Нижнее изображение */}
                <motion.div
                    className="absolute top-[95%] z-1 left-[60%] w-[160px] pointer-events-none"
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
        </section>
    );
};

export default Hero;
