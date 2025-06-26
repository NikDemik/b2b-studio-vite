import Advantage from './sections/Advantage';
import Contact from './sections/Contact';
import Features from './sections/Features';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import Pricing from './sections/Pricing';
import Question from './sections/Question';
import Service from './sections/service';

const App = () => {
    return (
        <main className="overflow-hidden ">
            <Header />
            <Hero />
            <Advantage />
            <Service />
            <Portfolio />
            <Question />
            <Contact />
            <Features />
            <Pricing />
        </main>
    );
};

export default App;
