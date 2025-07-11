import { motion } from 'framer-motion';

export const DiscussButton = ({ onClick }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-[30px] py-[25px] bg-btn backdrop-blur shadow-200 rounded-[20px] text-[30px] leading-[1] font-light transition hover:opacity-90"
            onClick={onClick}
        >
            Обсудить проект
        </motion.button>
    );
};
