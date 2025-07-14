// Анимация для контейнера общая
export const ContainerAnimation = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
        },
    },
};

export const ItemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Настройки viewport
export const viewportSettings = {
    once: true,
    margin: '-100px',
};

// Анимация для заголовков
export const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

// Анимация для блоков
export const stepItemAnimation = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Анимация для списка
export const listContainerAnimation = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
        },
    },
};

export const listItemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Анимация иконок
export const iconAnimation = (index) => ({
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: {
        delay: 0.1 + index * 0.15,
        type: 'spring',
        stiffness: 100,
    },
});

// Анимация цифр
export const numberAnimation = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
            damping: 10,
        },
    },
};
