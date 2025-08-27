import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ButtonFooter from './ButtonFooter';

const Footer = () => {
    return (
        <footer>
            <Element name="footer" className=" relative">
                <div className="container-full bg-p5 h-[523px]">
                    <div className=" flex items-start justify-between gap-[200px] max-xl:gap-[100px] max-lg:gap-[50px] pt-[54px] text-p3 mb-9">
                        <div>
                            <h6 className=" h6 mb-[40px]">Информация</h6>
                            <p className=" base-small">
                                Copyright © Информационный специализированный ресурс b2b-studio.ru
                            </p>
                        </div>
                        <div>
                            <h6 className=" h6 mb-[40px]">Навигация</h6>
                            <ul>
                                <li>
                                    <Link
                                        to="/contacts"
                                        className="flex items-center gap-4 [&:not(:last-child)]:mb-6"
                                    >
                                        <img src="/images/icons/arrow-right.svg" alt="Arrow icon" />
                                        Контакты
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="flex items-center gap-4 [&:not(:last-child)]:mb-6"
                                    >
                                        <img src="/images/icons/arrow-right.svg" alt="Arrow icon" />
                                        Наши услуги
                                    </Link>
                                    <Link
                                        to="/portfolio"
                                        className="flex items-center gap-4 [&:not(:last-child)]:mb-6"
                                    >
                                        <img src="/images/icons/arrow-right.svg" alt="Arrow icon" />
                                        Портфолио
                                    </Link>
                                    <Link
                                        to="/faq"
                                        className="flex items-center gap-4 [&:not(:last-child)]:mb-6"
                                    >
                                        <img src="/images/icons/arrow-right.svg" alt="Arrow icon" />
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className=" flex flex-col gap-6">
                            <h6 className=" h6 mb-[16px]">Свяжитесь с нами</h6>
                            <div className="flex items-center gap-4">
                                <img src="/images/icons/map.svg" alt="Map icon" />
                                <p className=" base-small">
                                    г. Долгопрудный, Лихачевский проспект, 46с1, этаж 3, офис №8
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src="/images/icons/mail.svg" alt="Mail icon" />
                                <a className=" base-small" href="">
                                    mail@b2b-studio.ru
                                </a>
                            </div>
                            {/* <Link to="/contacts">
                                <ButtonFooter>Почта</ButtonFooter>
                            </Link> */}
                            <Link to="/contacts">
                                <ButtonFooter containerClassName={'px-[40px] text-[15px]'}>
                                    Задать вопрос
                                </ButtonFooter>
                            </Link>
                        </div>
                    </div>
                    <div className=" flex justify-between text-p3 uppercase text-[15px] border-t-[1px] border-solid border-p3 pt-[30px]">
                        <p className=" max-w-[640px]">
                            Запрещается полное или частичное копирование информации без письменного
                            разрешения администрации сайта
                            <br />
                            <br /> <span>Проект B2B-Studio.ru</span>
                        </p>
                        <div>
                            <a href="/privacy-policy" target="_blank">
                                Правила портала и отказ от ответственности
                            </a>
                        </div>
                        {/* <Link to="/contacts">Правила портала и отказ от ответственности</Link> */}
                    </div>
                </div>
            </Element>
        </footer>
    );
};

export default Footer;
