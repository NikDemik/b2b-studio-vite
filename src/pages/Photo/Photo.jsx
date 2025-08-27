import ServicePageLayout from '../../components/Services/ServicesPageLayout';
import { servicesData } from '../../constants/services';

const PhotoPage = () => {
    return <ServicePageLayout serviceData={servicesData.photo} />;
};

export default PhotoPage;
