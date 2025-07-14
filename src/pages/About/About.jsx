import ApproachSection from '../../components/About/ApproachSection';
import DesignSteps from '../../components/About/DesignSteps';
import Hero from '../../components/About/Hero';
import ServicesList from '../../components/About/ServiceList';
import Contact from '../../components/Contacts/Contact';

const About = () => {
    return (
        <main className="overflow-hidden min-h-screen">
            <Hero />
            <ApproachSection />
            <ServicesList />
            <DesignSteps />
            <Contact />
        </main>
    );
};

export default About;
