import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="contacts" element={<Contacts />} />
            </Route>
        </Routes>
    );
};

export default App;
