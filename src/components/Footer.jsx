import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ButtonFooter from './ButtonFooter';

const Footer = () => {
    return (
        <footer>
            <Element name="footer" className=" relative">
                <div className="container-full bg-p5 h-[623px]">
                    <div className=" flex items-start justify-between gap-[200px] max-xl:gap-[100px] max-lg:gap-[50px] pt-[54px] text-p3">
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
                        <div>
                            <h6 className=" h6 mb-[40px]">Свяжитесь с нами</h6>
                            <div className="flex items-center gap-4 mb-6">
                                <img src="/images/icons/map.svg" alt="Map icon" />
                                <p className=" base-small">
                                    г. Долгопрудный, Лихачевский проспект, 46с1, этаж 3, офис №8
                                </p>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <img src="/images/icons/mail.svg" alt="Mail icon" />
                                <a className=" base-small" href="">
                                    mail@b2b-studio.ru
                                </a>
                            </div>
                            <Link to="/contacts">
                                <ButtonFooter>Почта</ButtonFooter>
                            </Link>
                            <Link to="/contacts">
                                <ButtonFooter containerClassName={'px-[10px]'}>Почта</ButtonFooter>
                            </Link>
                        </div>
                    </div>
                </div>
            </Element>
        </footer>
    );
};

export default Footer;
