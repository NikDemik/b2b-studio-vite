import { useState } from 'react';
import Button from '../Button';
import RequestModal from '../Modal/RequestModal';
import { motion } from 'framer-motion';
import { ItemAnimation, viewportSettings } from '../../constants/animations';

const FAQBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={ItemAnimation}
            viewport={viewportSettings}
            className=" container-full relative mb-4"
        >
            <Button onClick={() => setIsModalOpen(true)}>задать вопрос</Button>
            <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </motion.div>
    );
};

export default FAQBtn;
