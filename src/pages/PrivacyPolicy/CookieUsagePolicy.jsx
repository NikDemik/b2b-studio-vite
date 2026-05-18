import PolitikaIspolzovaniyaFajlovCookie from '../../components/agrements/PolitikaIspolzovaniyaFajlovCookie';

const CookieUsagePolicy = () => {
    return (
        <>
            <div className="container-full relative z-1 mx-auto px-4 py-32 md:pt-72 md:pb-24 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-start">
                    Политика использования файлов cookie
                </h1>

                <PolitikaIspolzovaniyaFajlovCookie />
            </div>
            <div className=" absolute z-0 -top-0 w-full pointer-events-none">
                <img src="/images/bg/hero.png" className=" max-lg:h-auto" alt="hero" />
            </div>
        </>
    );
};

export default CookieUsagePolicy;
