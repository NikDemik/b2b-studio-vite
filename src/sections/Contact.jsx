import { Element } from 'react-scroll';
import { contacts } from '../constants';
import { CheckIcon } from '../components/CheckIcon';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Contact = () => {
    return (
        <section className=" my-36">
            <Element name="contact" className=" relative">
                <div className="container-full">
                    <div className=" flex items-center mb-[36px]">
                        <img src="/images/advantage.png" alt="Icon" />
                        <h3 className=" ml-5 h3">Контакты</h3>
                    </div>
                    <div className="mb-[65px]">
                        <ul>
                            {contacts.map(({ id, text }) => (
                                <li
                                    key={id}
                                    className=" flex items-center gap-8 body-1 max-lg:body-2 [&:not(:last-child)]:mb-8"
                                >
                                    <CheckIcon />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=" w-[1528px] h-[541px]">
                        <YMaps>
                            <Map
                                defaultState={{
                                    center: [55.75, 37.57],
                                    zoom: 9,
                                    controls: ['zoomControl', 'fullscreenControl'],
                                }}
                                modules={['control.ZoomControl', 'control.FullscreenControl']}
                            >
                                <Placemark defaultGeometry={[55.75, 37.57]} />
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Contact;
