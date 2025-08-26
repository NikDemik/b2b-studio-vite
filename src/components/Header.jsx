import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { Link as LinkScroll } from 'react-scroll';

const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Компонент NavLink с проверкой активного пути
    const NavLink = ({ title, to }) => {
        const isActive = location.pathname === to;
        return (
            <Link
                onClick={() => {
                    setIsOpen(false);
                    setServicesDropdownOpen(false);
                }}
                to={to}
                className={clsx(
                    'base-bold text-p3 transition-colors duration-500 cursor-pointer hover:text-p1 max-2xl:my-4 max-2xl:h5',
                    isActive && ' nav-active', // Активный пункт меню
                )}
            >
                {title}
            </Link>
        );
    };

    // Компонент для выпадающего меню
    const ServicesDropdown = () => {
        const services = [
            { title: 'Сайты', to: '/sites' },
            { title: 'Айдентика', to: '/identity' },
            { title: 'Полиграфия', to: '/polygraphy' },
            { title: 'Фотоуслуги', to: '/photo' },
            { title: 'Реклама', to: '/advertising' },
        ];

        return (
            <div className="relative group">
                <button
                    className={clsx(
                        'base-bold text-p3 transition-colors duration-500 cursor-pointer hover:text-p1 flex items-center gap-1',
                        (location.pathname.startsWith('/sites') ||
                            location.pathname.startsWith('/identity') ||
                            location.pathname.startsWith('/polygraphy') ||
                            location.pathname.startsWith('/photo') ||
                            location.pathname.startsWith('/advertising')) &&
                            'nav-active',
                    )}
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                    услуги
                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                            servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                <div
                    className={clsx(
                        'absolute left-0 mt-2 bg-main rounded-md shadow-lg z-50 transition-all duration-200 overflow-hidden',
                        servicesDropdownOpen
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-1 pointer-events-none',
                    )}
                >
                    <div className="py-1">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                to={service.to}
                                onClick={() => {
                                    setIsOpen(false);
                                    setServicesDropdownOpen(false);
                                }}
                                className="block base-bold px-6 py-4 text-p3 hover:text-p1 transition-colors duration-200"
                            >
                                {service.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 z-50 w-full bg1 backdrop-blur-[22px] shadow-100 py-14 transition-all duration-500 max-2xl:py-4',
                hasScrolled && 'bg2 py-6',
            )}
        >
            <div className="container flex h-14 items-center max-2xl:px-5">
                <a className="2xl:hidden flex-1 cursor-pointer z-2">
                    <img src="/images/logo/logo.svg" width={115} height={55} alt="logo" />
                </a>

                <div
                    className={clsx(
                        'w-full max-2xl:fixed max-2xl:top-0 max-2xl:left-0 max-2xl:w-full max-2xl:bg-s2 max-2xl:opacity-0',
                        isOpen ? 'max-2xl:opacity-100' : 'max-2xl:pointer-events-none',
                    )}
                >
                    <div className="max-2xl:relative max-2xl:flex max-2xl:flex-col max-2xl:min-h-screen max-2xl:p-6 max-2xl:overflow-hidden sidebar-before max-md:px-4">
                        <nav className=" flex justify-between max-2xl:relative max-2xl:z-2 max-2xl:my-auto">
                            <Link
                                to="/"
                                className={clsx(
                                    'max-2xl:hidden transition-transform duration-500 cursor-pointer',
                                )}
                            >
                                <img
                                    src="/images/logo/logo.svg"
                                    width={192}
                                    height={89}
                                    alt="logo"
                                />
                            </Link>
                            <ul className="flex gap-20 max-2xl:block max-2xl:px-12">
                                <li className="nav-li">
                                    <NavLink title="главная" to="/" />
                                </li>
                                <li className="nav-li">
                                    <NavLink title="о нас" to="/about" />
                                </li>
                                <li className="nav-li">
                                    <NavLink title="портфолио" to="/portfolio" />
                                </li>
                                <li className="nav-li relative">
                                    <ServicesDropdown />
                                </li>
                                <li className="nav-li">
                                    <NavLink title="стоимость" to="/pricing" />
                                </li>
                                <li className="nav-li">
                                    <NavLink title="FAQ" to="/faq" />
                                </li>
                                <li className="nav-li">
                                    <NavLink title="контакты" to="/contacts" />
                                </li>
                            </ul>
                        </nav>

                        <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                            <img
                                src="/images/bg-outlines.svg"
                                width={960}
                                height={380}
                                alt="outline"
                                className="relative z-2"
                            />
                            <img
                                src="/images/bg-outlines-fill.png"
                                width={960}
                                height={380}
                                alt="outline"
                                className="absolute inset-0 mix-blend-soft-light opacity-5"
                            />
                        </div>
                    </div>
                </div>

                <button
                    className="2xl:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
                    onClick={() => setIsOpen((prevState) => !prevState)}
                >
                    <img
                        src={`/images/${isOpen ? 'close' : 'magic'}.svg`}
                        alt="menu"
                        className="size-1/2 object-contain"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
