import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Scrollable3DBackground() {
    const containerRef = useRef();
    const boxRef = useRef();

    useEffect(() => {
        // Инициализация анимаций
        const box = boxRef.current;

        // Основная анимация при скролле
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;

                // 3D трансформации
                gsap.to(box, {
                    rotationY: progress * 360,
                    rotationX: progress * 180,
                    z: progress * 500,
                    ease: 'sine.out',
                });

                // Изменение цвета
                gsap.to(box, {
                    backgroundColor: `hsl(${progress * 360}, 80%, 50%)`,
                    duration: 0.3,
                });
            },
        });

        // Дополнительные анимации
        gsap.to(box, {
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            duration: 3,
            ease: 'sine.inOut',
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="3d-background-container">
            <div ref={boxRef} className="3d-box" />
        </div>
    );
}
