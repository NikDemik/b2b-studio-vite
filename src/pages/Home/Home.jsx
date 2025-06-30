import Advantage from '../../components/Advantage';
import Contact from '../../components/Contact';
import Hero from '../../components/Hero';
import Portfolio from '../../components/Portfolio';
import Question from '../../components/Question';
import Service from '../../components/Service';

const Home = () => {
    return (
        <main className="overflow-hidden ">
            <Hero />
            <Advantage />
            <Service />
            <Portfolio />
            <Question />
            <Contact />
        </main>
    );
};

export default Home;
