import clsx from 'clsx';
import { Link } from 'react-router-dom';

const ButtonServicesPages = ({ children, to, containerClassName, onClick }) => {
    const Inner = () => (
        <>
            <span className=" relative z-2 text-p3 text-[1.875rem] max-lg:text-[1.5rem] max-md:text-[1rem]">
                {children}
            </span>
        </>
    );

    return to ? (
        <Link
            className={clsx(
                'relative flex justify-center items-center px-10 py-4 bg-p4 rounded-full shadow-200 overflow-hidden hover:bg-btn-hov transition-all duration-500',
                containerClassName,
            )}
            to={to}
        >
            <Inner />
        </Link>
    ) : (
        <button
            className={clsx(
                'relative flex justify-center items-center px-10 py-4 bg-p4 rounded-full shadow-200 overflow-hidden hover:bg-btn-hov transition-all duration-500',
                containerClassName,
            )}
            onClick={onClick}
        >
            <Inner />
        </button>
    );
};

export default ButtonServicesPages;
