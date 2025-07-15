import Hero from '../../components/Portfolio/Hero';
import PortfolioWorks from '../../components/Portfolio/PortfolioWorks';
import Contact from '../../components/Contacts/Contact';

const Portfolio = () => {
    return (
        <main className="overflow-hidden ">
            <Hero />
            <PortfolioWorks />
            <Contact />
        </main>
    );
};

export default Portfolio;
