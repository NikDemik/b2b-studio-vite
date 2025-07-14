import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const Service = () => {
    return (
        <section>
            <Element name="service">
                <div className="container-full-l">
                    <div className=" relative mt-20 pt-24 grid grid-cols-service max-md:grid-cols-1">
                        <div className=" max-md:hidden">
                            <ul className=" relative z-2 flex flex-col gap-[2.6rem]">
                                <li className=" service-title service-title-bg">ФИРМЕННЫЙ СТИЛЬ</li>
                                <li className=" service-title service-title-bg">ПОЛИГРАФИЯ</li>
                                <li className=" service-title service-title-bg">РЕКЛАМА</li>
                                <li className=" service-title service-title-bg">САЙТЫ</li>
                                <li className=" service-title service-title-bg">МЕРЧ</li>
                            </ul>
                        </div>
                        <div className=" flex flex-col z-2 ml-8">
                            <div className=" flex items-center">
                                <img src="/images/icons/advantage.png" alt="Icon" />
                                <h3 className=" ml-5 h3">Наши услуги</h3>
                            </div>
                            <div className=" pt-8">
                                <p className=" body-1 ">
                                    Мы с командой создаём уникальную, цельную и привлекательную
                                    визуальную коммуникацию для вашего бизнеса — такую, которая
                                    точно откликается вашей целевой аудитории.
                                    <br />
                                    <br />
                                    Ваш бренд станет легко узнаваемым, взаимодействие с ним —
                                    приятным и запоминающимся, а сотрудники и подрядчики будут точно
                                    понимать, как должны выглядеть все элементы фирменного стиля.
                                </p>
                            </div>
                        </div>

                        {/* Верхнее изображение */}
                        <motion.div
                            className="absolute top-[2%] z-1 left-[5%] w-[380px] pointer-events-none"
                            animate={{
                                y: [-10, 100, -10],
                                x: [0, 200, 0],
                                scale: [1, 1.2, 1],
                                rotateZ: [-0.5, 4, -0.5], // Легкий наклон
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 1,
                            }}
                        >
                            <img
                                src="/images/bg/item.png"
                                className="max-lg:h-auto"
                                alt="Картинка фона"
                            />
                        </motion.div>
                        {/* Нижнее изображение */}
                        <motion.div
                            className="absolute top-[54%] z-1 left-[20%] w-[220px] pointer-events-none"
                            animate={{
                                y: [-10, 100, -10],
                                x: [0, 100, 0],
                                scale: [1, 0.8, 1],
                                rotateZ: [-0.5, 10, -0.5], // Легкий наклон
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 1,
                            }}
                        >
                            <img
                                src="/images/bg/item.png"
                                className="max-lg:h-auto"
                                alt="Картинка фона"
                            />
                        </motion.div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Service;
