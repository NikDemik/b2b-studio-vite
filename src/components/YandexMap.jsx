import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = () => {
    return (
        <>
            <YMaps>
                <Map
                    defaultState={{
                        center: [55.923382, 37.495563], //Долгопрудный
                        zoom: 15,
                        controls: ['zoomControl', 'fullscreenControl'],
                    }}
                    modules={['control.ZoomControl', 'control.FullscreenControl']}
                    width="100%"
                    height="400px"
                >
                    <Placemark geometry={[55.923382, 37.495563]} />
                </Map>
            </YMaps>
        </>
    );
};

export default YandexMap;
