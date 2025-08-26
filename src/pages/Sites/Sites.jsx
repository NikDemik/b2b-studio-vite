import ServicePageLayout from '../../components/Services/ServicesPageLayout';

const WebsitesPage = () => {
    const services = [
        {
            name: 'Корпоративные сайты',
            description: 'Полнофункциональные решения для бизнеса',
        },
        // ... другие услуги
    ];

    return (
        <ServicePageLayout
            title="Сайты"
            image="/images/services/hero_img_sites.jpg"
            services={services}
        />
    );
};

export default WebsitesPage;
