import Contact from '../../components/Contacts/Contact';
import FAQBtn from '../../components/Faq/FAQBtn';
import FAQSection from '../../components/Faq/FAQSection';
import Hero from '../../components/Faq/Hero';

const FAQ = () => {
    return (
        <main className="overflow-hidden ">
            <Hero />
            <FAQSection />
            <FAQBtn />
            <Contact />
        </main>
    );
};

export default FAQ;
