import { servicesAbout } from '../../constants';
import { motion } from 'framer-motion';
import {
    titleAnimation,
    listContainerAnimation,
    listItemAnimation,
    iconAnimation,
    viewportSettings,
} from '../../constants/animations';

const ServicesList = () => {
    return (
        <section className="container-full mx-auto px-4 py-12 md:py-16">
            <div className="relative">
                <motion.h4
                    initial="hidden"
                    whileInView="visible"
                    variants={titleAnimation}
                    viewport={viewportSettings}
                    className="h4 mb-8 md:mb-12 text-start"
                >
                    С 2012 года мы создаем:
                </motion.h4>

                <motion.ul
                    variants={listContainerAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="space-y-6 md:space-y-8 max-w-full mx-auto"
                >
                    {servicesAbout.map((service, index) => (
                        <motion.li
                            key={index}
                            variants={listItemAnimation}
                            className="flex items-start gap-4"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <motion.img
                                    src="/images/icons/advantage.png"
                                    alt="Преимущество"
                                    className="w-6 h-6 md:w-10 md:h-10"
                                    {...iconAnimation(index)}
                                />
                            </div>
                            <p className="body-1">{service}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.div
                    className="absolute top-[75%] -z-10 left-[94%] w-[200px] pointer-events-none "
                    animate={{
                        y: [-10, 100, -10],
                        x: [0, 15, 0],
                        scale: [1, 0.8, 1], // Плавное приближение-отдаление
                        rotateZ: [-0.5, 160, -0.5], // Легкий наклон
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

                <motion.div
                    className="absolute top-[90%] -z-10 left-[75%] w-[400px] pointer-events-none "
                    animate={{
                        y: [0, 100, 0],
                        x: [0, 15, 0],
                        scale: [1, 0.9, 1], // Плавное приближение-отдаление
                        rotateZ: [-30, 50, -30], // Легкий наклон
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
            </div>
        </section>
    );
};

export default ServicesList;
