import Hero from '../../components/Portfolio/Hero';
import Contact from '../../components/Contacts/Contact';
import PortfolioFilter from '../../components/Portfolio/PortfolioFilter';

const Portfolio = () => {
    return (
        <main className="overflow-hidden ">
            <Hero />
            <PortfolioFilter />
            <Contact />
        </main>
    );
};

export default Portfolio;
