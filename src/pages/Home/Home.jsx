import Advantage from '../../components/Home/Advantage';
import Contact from '../../components/Home/Contact';
import Hero from '../../components/Home/Hero';
import Portfolio from '../../components/Home/Portfolio';
import Question from '../../components/Home/Question';
import Service from '../../components/Home/Service';

const Home = () => {
    return (
        <main className="overflow-hidden min-h-screen">
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
