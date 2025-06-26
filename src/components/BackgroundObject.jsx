import React, { useState, useEffect, useRef } from 'react';

const BackgroundObject = ({ size = 300, color = 'rgba(100, 200, 255, 0.5)', baseSpeed = 1 }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [speed, setSpeed] = useState({ x: 0, y: 0 });
    const scrollSpeedMultiplier = useRef(1);
    const objectRef = useRef(null);
    const animationRef = useRef();

    // Инициализация позиции и скорости (гарантированно внутри экрана)
    useEffect(() => {
        const maxX = window.innerWidth - size;
        const maxY = window.innerHeight - size;

        const initialX = Math.random() * maxX;
        const initialY = Math.random() * maxY;
        const initialSpeedX = (Math.random() - 0.5) * 2 * baseSpeed;
        const initialSpeedY = (Math.random() - 0.5) * 2 * baseSpeed;

        setPosition({ x: initialX, y: initialY });
        setSpeed({ x: initialSpeedX, y: initialSpeedY });

        const directionTimer = setInterval(changeDirection, 2000 + Math.random() * 3000);

        return () => {
            clearInterval(directionTimer);
            cancelAnimationFrame(animationRef.current);
        };
    }, [baseSpeed, size]);

    // Функция для безопасного изменения позиции (с учетом границ)
    const safeSetPosition = (newX, newY) => {
        const maxX = window.innerWidth - size;
        const maxY = window.innerHeight - size;

        // Корректируем позицию, если вышли за границы
        const correctedX = Math.max(0, Math.min(newX, maxX));
        const correctedY = Math.max(0, Math.min(newY, maxY));

        // Если потребовалась корректировка - меняем направление
        if (correctedX !== newX || correctedY !== newY) {
            setSpeed((prev) => ({
                x: correctedX !== newX ? -prev.x : prev.x,
                y: correctedY !== newY ? -prev.y : prev.y,
            }));
        }

        setPosition({ x: correctedX, y: correctedY });
    };

    // Анимация с гарантией нахождения в пределах экрана
    useEffect(() => {
        const animate = () => {
            const newX = position.x + speed.x * scrollSpeedMultiplier.current;
            const newY = position.y + speed.y * scrollSpeedMultiplier.current;

            safeSetPosition(newX, newY);

            // Плавное уменьшение множителя скорости
            if (scrollSpeedMultiplier.current > 1) {
                scrollSpeedMultiplier.current *= 0.99;
                if (scrollSpeedMultiplier.current < 1.01) {
                    scrollSpeedMultiplier.current = 1;
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, [position, speed, size]);

    // Обработчик скролла
    useEffect(() => {
        let lastScrollY = window.scrollY;
        let lastTime = Date.now();

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const currentTime = Date.now();
            const deltaY = Math.abs(currentScrollY - lastScrollY);
            const deltaTime = currentTime - lastTime;

            if (deltaTime > 0) {
                const scrollSpeed = deltaY / deltaTime;
                scrollSpeedMultiplier.current = 1 + Math.min(scrollSpeed * 10, 3);
            }

            lastScrollY = currentScrollY;
            lastTime = currentTime;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Обработчик изменения размера окна
    useEffect(() => {
        const handleResize = () => {
            safeSetPosition(position.x, position.y);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [position, size]);

    // Функция изменения направления
    const changeDirection = () => {
        setSpeed((prevSpeed) => {
            const newSpeedX = prevSpeed.x + (Math.random() - 0.5) * 0.5;
            const newSpeedY = prevSpeed.y + (Math.random() - 0.5) * 0.5;
            const currentSpeed = Math.sqrt(newSpeedX * newSpeedX + newSpeedY * newSpeedY);

            return {
                x: (newSpeedX / currentSpeed) * baseSpeed,
                y: (newSpeedY / currentSpeed) * baseSpeed,
            };
        });
    };

    return (
        // <div
        //     ref={objectRef}
        //     style={{
        //         position: 'fixed',
        //         width: size,
        //         height: size,
        //         backgroundColor: color,
        //         borderRadius: '50%',
        //         left: position.x,
        //         top: position.y,
        //         transition: 'left 0.5s ease-out, top 0.5s ease-out',
        //         zIndex: -1,
        //     }}
        // />
        <div
            ref={objectRef}
            style={{
                position: ' fixed',
                width: size,
                height: size,
                // backgroundColor: color,
                borderRadius: '50%',
                left: position.x,
                top: position.y,
                transition: 'left 0.5s ease-out, top 0.5s ease-out',
                zIndex: -1,
            }}
        >
            <img src="/images/bg-item.png" alt="" className=" object-contain" />
        </div>
    );
};

export default BackgroundObject;
