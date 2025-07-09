import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMapPlacemark = () => {
    const coordinates = [55.923382, 37.495563];

    return (
        <>
            <Map
                defaultState={{
                    center: coordinates, // Центр карты = координаты метки Долгопрудный
                    zoom: 15,
                    controls: ['zoomControl', 'fullscreenControl'],
                }}
                modules={['control.ZoomControl', 'control.FullscreenControl']}
                width="100%"
                height="400px"
            >
                {/* Метка с кастомизацией */}
                <Placemark
                    geometry={coordinates}
                    properties={{
                        hintContent: 'B2B-Studio', // Подсказка при наведении
                        balloonContent: 'Это метка на карте!', // Текст в балуне
                    }}
                    options={{
                        preset: 'islands#blueHomeIcon', // Стиль метки
                    }}
                    // options={{
                    //     iconLayout: 'default#image',
                    //     iconImageHref: './images/icons/advantage.png', // URL вашей иконки
                    //     iconImageSize: [40, 40], // Размер
                    //     iconImageOffset: [-20, -20], // Смещение
                    // }}
                />
            </Map>
        </>
    );
};

export default YandexMapPlacemark;
