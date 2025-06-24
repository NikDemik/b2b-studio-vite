import Advantage from './sections/Advantage';
import Features from './sections/Features';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import Pricing from './sections/Pricing';
import Service from './sections/service';

const App = () => {
    return (
        <main className="overflow-hidden ">
            <Header />
            <Hero />
            <Advantage />
            <Service />
            <Portfolio />
            <Features />
            <Pricing />
        </main>
    );
};

export default App;
