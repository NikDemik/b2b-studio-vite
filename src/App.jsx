import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import FAQ from './pages/FAQ/FAQ';
import Pricing from './pages/Pricing/Pricing';
import IdentityPage from './pages/Identity/Identity';
import WebsitesPage from './pages/Websites/Websites';
import PhotoPage from './pages/Photo/Photo';
import PolygraphyPage from './pages/Polygraphy/Polygraphy';
import AdvertisingPage from './pages/Advertising/Advertising';
import { ScrollRestoration } from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

const App = () => {
    return (
        <>
            <ScrollRestoration />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="websites" element={<WebsitesPage />} />
                    <Route path="identity" element={<IdentityPage />} />
                    <Route path="photo" element={<PhotoPage />} />
                    <Route path="polygraphy" element={<PolygraphyPage />} />
                    <Route path="advertising" element={<AdvertisingPage />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="faq" element={<FAQ />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
