import { Element } from 'react-scroll';

const Service = () => {
    return (
        <section>
            <Element name="service">
                <div className="container-full-l">
                    <div className="">
                        <div className=" relative mt-20 pt-24 grid grid-cols-service max-md:grid-cols-1">
                            <div className=" max-md:hidden">
                                <ul className=" relative z-2 flex flex-col gap-[2.6rem]">
                                    <li className=" service-title service-title-bg">
                                        ФИРМЕННЫЙ СТИЛЬ
                                    </li>
                                    <li className=" service-title service-title-bg">ПОЛИГРАФИЯ</li>
                                    <li className=" service-title service-title-bg">РЕКЛАМА</li>
                                    <li className=" service-title service-title-bg">САЙТЫ</li>
                                    <li className=" service-title service-title-bg">МЕРЧ</li>
                                </ul>
                            </div>
                            <div className=" flex flex-col z-2 ml-8">
                                <div className=" flex items-center">
                                    <img src="/images/advantage.png" alt="Icon" />
                                    <h3 className=" ml-5 h3">Наши услуги</h3>
                                </div>
                                <div className=" pt-8">
                                    <p className=" body-1 max-lg:body-2">
                                        Мы с командой создаём уникальную, цельную и привлекательную
                                        визуальную коммуникацию для вашего бизнеса — такую, которая
                                        точно откликается вашей целевой аудитории.
                                        <br />
                                        <br />
                                        Ваш бренд станет легко узнаваемым, взаимодействие с ним —
                                        приятным и запоминающимся, а сотрудники и подрядчики будут
                                        точно понимать, как должны выглядеть все элементы фирменного
                                        стиля.
                                    </p>
                                </div>
                            </div>
                            <div className=" absolute top-[-3%] z-1 left-[2%] w-[480px] pointer-events-none">
                                <img
                                    src="/images/service-bg-items.png"
                                    className=" max-lg:h-auto"
                                    alt="service-bg"
                                />
                            </div>
                            <div className=" absolute top-[54%] z-1 left-[20%] w-[300px] pointer-events-none">
                                <img
                                    src="/images/service-bg-items.png"
                                    className=" max-lg:h-auto"
                                    alt="service-bg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Service;
