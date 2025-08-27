import ServicePageLayout from '../../components/Services/ServicesPageLayout';
import { servicesData } from '../../constants/services';

const WebsitesPage = () => {
    return <ServicePageLayout serviceData={servicesData.websites} />;
};

export default WebsitesPage;
