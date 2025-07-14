import { projectsAbout } from '../../constants';
import { motion } from 'framer-motion';
import { ContainerAnimation, ItemAnimation, viewportSettings } from '../../constants/animations';

const ApproachSection = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={ContainerAnimation}
            viewport={viewportSettings}
            className=" relative container-full mx-auto px-4 py-12 md:py-16"
        >
            {/* Верхний текстовый блок */}
            <div className="w-full mb-16 text-center">
                <motion.p variants={ItemAnimation} className=" body-1">
                    Наш подход – это стратегия, креатив и точность в деталях. Мы не просто выполняем
                    задачи, а решаем бизнес-задачи наших клиентов, помогая им выделяться на рынке и
                    привлекать целевую аудиторию.
                </motion.p>
            </div>

            {/* Блок с проектами */}
            <div className="w-full">
                <motion.h3
                    variants={ItemAnimation}
                    viewport={viewportSettings}
                    className=" h3 mb-10 text-start"
                >
                    Наши проекты за 2025 год
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {projectsAbout.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={ItemAnimation}
                            viewport={viewportSettings}
                            className="bg-main hover:shadow-301 transition-shadow overflow-hidden"
                        >
                            <div className="h-[340px] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* <div className="p-4 text-center">
                                <h3 className="text-xl font-medium">{project.title}</h3>
                            </div> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ApproachSection;
