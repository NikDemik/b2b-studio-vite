import { Element, Link as LinkScroll } from 'react-scroll';
import Button from './Button';

const Hero = () => {
    return (
        <section className="relative pt-72 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <Element name="hero">
                <div className="container">
                    <div className=" relative z-2 mb-[90px]">
                        <h1 className=" mb-4 h1 text-p4 uppercase max-w-[872px] max-lg:max-w-388 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-4xl max-md:leading-12">
                            Дизайнерские решения
                        </h1>
                        <p className="text-[89px] leading-none max-lg:text-[60px] max-md:text-[28px] max-md: font-medium mb-8 ">
                            для вашего бизнеса
                        </p>
                        <LinkScroll
                            to="contact"
                            className=" flex max-md:justify-center"
                            offset={-100}
                            spy
                            smooth
                        >
                            <Button>обсудить проект</Button>
                        </LinkScroll>
                    </div>

                    <div className=" absolute top-[41%] z-1 left-[10%] w-[590px] pointer-events-none">
                        <img src="/images/hero-l.png" className=" max-lg:h-auto" alt="hero" />
                    </div>
                    <div className=" absolute top-0 z-1 left-[calc(66%)] w-[670px] pointer-events-none">
                        <img src="/images/hero-r.png" className=" max-lg:h-auto" alt="hero" />
                    </div>
                </div>
            </Element>
            <div className=" absolute -top-0 w-full pointer-events-none">
                <img src="/images/bg-hero.png" className=" max-lg:h-auto" alt="hero" />
            </div>
        </section>
    );
};

export default Hero;
