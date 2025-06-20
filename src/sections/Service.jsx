import { Element } from 'react-scroll';

const Service = () => {
    return (
        <section>
            <Element name="service">
                <div className="container-full-l">
                    <div className="container-r">
                        <div className=" relative mt-44 grid grid-cols-section">
                            <div>
                                <ul className=" relative flex flex-col gap-[2.6rem]">
                                    <li className=" section-title section-title-bg">
                                        ФИРМЕННЫЙ СТИЛЬ
                                    </li>
                                    <li className=" section-title section-title-bg">ПОЛИГРАФИЯ</li>
                                    <li className=" section-title section-title-bg">РЕКЛАМА</li>
                                    <li className=" section-title section-title-bg">САЙТЫ</li>
                                    <li className=" section-title section-title-bg section-title-bg-before">
                                        МЕРЧ
                                    </li>
                                </ul>
                            </div>
                            <h1 className=" h1 pb-24 pt-24 bg3">SERVICE Lorem ipsum dolor sit</h1>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Service;
