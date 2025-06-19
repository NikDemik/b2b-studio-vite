import { Element } from 'react-scroll';
import { advantage } from '../constants';

const Advantage = () => {
    return (
        <section>
            <Element name="advantage">
                <div className="container-full">
                    <div className=" relative z-2">
                        <ul className="relative flex gap-8 justify-between flex-grow max-md:hidden">
                            {advantage.map(({ id, text, icon, title }) => (
                                <li
                                    key={id}
                                    className="relative flex flex-col justify-between flex-1 pt-16 px-4 pb-14 bg2 backdrop-blur-[22px] shadow-100 rounded-3xl"
                                >
                                    <p className=" relative z-2 mx-auto my-0 body-1 max-lg:body-2 text-center">
                                        {text}
                                    </p>

                                    <div className=" flex items-center justify-center mx-auto mt-3">
                                        <img
                                            src={icon}
                                            alt={title}
                                            className=" size-[35] object-contain z-20"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Advantage;
