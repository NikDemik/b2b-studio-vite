import { motion } from 'framer-motion';

const ServiceDescription = ({ title, services }) => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{title}</h2>

            <div className="max-w-4xl mx-auto space-y-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                        <div className="bg-white/80 backdrop-blur-[10px] shadow-200 rounded-xl p-6">
                            <p className="text-lg">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServiceDescription;
