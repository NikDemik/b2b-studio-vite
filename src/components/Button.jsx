import clsx from 'clsx';
import Marker from './Marker';

const Button = ({ children, href, containerClassName, onClick }) => {
    const Inner = () => (
        <>
            <span className="relative flex items-center min-h-[60px] px-16 py-8 bg-btn backdrop-blur-[22px] rounded-full shadow-200 inner-before group-hover:before:opacity-100 overflow-hidden">
                <span className=" relative z-2 font-poppins  text-p4 text-[30px] font-light">
                    {children}
                </span>
            </span>
        </>
    );

    return href ? (
        <a className={clsx(containerClassName)} href={href}>
            <Inner />
        </a>
    ) : (
        <button className={clsx(containerClassName)} onClick={onClick}>
            <Inner />
        </button>
    );
};

export default Button;
