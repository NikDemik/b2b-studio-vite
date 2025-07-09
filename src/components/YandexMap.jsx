import { YMaps } from 'react-yandex-maps';
import YandexMapPlacemark from './YandexMapPlacemark';

const YandexMap = () => {
    return (
        <YMaps query={{ apikey: 'ab582053-9801-4c1b-8d5e-3f664e5da536', lang: 'ru_RU' }}>
            <YandexMapPlacemark />
        </YMaps>
    );
};

export default YandexMap;
