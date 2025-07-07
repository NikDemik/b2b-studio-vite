import clsx from 'clsx';

const ButtonFooter = ({ children, href, containerClassName, onClick }) => {
    const Inner = () => (
        <>
            <span className=" relative z-2 text-p3 tracking-[0.1em] text-[28px] max-lg:text-[22px] max-md:text-[16px]">
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
                'relative flex items-center max-md:mt-[140px] max-md:justify-center min-h-[60px] px-[120px] max-md:px-[80px] py-[28px] max-md:py-[20px] bg-btn-2 backdrop-blur-[22px] rounded-full shadow-100 inner-before group-hover:before:opacity-100 overflow-hidden hover:bg-btn-hov transition-all duration-500 uppercase',
                containerClassName,
            )}
            onClick={onClick}
        >
            <Inner />
        </button>
    );
};

export default ButtonFooter;
