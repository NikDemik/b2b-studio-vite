import { Link, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Contacts from '../pages/Contacts/Contacts';

const Footer = () => {
    return (
        <section>
            <Element name="footer" className=" relative">
                <div className="container-full bg-p5 h-[623px]">
                    <div className=" flex items-center justify-between pt-[54px] text-p3">
                        <div>
                            <h6 className=" h6 mb-[40px]">Информация</h6>
                            <p className=" base-small">
                                Copyright © Информационный специализированный ресурс b2b-studio.ru
                            </p>
                        </div>
                        <div>
                            <h6 className=" h6 mb-[40px]">Навигация</h6>
                            <Link to="/contacts">Контакты</Link>
                            <Routes>
                                <Route path="/Contacts" element={<Contacts />} />
                            </Routes>
                        </div>
                        <div>
                            <h6 className=" h6 mb-[40px]">Свяжитесь с нами</h6>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Footer;
