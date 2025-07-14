import { stepsAbout } from '../../constants';
import { motion } from 'framer-motion';
import {
    viewportSettings,
    titleAnimation,
    stepItemAnimation,
    numberAnimation,
} from '../../constants/animations';

const DesignSteps = () => {
    return (
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg2 py-16 md:py-24">
            <div className="container-full mx-auto px-4">
                <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    variants={titleAnimation}
                    viewport={viewportSettings}
                    className="h3 mb-12 text-start"
                >
                    Три шага до лучшего дизайна
                </motion.h3>

                <div className="max-w-full mx-auto space-y-8 md:space-y-12">
                    {stepsAbout.map((step) => (
                        <motion.div
                            key={step.number}
                            initial="hidden"
                            whileInView="visible"
                            variants={stepItemAnimation}
                            viewport={viewportSettings}
                            className="flex flex-col md:flex-row gap-6 items-center"
                        >
                            {/* Блок с цифрой */}
                            <div className="w-36 h-36 md:w-40 md:h-40 flex items-center justify-center bg-white rounded-xl shadow-md flex-shrink-0">
                                <motion.span
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={numberAnimation}
                                    viewport={{ once: true }}
                                    className="text-5xl md:text-6xl font-bold text-blue-600"
                                >
                                    {step.number}
                                </motion.span>
                            </div>

                            {/* Блок с текстом */}
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold whitespace-pre-line mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-lg text-gray-600">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DesignSteps;
