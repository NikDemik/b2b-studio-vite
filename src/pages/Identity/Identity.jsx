import ServicePageLayout from '../../components/Services/ServicesPageLayout';

const IdentityPage = () => {
    const services = [
        {
            name: 'Разработка логотипа',
            description: 'Создание уникального фирменного знака, отражающего суть вашего бренда',
        },
        {
            name: 'Фирменный стиль',
            description: 'Полный пакет визуальной идентификации для всех носителей',
        },
        // ... другие услуги
    ];

    return (
        <ServicePageLayout
            title="Айдентика"
            image="/images/services/hero_img_identity.jpg"
            services={services}
        />
    );
};

export default IdentityPage;
