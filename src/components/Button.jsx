import clsx from 'clsx';

const Button = ({ children, href, containerClassName, onClick }) => {
    const Inner = () => (
        <>
            <span className=" relative z-2 text-p4 text-[36px] max-lg:text-[24px] max-md:text-[16px]">
                {children}
            </span>
        </>
    );

    return href ? (
        <a className={clsx(containerClassName)} href={href}>
            <Inner />
        </a>
    ) : (
        <button
            className={clsx(
                'relative flex items-center max-md:mt-[140px] max-md:justify-center min-h-[60px] px-[76px] max-md:px-[44px] py-[36px] max-md:py-[22px] bg-btn backdrop-blur-[22px] rounded-full shadow-200 inner-before group-hover:before:opacity-100 overflow-hidden hover:bg-btn-hov transition-all duration-500',
                containerClassName,
            )}
            onClick={onClick}
        >
            <Inner />
        </button>
    );
};

export default Button;
