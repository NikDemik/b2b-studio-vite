import { useAboutData } from '../../hooks/useAboutData';
import { motion } from 'framer-motion';
import {
    viewportSettings,
    titleAnimation,
    stepItemAnimation,
    numberAnimation,
} from '../../constants/animations';

const DesignSteps = () => {
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

    if (!aboutData || !aboutData.stepsAbout) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="text-center text-gray-600">
                    <p>Шаги не найдены</p>
                </div>
            </div>
        );
    }

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
                    {aboutData.stepsAbout.map((step) => (
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
