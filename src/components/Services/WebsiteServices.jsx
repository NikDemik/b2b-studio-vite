import { motion } from 'framer-motion';
import Button from '../Button';
import ButtonServicesPages from './ButtonServicesPages';

const WebsiteServices = ({ title, image }) => {
    return (
        <section className="relative pt-72 pb-32 max-lg:pt-52 max-lg:pb-8 max-md:pt-36 max-md:pb-24">
            <div className="container">
                <div className=" relative z-2 w-full shadow-400 rounded-3xl">
                    <div className="flex flex-col md:flex-row">
                        {/* Левый блок (30%) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-[40%] flex flex-col gap-10 items-start justify-center p-8 border-[6px] border-white md:rounded-l-3xl"
                        >
                            <h1 className="h1 uppercase">Наши услуги</h1>
                            <Button className="mt-4">Обсудить проект</Button>
                        </motion.div>

                        {/* Правый блок (70%) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full md:w-[60%] flex flex-col md:flex-row bg-p3 p-10 md:rounded-r-3xl"
                        >
                            {/* Текстовая часть */}
                            <div className="px-10 flex flex-col justify-between md:items-end md:text-right">
                                <ul className="flex flex-row justify-center gap-10 md:flex-col md:justify-start md:gap-3 items-end space-y-6 mb-8">
                                    <li className="text-p6 text-center font-light">
                                        <p className="text-6xl leading-none">13 лет</p>
                                        <span className=" text-4xl leading-none">на рынке</span>
                                    </li>
                                    <li className="text-p6 text-center font-light">
                                        <p className="text-6xl leading-none">500+</p>
                                        <span className=" text-4xl leading-none">
                                            успешных
                                            <br />
                                            клиентов
                                        </span>
                                    </li>
                                </ul>
                                <ButtonServicesPages>Портфолио</ButtonServicesPages>
                            </div>

                            {/* Изображение */}
                            <div className="hidden md:block relative w-full max-h-[520px] overflow-hidden">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full rounded-3xl object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Фоновое изображение */}
            <div className=" absolute -top-0 w-full pointer-events-none">
                <img src="/images/bg/hero.png" className=" max-lg:h-auto" alt="hero" />
            </div>
        </section>
    );
};

export default WebsiteServices;
