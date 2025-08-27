import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import RequestButton from './RequestButton';
import { Plus } from '../icons/Plus';

const RequestModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    const [formData, setFormData] = useState({
        name: '',
        // phone: '',
        email: '',
        message: '',
        agreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма отправлена:', formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4"
        >
            <div className="bg-white rounded-xl p-6 w-full max-w-md relative z-[10000]">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-4xl font-normal">Оставить заявку</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 rotate-45"
                    >
                        <Plus size={32} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Имя*</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>

                        {/* <div>
                            <label className="block text-sm font-medium mb-1">Телефон</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div> */}

                        <div>
                            <label className="block text-sm font-medium mb-1">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Сообщение</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg min-h-[100px]"
                                placeholder="Опишите ваш проект или задайте вопрос"
                            />
                        </div>

                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="agreement"
                                name="agreed"
                                checked={formData.agreed}
                                onChange={handleChange}
                                className="mt-1 mr-2"
                                required
                            />
                            <label htmlFor="agreement" className="text-sm">
                                Я согласен на{' '}
                                <a
                                    href="/privacy-policy"
                                    target="_blank"
                                    className="text-p2 hover:underline"
                                >
                                    обработку персональных данных
                                </a>
                            </label>
                        </div>

                        <RequestButton
                            type="submit"
                            disabled={!formData.agreed}
                            className={`w-full ${
                                !formData.agreed ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            Отправить
                        </RequestButton>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default RequestModal;
