import Advantage from './sections/Advantage';
import Features from './sections/Features';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Pricing from './sections/Pricing';

const App = () => {
    return (
        <main className="overflow-hidden ">
            <Header />
            <Hero />
            <Advantage />
            {/* <Features />
            <Pricing /> */}
        </main>
    );
};

export default App;
