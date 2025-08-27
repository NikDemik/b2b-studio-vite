import WebsiteServices from './WebsiteServices';
import ServiceDescription from './ServiceDescription';

const ServicePageLayout = ({ serviceData }) => {
    if (!serviceData) {
        return <div>Услуга не найдена</div>;
    }

    return (
        <div>
            <WebsiteServices
                title={`Профессиональная ${serviceData.title.toLowerCase()}`}
                image={serviceData.image}
            />
            <ServiceDescription title={serviceData.title} services={serviceData.services} />
        </div>
    );
};

export default ServicePageLayout;
