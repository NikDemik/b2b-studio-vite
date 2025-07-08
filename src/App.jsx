import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import FAQ from './pages/FAQ/FAQ';
import Pricing from './pages/Pricing/Pricing';
import Services from './pages/Services/Services';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="services" element={<Services />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="contacts" element={<Contacts />} />
            </Route>
        </Routes>
    );
};

export default App;
