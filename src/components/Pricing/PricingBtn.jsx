import clsx from 'clsx';

const PricingBtn = ({ children, href, containerClassName, onClick }) => {
    const Inner = () => (
        <>
            <span className=" relative z-2 text-p3 text-[36px] max-lg:text-[24px] max-md:text-[16px]">
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
                'relative flex items-center bg-p4 backdrop-blur-sm p-4 rounded-3xl shadow-400 hover:scale-105 group-hover:opacity-80 transition-all duration-500',
                containerClassName,
            )}
            onClick={onClick}
        >
            <Inner />
        </button>
    );
};

export default PricingBtn;
