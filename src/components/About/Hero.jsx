import { motion } from 'framer-motion';

const Hero = () => {
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
                    <div className="flex w-full gap-[30px]">
                        {/* Первый блок - 50% ширины */}
                        <div className="w-1/2 pb-14 bg2 backdrop-blur-[22px] shadow-300 rounded-[20px]"></div>

                        {/* Второй блок - 50% ширины с тремя одинаковыми внутренними блоками */}
                        <div className="w-1/2">
                            <ul className="flex h-full justify-between gap-[30px]">
                                {/* Все три блока имеют flex-1 для одинаковой ширины */}
                                <li className="flex-1 px-[30px] py-[60px] bg2 backdrop-blur-[22px] shadow-300 rounded-[20px] text-p3 font-light text-center">
                                    <p className="text-[60px] leading-[1em]">13 лет</p>
                                    <span className="text-[37px] leading-[1em]">на рынке</span>
                                </li>

                                <li className="flex-1 px-[30px] py-[60px] bg2 backdrop-blur-[22px] shadow-300 rounded-[20px] text-p3 font-light text-center">
                                    <p className="text-[60px] leading-[1em]">500+</p>
                                    <span className="text-[37px] leading-[1em]">
                                        успешных проектов
                                    </span>
                                </li>

                                <li className="flex-1 px-[30px] py-[60px] bg2 backdrop-blur-[22px] shadow-300 rounded-[20px] text-p3 font-light text-center">
                                    <p className="text-[60px] leading-[1em]">200+</p>
                                    <span className="text-[37px] leading-[1em]">
                                        довольных клиентов
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Верхнее изображение */}
                <motion.div
                    className="absolute top-[30%] z-1 left-[80%] w-[180px] pointer-events-none"
                    animate={{
                        y: [-10, 300, -10],
                        x: [0, 15, 0],
                        scale: [1, 1.03, 1], // Плавное приближение-отдаление
                        rotateZ: [-0.5, 20, -0.5], // Легкий наклон
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
                    className="absolute top-[95%] z-1 left-[60%] w-[360px] pointer-events-none"
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
