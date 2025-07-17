import WebsiteServices from './WebsiteServices';
import ServiceDescription from './ServiceDescription';

const ServicePageLayout = ({ title, image, services }) => {
    return (
        <div>
            <WebsiteServices title={`Профессиональная ${title.toLowerCase()}`} image={image} />
            <ServiceDescription title={title} services={services} />
        </div>
    );
};

export default ServicePageLayout;
