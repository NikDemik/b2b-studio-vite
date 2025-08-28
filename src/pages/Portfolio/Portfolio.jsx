import Hero from '../../components/Portfolio/Hero';
import PortfolioWorks from '../../components/Portfolio/PortfolioWorks';
import Contact from '../../components/Contacts/Contact';
import PortfolioFilter from '../../components/Portfolio/PortfolioFilter';

const Portfolio = () => {
    return (
        <main className="overflow-hidden ">
            <Hero />
            <PortfolioFilter />
            {/* <PortfolioWorks /> */}
            <Contact />
        </main>
    );
};

export default Portfolio;
