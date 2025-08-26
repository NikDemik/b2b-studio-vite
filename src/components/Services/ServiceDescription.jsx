import { motion } from 'framer-motion';

const ServiceDescription = ({ title, services }) => {
    return (
        <div className="container-full relative z-2 mx-auto px-4 pb-16">
            <h2 className="text-3xl md:text-6xl font-semibold mb-12 text-start">{title}</h2>

            <div className="max-w-full mx-auto space-y-20">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <h3 className="text-3xl font-light mb-8">● {service.name}</h3>
                        <div className="bg-main p-6">
                            <p className="text-3xl font-light">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServiceDescription;
